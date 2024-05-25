var A09_02;
(function (A09_02) {
    class Clouds {
        x;
        y;
        radius;
        color;
        constructor(_x, _y, _radius, _color) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
            this.color = _color;
        }
        draw(ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(this.x, this.y);
            ctx.arc(15, -80, 15, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }
        move(ctx) {
            this.x = this.x + 0.2;
            this.draw(ctx);
        }
    }
    class Duck {
        positionX;
        positionY;
        color;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
        }
        move(ctx) {
            this.positionX = this.positionX + 1;
            this.draw(ctx);
        }
        moveToLeft(ctx) {
            this.positionX = this.positionX - 1;
            this.draw(ctx);
        }
        draw(ctx) {
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
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        const sun = new A09_02.Sun(canvas.width - 50, 50, 30); // Position oben rechts
        const mountains = new A09_02.Mountains();
        const cloud = new Clouds(200, 80, 30, "white");
        const trees = new A09_02.Trees();
        const birds = new A09_02.Birds();
        const grass = new A09_02.Grass();
        const lake = new A09_02.Lake(300, 200, 80, "blue");
        const flyingInsects = new A09_02.FlyingInsects();
        function draw() {
            //    sky.draw(ctx);  //draw-Aufruf von dem Himmel
            drawBackground();
            mountains.draw(ctx); //draw-Aufruf von den Bergen
            sun.draw(ctx); //draw-Aufruf von der Sonne
            lake.draw(ctx); //draw-Aufruf vom See
            trees.draw(ctx); //draw-Aufruf von dem Baum
            birds.draw(ctx); //draw-Aufruf von den Vögeln
            birds.animateFromLeftToRight(ctx, 20);
            grass.draw(ctx); //draw-Aufruf vom Gras
            flyingInsects.draw(ctx); //draw-Aufruf von den fliegenden Insekten   
            let ducks = [];
            let clouds = [];
            let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ducks.push(new Duck(100, 100, "yellow"));
            ducks.push(new Duck(100, 50, "black"));
            ducks.push(new Duck(40, 20, "red"));
            clouds.push(new Clouds(100, 100, 30, "white"));
            clouds.push(new Clouds(200, 105, 30, "white"));
            function animation() {
                ctx.putImageData(imgData, 0, 0);
                for (let duck of ducks) {
                    duck.move(ctx);
                }
                for (let cloud of clouds) {
                    cloud.move(ctx);
                }
            }
            function moveFromLeftToRight() {
                ctx.putImageData(imgData, 0, 0);
                for (let duck of ducks) {
                    duck.moveToLeft(ctx);
                }
                for (let cloud of clouds) {
                    cloud.draw(ctx);
                }
            }
            const animateToRight = window.setInterval(function () {
                animation();
            }, 24);
            window.setTimeout(() => {
                clearInterval(animateToRight);
            }, 3000); //nach 3 sek wird Code gestoppt (hört auf, sich nach rechts zu bewegen)
            window.setTimeout(() => {
                window.setInterval(() => {
                    moveFromLeftToRight();
                }, 24);
            }, 7000); // nach 7 sek neuer Intervall
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
        // zeichenfunktion für hintergrund
        // ctx.fillStyle = "red";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        //    ctx.getImageData(0, 0, canvas.width, canvas.height); // später mit putImagedata alten canvas wieder holen
    });
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=my-script.js.map