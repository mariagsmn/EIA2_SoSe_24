class Birds {
    draw(ctx) {
        // Vogel 1
        ctx.beginPath();
        ctx.moveTo(50, 50); // Startpunkt
        ctx.lineTo(70, 30); // Linie nach rechts oben
        ctx.lineTo(90, 50); // Linie nach rechts unten
        ctx.lineTo(70, 70); // Linie nach links unten
        ctx.closePath(); // Schließe den Pfad
        ctx.fillStyle = "black"; // Farbe des Vogels
        ctx.fill(); // Fülle den Vogel
        // Vogel 2
        ctx.beginPath();
        ctx.moveTo(150, 70); // Startpunkt
        ctx.lineTo(170, 50); // Linie nach rechts oben
        ctx.lineTo(190, 70); // Linie nach rechts unten
        ctx.lineTo(170, 90); // Linie nach links unten
        ctx.closePath(); // Schließe den Pfad
        ctx.fillStyle = "black"; // Farbe des Vogels
        ctx.fill(); // Fülle den Vogel
    }
}
//# sourceMappingURL=birds.js.map