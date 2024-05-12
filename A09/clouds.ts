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

    //Wolke1 zeichnen
    draw(ctx: CanvasRenderingContext2D) {
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
