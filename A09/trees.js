class Trees {
    draw(ctx) {
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
//# sourceMappingURL=trees.js.map