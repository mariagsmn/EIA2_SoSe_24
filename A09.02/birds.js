var A09_02;
(function (A09_02) {
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
        animateFromLeftToRight(ctx, distance) {
            console.log(distance);
        }
    }
    A09_02.Birds = Birds;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=birds.js.map