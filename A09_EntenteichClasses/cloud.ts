namespace EntenteichClasses {

    export class Cloud {
        position: Vector;
        color: string;
        size: Vector;

        constructor() {
            console.log("Cloud Constructor")
        }

        move(): void {
            console.log("Cloud move")
        }

        draw(): void {
            console.log("Cloud draw")
            let numberOfParticles: number = 50; // Anzahl der Partikel in der Wolke
            let cloudWidth: number = 120; // Breite der Wolke
            let cloudHeight: number = 40; // Höhe der Wolke
            let xPosition: number = 40; // Feste X-Position der Wolke
            let yPosition: number = 50; // Y-Position der Wolke
            let random = pseudoRandom(42)

            for (let i = 0; i < numberOfParticles; i++) {
                let x = xPosition + (i * (cloudWidth / numberOfParticles)); // Feste X-Position für jeden Partikel, abhängig von der Wolkenbreite
                let y = yPosition + (random() * cloudHeight); // Zufällige Y-Position innerhalb der Wolke
                this.drawCloudParticle(x, y); // Partikel zeichnen
            }
        }

        drawCloudParticle(x: number, y: number): void {
            let gradient = crc2.createRadialGradient(x, y, 0, x, y, 15);

            // Farben für den Gradienten festlegen
            gradient.addColorStop(0, "white"); // Der Innenbereich des Partikels ist undurchsichtig (weiß)
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Der äußere Bereich des Partikels wird transparent

            // Stelle den Gradienten als Füllfarbe für das Partikel ein

            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y, 15, 0, Math.PI * 2); // Kreispartikel zeichnen
            crc2.fillStyle = gradient; // Gradient für Wolke
            crc2.fill();
            crc2.restore();
        }



    }
}