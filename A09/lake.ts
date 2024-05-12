class Lake {
    x: number;
    y: number;
    radius: number;
    color: string;

   constructor(x: number, y: number, radius: number, color: string) {
       this.x = x;
       this.y = y;
       this.radius = radius;
       this.color = color;
   }

   // See zeichnen
   draw(ctx: CanvasRenderingContext2D) {
       ctx.beginPath();
       ctx.arc(170, 160, 50, 0, Math.PI * 2);
       ctx.fillStyle = "blue";
       ctx.fill();
       ctx.closePath();  
}
}

