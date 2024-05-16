namespace A09_02{
    export class Trees {
    draw(ctx: CanvasRenderingContext2D) {

        // Baumstamm1
        ctx.fillStyle = "brown";   // Die Füllfarbe des Rechtecks wird festgelegt.
        ctx.strokeStyle = "brown";   // Die Linienfarbe des Rechtecks wird festgelegt.

        ctx.strokeRect(50, 120, 20, 30); // Das Rechteck wird mit Linien gezeichnet.
        ctx.fillRect(50, 120, 20, 30); // Das Rechteck wird gefüllt.

        // Baumkrone1 zeichnen
        ctx.beginPath();
        ctx.arc(60, 100, 40, 0, Math.PI * 2); // Beispielposition und -größe der Baumkrone
        ctx.fillStyle = "darkgreen"; // Grün für die Baumkrone
        ctx.fill();
        ctx.closePath();

        // Baumstamm2
        ctx.fillStyle = "brown";   // Die Füllfarbe des Rechtecks wird festgelegt.
        ctx.strokeStyle = "brown";   // Die Linienfarbe des Rechtecks wird festgelegt.

        ctx.strokeRect(140, 120, 20, 30); // Das Rechteck wird mit Linien gezeichnet.
        ctx.fillRect(140, 120, 20, 30); // Das Rechteck wird gefüllt.

        // Baumkrone2 zeichen
        ctx.beginPath();
        ctx.arc(150, 100, 20, 0, Math.PI * 2); // Beispielposition und -größe der Baumkrone
        ctx.fillStyle = "darkgreen"; // Grün für die Baumkrone
        ctx.fill();
        ctx.closePath();
    }
}
}