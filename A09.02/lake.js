var A09_02;
(function (A09_02) {
    class Lake {
        x;
        y;
        radius;
        color;
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }
        // See zeichnen
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(170, 160, 50, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }
    }
    A09_02.Lake = Lake;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=lake.js.map