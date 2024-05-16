var A09_02;
(function (A09_02) {
    window.addEventListener("load", () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        // const sky = new Sky();
        const cloud1 = new A09_02.Clouds(100, 100, 30, "white");
        const cloud2 = new A09_02.Clouds(200, 150, 30, "white");
        const sun = new A09_02.Sun(canvas.width - 50, 50, 30); // Position oben rechts
        const mountains = new A09_02.Mountains();
        const trees = new A09_02.Trees();
        const birds = new A09_02.Birds();
        const grass = new A09_02.Grass();
        const lake = new A09_02.Lake(300, 200, 50, "blue");
        const flyingInsects = new A09_02.FlyingInsects();
        function draw() {
            //    sky.draw(ctx);  //draw-Aufruf von dem Himmel
            mountains.draw(ctx); //draw-Aufruf von den Bergen
            drawBackground();
            cloud1.draw(ctx); //draw-Aufruf von den Wolke1
            cloud2.draw(ctx); //draw-Aufruf von  Wolke2
            sun.draw(ctx); //draw-Aufruf von der Sonne
            lake.draw(ctx); //draw-Aufruf vom See
            trees.draw(ctx); //draw-Aufruf von dem Baum
            birds.draw(ctx); //draw-Aufruf von den Vögeln
            birds.animateFromLeftToRight(ctx, 20);
            grass.draw(ctx); //draw-Aufruf vom Gras
            flyingInsects.draw(ctx); //draw-Aufruf von den fliegenden Insekten   
        }
        function drawBackground() {
            let gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0.1, "#2980b9");
            gradient.addColorStop(0.27, "orangered");
            gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        draw();
        class Duck {
            positionX;
            positionY;
            color;
            constructor(_positionX, _positionY, _color) {
                this.positionX = _positionX;
                this.positionY = _positionY;
                this.color = _color;
                this.draw();
            }
            move() {
                this.positionX = this.positionX + 2;
                this.draw();
            }
            draw() {
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
        // zeichenfunktion für tollen hintergrund
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.getImageData(0, 0, canvas.width, canvas.height); // später mit putImagedata alten canvas wieder holen
        let ducks = [];
        let imgData;
        ducks.push(new Duck(100, 100, "yellow"));
        ducks.push(new Duck(100, 50, "red"));
        function animation() {
            ctx.putImageData(imgData, 0, 0);
            for (let duck of ducks) {
                duck.move();
            }
        }
    });
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=my-script.js.map