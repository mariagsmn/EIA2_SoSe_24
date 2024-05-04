namespace A08_01 {

    window.addEventListener("load", handleLoad); // Wenn das Fenster vollständig geladen ist, wird die Funktion handleLoad aufgerufen.

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas"); // Das Canvas-Element im DOM wird ausgewählt und der Variablen canvas zugewiesen.
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); // Der 2D-Zeichenkontext des Canvas wird abgerufen und der Variablen crc2 zugewiesen.

        canvas.setAttribute("width", window.innerWidth + "px")  // Weite des Canvas wird vergrößert
        canvas.setAttribute("height", window.innerHeight + "px")  // Höhe des Canvas wird vergrößert


        let strokecolour: string;
        let fillColour: string;

        // Eine verschachtelte Schleife wird verwendet, um Rechtecke zu zeichnen.
        for (let i: number = 0; i < 4; i++) { // Äußere Schleife für die erste Farbe.
            for (let z: number = 0; z < 3; z++) { // Innere Schleife für die zweite Farbe.
                let x: number = Math.random() * 600; // Zufällige x-Position des Rechtecks.
                let y: number = (i * 80) * z; // Berechnung der y-Position des Rechtecks.


                // Switchcase für die Auswahl der Farben basierend auf dem äußeren und inneren Index.
                switch (i) {
                    case 0:
                        strokecolour = "blue"; // Stroke-Farbe für den Fall 0.
                        break;
                    case 1:
                        strokecolour = "brown"; // Stroke-Farbe für den Fall 1.
                        break;
                    case 2:
                        strokecolour = "yellow"; // Stroke-Farbe für den Fall 2.
                        break;
                    case 3:
                        strokecolour = "darkgreen"; // Stroke-Farbe für den Fall 3.
                        break;
                }

                switch (z) {
                    case 0:
                        fillColour = "lightblue"; // Füllfarbe für den Fall 0.
                        break;
                    case 1:
                        fillColour = "pink"; // Füllfarbe für den Fall 1.
                        break;
                    case 2:
                        fillColour = "lightgreen"; // Füllfarbe für den Fall 2.
                        break;
                    default:
                        fillColour = "grey"; // Füllfarbe für jeden anderen Fall.
                }

                drawRectangle(x, y, strokecolour, fillColour); // Die Funktion drawRectangle wird aufgerufen, um das Rechteck zu zeichnen.
            }
        }

        for (let i: number = 0; i < 10; i++) {
            for (let z: number = 0; z < 10; z++) {
                let x: number = Math.random() * 300;
                let y: number = (i * 80) + (z + 30) * z;
                drawCircle(x, y)
            }
        }
    }

    function drawRectangle(_x: number, _y: number, _strokeColour: string, _fillColour: string): void {
        crc2.fillStyle = _fillColour;   // Die Füllfarbe des Rechtecks wird festgelegt.
        crc2.strokeStyle = _strokeColour;   // Die Linienfarbe des Rechtecks wird festgelegt.

        crc2.strokeRect(_x, _y, 40, 40); // Das Rechteck wird mit Linien gezeichnet.
        crc2.fillRect(_x, _y, 40, 40); // Das Rechteck wird gefüllt.
    }



    function drawCircle(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);

        // eine random Zahl für die Farbe generieren
        let colorIndex: number = Math.floor(Math.random() * 5); //  Zahl zwischen 0 und 3

        // Switchcase um Farbe anhand der random Zahl zuzuordnen   
        switch (colorIndex) {
            case 0:
                crc2.strokeStyle = "pink";
                break;
            case 1:
                crc2.strokeStyle = "blue";
                break;
            case 2:
                crc2.strokeStyle = "lightgreen";
                break;
            case 3:
                crc2.strokeStyle = "lightblue";
                break;
            case 4:
                crc2.strokeStyle = "yellow";
                break;
            default:
                crc2.strokeStyle = "grey";
                break;
        }

        crc2.stroke();
    }
}


