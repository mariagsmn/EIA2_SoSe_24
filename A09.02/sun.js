var A09_02;
(function (A09_02) {
    class Sun {
        x;
        y;
        radius;
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(280, 5, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "yellow";
            ctx.fill();
        }
    }
    A09_02.Sun = Sun;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=sun.js.map