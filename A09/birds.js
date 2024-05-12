class Birds {
    draw(ctx) {
        // Vogel 1
        ctx.beginPath();
        ctx.moveTo(60, 50); // Startpunkt
        ctx.lineTo(90, 30); // Linie nach rechts oben
        ctx.lineTo(130, 50); // Linie nach rechts unten
        ctx.lineTo(90, 40); // Linie nach links unten
        ctx.closePath(); // Schließe den Pfad
        ctx.fillStyle = "black"; // Farbe des Vogels
        ctx.fill(); // Fülle den Vogel
    }
}
//# sourceMappingURL=birds.js.map