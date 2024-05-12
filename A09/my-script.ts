namespace A09 {

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
        const grass = new Grass();
        const lake = new Lake();
        const flyingInsects = new FlyingInsects();

        function draw() {
            sky.draw(ctx);  //draw-Aufruf von dem Himmel
            mountains.draw(ctx);  //draw-Aufruf von den Bergen
            drawBackground();
            cloud1.draw(ctx);  //draw-Aufruf von den Wolke1
            cloud2.draw(ctx);  //draw-Aufruf von  Wolke2
            sun.draw(ctx);  //draw-Aufruf von der Sonne
            lake.draw(ctx); ////draw-Aufruf vom See
            trees.draw(ctx);  //draw-Aufruf von dem Baum
            birds.draw(ctx);  //draw-Aufruf von den Vögeln
            grass.draw(ctx); //draw-Aufruf vom Gras
            flyingInsects.draw(ctx);  //draw-Aufruf von den fliegenden Insekten
        }

        function drawBackground(): void {
            console.log("Background");
    
            let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0.1, "#2980b9");
            gradient.addColorStop(0.27, "orangered"); 
            gradient.addColorStop(0.27, "hsl(120, 60%, 30%)");
    
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
        }


        draw();
    });


}
