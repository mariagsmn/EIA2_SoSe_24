namespace Einkaufsliste_Formular {
    
    document.addEventListener('DOMContentLoaded', () => {

        //  'newProduct'auswählen und Variable zuweisen
        const newProductButton = document.querySelector('.newProduct') as HTMLButtonElement;

        //  Event-Listener reagiert auf Klicks auf Button 
        newProductButton.addEventListener('click', newProduct);

        
        function newProduct() {
            // Kommentar in Konsole, wenn neues Produkt hinzugefügt wird
            console.log("Ein neues Produkt wird hinzugefügt");
            
            // Hauptcontainer wird Variable zugewiesen
            const container = document.querySelector('main');

            // Neues div-Element 
            const newDiv = document.createElement('div');
            newDiv.className = 'box';
    
            // Formularfelder für neues div-Element
            newDiv.innerHTML = `
            <form>
                <p>Produkt</p>
                <input type="text" id="product" value="Klopapier" >
                <br>
                <p>Menge</p>
                <input type="number" id="amount" value="2" >
                <br>
                <p>Kommentar</p>
                <input type="text" id="comment" value="gute Qualität pls" >
                <br>
                <p>letzter Kauf</p>
                <input type="date" id="lastBought" >
                <br>
                <p>gekauft</p>
                <input type="checkbox" id="bought">
                <p>löschen</p>
                <input type="checkbox" id="delete">
            </form>
            `;
    
            // div-Element wird Hauptcontainer hinzugefügt
            if (container) {
                container.appendChild(newDiv);
            }
    
            // Event-Listener für den Löschen-Button
            const deleteButton = newDiv.querySelector('.delete') as HTMLButtonElement;
            deleteButton.addEventListener('click', () => {

                // Kommentar in Konsole, wenn Produkt gelöscht wird
                console.log("Das Produkt wird gelöscht");

                // Produkt-Element aus Hauptcontainer entfernen (-> beide vorhanden)
                if (container && newDiv) {
                    container.removeChild(newDiv);
                }
            });

            // Event-Listener für Eingabefelder
            const inputs = newDiv.querySelectorAll('input, select') as NodeListOf<HTMLInputElement | HTMLSelectElement>;
            inputs.forEach(input => {

                // Event-Listener für jedes Eingabefeld
                input.addEventListener('input', () => {

                    // Kommentar in Konsole, Wenn Eingabe im Feld
                    console.log('Eingabe in Feld ${input.id}: Wurde hinzugefügt');
                });
            });
        }
    });
}









