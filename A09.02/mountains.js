var A09_02;
(function (A09_02) {
    class Mountains {
        draw(ctx) {
            ctx.beginPath();
            ctx.moveTo(50, 400); // Startpunkt des ersten Berges
            ctx.lineTo(200, 200); // Erste Bergspitze
            ctx.lineTo(350, 400); // Endpunkt des ersten Berges
            ctx.moveTo(250, 400); // Startpunkt des zweiten Berges
            ctx.lineTo(400, 200); // Zweite Bergspitze
            ctx.lineTo(550, 400); // Endpunkt des zweiten Berges
            ctx.fillStyle = "#A9A9A9"; // Graue Farbe für die Berge
            ctx.fill();
        }
    }
    A09_02.Mountains = Mountains;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=mountains.js.map