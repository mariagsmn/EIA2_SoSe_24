var A09_02;
(function (A09_02) {
    class Grass {
        draw(ctx) {
            // Grasboden zeichnen
            ctx.fillStyle = "#228B22"; // Grün für den Grasboden
            ctx.fillRect(0, 400, ctx.canvas.width, ctx.canvas.height - 400); // Grasboden von der unteren Seite des Canvas
        }
    }
    A09_02.Grass = Grass;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=grass.js.map