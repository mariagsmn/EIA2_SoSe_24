class Clouds {
    private x: number;
    private y: number;
    private radius: number;
    private color: string;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}