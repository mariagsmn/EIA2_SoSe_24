class FlyingInsects {
    draw(ctx) {
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
//# sourceMappingURL=flyingInsects.js.map