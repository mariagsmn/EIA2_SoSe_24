var A09_02;
(function (A09_02) {
    class Sky {
        draw(ctx) {
            const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0, "#87CEEB"); // Helle Himmelsfarbe
            gradient.addColorStop(1, "#4682B4"); // Dunklere Himmelsfarbe
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }
    A09_02.Sky = Sky;
})(A09_02 || (A09_02 = {}));
//# sourceMappingURL=sky.js.map