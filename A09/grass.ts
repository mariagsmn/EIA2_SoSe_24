class Grass {
    draw(ctx: CanvasRenderingContext2D) {
        // Grasboden zeichnen
        ctx.fillStyle = "#228B22"; // Grün für den Grasboden
        ctx.fillRect(0, 400, ctx.canvas.width, ctx.canvas.height - 400); // Grasboden von der unteren Seite des Canvas
    }
}