var A09_02;
(function (A09_02) {
    class FlyingInsects {
        draw(ctx) {
            // Insekt zeichnen
            ctx.beginPath();
            ctx.arc(250, 80, 2, 0, Math.PI * 2); // Beispielposition und -größe des Insekts
            ctx.fillStyle = "black"; // Schwarz für das Insekt
            ctx.fill();
            ctx.closePath();
        }
    }
    A09_02.FlyingInsects = FlyingInsects;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=flyingInsects.js.map