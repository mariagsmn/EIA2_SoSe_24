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
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}
//# sourceMappingURL=sun.js.map