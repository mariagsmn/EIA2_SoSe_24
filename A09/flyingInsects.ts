class FlyingInsects {
    draw(ctx: CanvasRenderingContext2D) {
        // Insekten zeichnen
        ctx.beginPath();
        ctx.arc(250, 80, 2, 0, Math.PI * 2); // Beispielposition und -größe des Insekts
        ctx.fillStyle = "black"; // Schwarz für das Insekt
        ctx.fill();
        ctx.closePath();
    }
}