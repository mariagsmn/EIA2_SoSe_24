var A09;
(function (A09) {
    window.addEventListener("load", () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        const sky = new Sky();
        const cloud1 = new Clouds(100, 100, 30, "white");
        const cloud2 = new Clouds(200, 150, 30, "white");
        const sun = new Sun(canvas.width - 50, 50, 30); // Position oben rechts
        const mountains = new Mountains();
        const trees = new Trees();
        const birds = new Birds();
        const grass = new Grass();
        const flyingInsects = new FlyingInsects();
        function draw() {
            sky.draw(ctx); //draw-Aufruf von dem Himmel
            cloud1.draw(ctx); //draw-Aufruf von den Wolke1
            cloud2.draw(ctx); //draw-Aufruf von  Wolke2
            sun.draw(ctx); //draw-Aufruf von der Sonne
            mountains.draw(ctx); //draw-Aufruf von den Bergen
            trees.draw(ctx); //draw-Aufruf von den Bäumen
            birds.draw(ctx); //draw-Aufruf von den Vögeln
            grass.draw(ctx); //draw-Aufruf von der "Landebahn"
            flyingInsects.draw(ctx); //draw-Aufruf von den fliegenden Insekten
        }
        draw();
    });
})(A09 || (A09 = {}));
//# sourceMappingURL=my-script.js.map