namespace A09_02 {

    class Clouds {
        x: number;
        y: number;
        radius: number;
        color: string;
   
       constructor(_x: number, _y: number, _radius: number, _color: string) {
           this.x = _x;
           this.y = _y;
           this.radius = _radius;
           this.color = _color;
       }

       draw(ctx: CanvasRenderingContext2D) {
           ctx.save();
           ctx.beginPath();
           ctx.translate(this.x, this.y);
           ctx.arc(15, -80, 15, 0, Math.PI * 2);
           ctx.fillStyle = "white";
           ctx.fill();
           ctx.closePath();
           ctx.restore();
       }
       
       move(ctx: CanvasRenderingContext2D): void {
        this.x = this.x + 0.2;
        this.draw(ctx);
    }
       
   }   

   class Duck {
    positionX: number;
    positionY: number;
    color: string;

    constructor(_positionX: number, _positionY: number, _color: string) {
        this.positionX = _positionX;
        this.positionY = _positionY;
        this.color = _color;
    }

    move(ctx: CanvasRenderingContext2D): void {
        this.positionX = this.positionX + 1;
        this.draw(ctx)
    }

    moveToLeft(ctx: CanvasRenderingContext2D): void {
        this.positionX = this.positionX - 1;
        this.draw(ctx)
    }


    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.positionX, this.positionY);

        ctx.fillStyle = this.color;
        ctx.arc(10, 10, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.ellipse(25, 28, 25, 20, 0, 0, 2 * Math.PI);
        ctx.fill();

        ctx.closePath();
        ctx.restore();
    }
}

    window.addEventListener("load", () => {
        const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        const sun = new Sun(canvas.width - 50, 50, 30); // Position oben rechts
        const mountains = new Mountains();
        const cloud = new Clouds(200, 80, 30, "white");
        const trees = new Trees();
        const birds = new Birds();
        const grass = new Grass();
        const lake = new Lake(300, 200, 80, "blue");
        const flyingInsects = new FlyingInsects();

        function draw() {
            //    sky.draw(ctx);  //draw-Aufruf von dem Himmel
            drawBackground();
            mountains.draw(ctx);  //draw-Aufruf von den Bergen

            sun.draw(ctx);  //draw-Aufruf von der Sonne
            lake.draw(ctx);  //draw-Aufruf vom See
            trees.draw(ctx);  //draw-Aufruf von dem Baum
            birds.draw(ctx);  //draw-Aufruf von den Vögeln
            birds.animateFromLeftToRight(ctx, 20);
            grass.draw(ctx); //draw-Aufruf vom Gras
            flyingInsects.draw(ctx);  //draw-Aufruf von den fliegenden Insekten   

                    
            let ducks: Duck[] = [];
            let clouds: Clouds[] = [];
            let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            ducks.push(new Duck(100, 100, "yellow"))
            ducks.push(new Duck(100, 50, "black"))
            ducks.push(new Duck(40, 20, "red"))

            clouds.push(new Clouds(100, 100, 30, "white"))
            clouds.push(new Clouds(200, 105, 30, "white"))

            function animation(): void {
                ctx.putImageData(imgData, 0, 0);

                for (let duck of ducks) {
                    duck.move(ctx);
                }

                for(let cloud of clouds) {
                    cloud.move(ctx);
                }
            }

            function moveFromLeftToRight(): void {
                ctx.putImageData(imgData, 0, 0);

                for (let duck of ducks) {
                    duck.moveToLeft(ctx);
                }

                for (let cloud of clouds) {
                    cloud.draw(ctx);
                }

                
            }

            const animateToRight = window.setInterval(function(): void{
                animation();
            }, 24)

            window.setTimeout(() => {
                clearInterval(animateToRight)
            }, 3000)  //nach 3 sek wird Code gestoppt (hört auf, sich nach rechts zu bewegen)

            window.setTimeout(() => {
                window.setInterval(() => {
                    moveFromLeftToRight();
                }, 24)
            }, 7000) // nach 7 sek neuer Intervall

        }

        function drawBackground(): void {
            let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0.1, "#2980b9");
            gradient.addColorStop(0.27, "orangered");
            gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        draw();

        // zeichenfunktion für hintergrund
        // ctx.fillStyle = "red";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        //    ctx.getImageData(0, 0, canvas.width, canvas.height); // später mit putImagedata alten canvas wieder holen


    });







}

