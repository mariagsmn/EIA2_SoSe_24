namespace Boxes {
    let n: number = 5;
    let color: string;
    let x: number = 0;
    let y: number = 0;
// for-Schleife zur Erstellung der Boxen
    for (let i: number = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50; // wenn y = 2 dann + 20, wenn nich 2, dann + 5
        x = (x + 170) % 400;
        switch (i) { // Festlegen der Farbe basierend auf dem Wert von i
            case 0:
                color = "#ff0000"; // Rote Farbe für i == 0
                break;
            case 1:
            case 4:
                color = "#00ff00";// Grüne Farbe für i == 1 oder i == 4
                break;
            case 3:
                continue; // Überspringen der aktuellen Iteration für i == 3
            default:
                color = "#0000ff"; // Blaue Farbe für alle anderen Werte von i
        }
        // Innere Schleife zur Erstellung verschiedener Größen
        for (let size of ["big", "medium", "small"]) {
            createBox(color, x, y, size); // Aufruf der Funktion zur Erstellung einer Box mit den Parametern
            if (i == 4)         // wenn i GENAU 4 ist
                break; // Beenden der inneren Schleife vorzeitig
        }
    }

    // Funktion zur Erstellung einer Box
    function createBox(_color: string, _x: number, _y: number, _size: string): void {
        let div: HTMLDivElement = document.createElement("div"); // Erstellen eines <div>-Elements
        document.body.appendChild(div); // Hinzufügen des <div>-Elements zum Body des Dokuments
        div.classList.add(_size); // Hinzufügen einer Klasse entsprechend der Größe der Box
        div.style.backgroundColor = _color; // Festlegen der Hintergrundfarbe der Box
        div.style.left = _x + "px"; // Festlegen der linken Position der Box
        div.style.top = _y + "px"; // Festlegen der oberen Position der Box
    }
}