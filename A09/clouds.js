class Clouds {
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
    //Wolke1 zeichnen
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(80, 23, 15, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
        //Wolke2 zeichnen
        ctx.beginPath();
        ctx.arc(230, 15, 12, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}
//# sourceMappingURL=clouds.js.map