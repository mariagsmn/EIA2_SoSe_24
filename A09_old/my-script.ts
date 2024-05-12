namespace A09 {

    class Sky {
        draw(ctx: CanvasRenderingContext2D) {

            const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0, "#87CEEB"); // Helle Himmelsfarbe
            gradient.addColorStop(1, "#4682B4"); // Dunklere Himmelsfarbe

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }

    class Clouds {
        private x: number;
        private y: number;
        private radius: number;
        private color: string;

        constructor(x: number, y: number, radius: number, color: string) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    class Sun {
        private x: number;
        private y: number;
        private radius: number;

        constructor(x: number, y: number, radius: number) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "yellow";
            ctx.fill();
        }
    }

    class Mountains {
        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.moveTo(50, 400); // Startpunkt des ersten Berges
            ctx.lineTo(200, 200); // Erste Bergspitze
            ctx.lineTo(350, 400); // Endpunkt des ersten Berges

            ctx.moveTo(250, 400); // Startpunkt des zweiten Berges
            ctx.lineTo(400, 200); // Zweite Bergspitze
            ctx.lineTo(550, 400); // Endpunkt des zweiten Berges


            ctx.fillStyle = "#A9A9A9"; // Graue Farbe für die Berge
            ctx.fill();
        }
    }

    class Trees {
        draw(ctx: CanvasRenderingContext2D) {
            // Baumstämme zeichnen
            ctx.fillStyle = "#8B4513"; // Braun für den Baumstamm
            ctx.fillRect(50, 150, 20, 100); // Beispielposition und -größe des Baumstamms
            ctx.fillRect(200, 200, 20, 100); // Beispielposition und -größe des Baumstamms

            // Baumkronen zeichnen
            ctx.beginPath();
            ctx.arc(60, 100, 40, 0, Math.PI * 2); // Beispielposition und -größe der Baumkrone
            ctx.fillStyle = "#008000"; // Grün für die Baumkrone
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(210, 150, 50, 0, Math.PI * 2); // Beispielposition und -größe der Baumkrone
            ctx.fillStyle = "#008000"; // Grün für die Baumkrone
            ctx.fill();
            ctx.closePath();
        }
    }

    class Birds {
        draw(ctx: CanvasRenderingContext2D) {
            // Vogel 1
            ctx.beginPath();
            ctx.moveTo(50, 50); // Startpunkt
            ctx.lineTo(70, 30); // Linie nach rechts oben
            ctx.lineTo(90, 50); // Linie nach rechts unten
            ctx.lineTo(70, 70); // Linie nach links unten
            ctx.closePath(); // Schließe den Pfad
            ctx.fillStyle = "black"; // Farbe des Vogels
            ctx.fill(); // Fülle den Vogel

            // Vogel 2
            ctx.beginPath();
            ctx.moveTo(150, 70); // Startpunkt
            ctx.lineTo(170, 50); // Linie nach rechts oben
            ctx.lineTo(190, 70); // Linie nach rechts unten
            ctx.lineTo(170, 90); // Linie nach links unten
            ctx.closePath(); // Schließe den Pfad
            ctx.fillStyle = "black"; // Farbe des Vogels
            ctx.fill(); // Fülle den Vogel
        }
    }

    class LandingSite {
        draw(ctx: CanvasRenderingContext2D) {
            // Grasboden zeichnen
            ctx.fillStyle = "#228B22"; // Grün für den Grasboden
            ctx.fillRect(0, 400, ctx.canvas.width, ctx.canvas.height - 400); // Grasboden von der unteren Seite des Canvas
        }
    }

    class FlyingInsects {
        draw(ctx: CanvasRenderingContext2D) {
            // Insekten zeichnen
            ctx.beginPath();
            ctx.arc(50, 50, 5, 0, Math.PI * 2); // Beispielposition und -größe des Insekts
            ctx.fillStyle = "black"; // Schwarz für das Insekt
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(150, 100, 5, 0, Math.PI * 2); // Position und Größe des Insekts
            ctx.fillStyle = "black"; // Schwarz für das Insekt
            ctx.fill();
            ctx.closePath();
        }
    }

    window.addEventListener("load", () => {
        const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        const sky = new Sky();
        const cloud1 = new Clouds(100, 100, 30, "white");
        const cloud2 = new Clouds (200, 150, 30, "white");
        const sun = new Sun(canvas.width - 50, 50, 30); // Position oben rechts
        const mountains = new Mountains();
        const trees = new Trees();
        const birds = new Birds();
        const landingSite = new LandingSite();
        const flyingInsects = new FlyingInsects();

        function draw() {
            sky.draw(ctx);  //draw-Aufruf von dem Himmel
            cloud1.draw(ctx);  //draw-Aufruf von den Wolke1
            cloud2.draw(ctx);  //draw-Aufruf von  Wolke2
            sun.draw(ctx);  //draw-Aufruf von der Sonne
            mountains.draw(ctx);  //draw-Aufruf von den Bergen
            trees.draw(ctx);  //draw-Aufruf von den Bäumen
            birds.draw(ctx);  //draw-Aufruf von den Vögeln
            landingSite.draw(ctx); //draw-Aufruf von der "Landebahn"
            flyingInsects.draw(ctx);  //draw-Aufruf von den fliegenden Insekten
        }

        draw();
    });


}
