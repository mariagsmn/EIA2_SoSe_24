namespace Einkaufsliste_Formular {

// Wenn das Fenster vollständig geladen ist, wird die Funktion "handleLoad" ausgeführt.
window.addEventListener("load", handleLoad);

// Die Funktion "handleLoad" wird definiert und nimmt ein Event-Objekt entgegen.
function handleLoad(_event: Event): void {
    // Das HTML-Element mit der ID "addButton" wird aus dem Dokument ausgewählt und der Variablen "addbutton" zugewiesen.
    let addbutton: HTMLElement = <HTMLElement>document.getElementById("addButton");
    // Dem "addbutton"-Element wird ein "click"-Event-Listener hinzugefügt, der die Funktion "generateContent" aufruft.
    addbutton.addEventListener("click", generateContent);
    // Eine Meldung wird in der Konsole ausgegeben, um zu bestätigen, dass die Funktion "handleLoad" aufgerufen wurde.
    console.log("handleLoad");
    // Die Funktion "Arraydata" wird aufgerufen.
    Arraydata()
}

// Die Funktion "generateContent" wird definiert und nimmt ein Event-Objekt entgegen.
function generateContent(_event: Event): void {
    // Eine Meldung wird in der Konsole ausgegeben, um zu bestätigen, dass der Button gedrückt wurde.
    console.log("du hast den button gedrückt");
    // Das HTML-Element mit der ID "product" wird aus dem Dokument ausgewählt und der Variablen "addProduct" zugewiesen.
    let addProduct: HTMLInputElement = <HTMLInputElement>document.getElementById("product");
    // Der Wert des "addProduct"-Elements wird der Variablen "productValue" zugewiesen.
    let productValue: string = addProduct.value;
    // Der Wert von "productValue" wird in der Konsole ausgegeben.
    console.log(productValue);
    // Das HTML-Element mit der ID "amount" wird aus dem Dokument ausgewählt und der Variablen "addAmount" zugewiesen.
    let addAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
    // Der Wert des "addAmount"-Elements wird der Variablen "amountValue" zugewiesen.
    let amountValue: string = addAmount.value;
    // Der Wert von "amountValue" wird in der Konsole ausgegeben.
    console.log(amountValue);
    // Das HTML-Element mit der ID "comment" wird aus dem Dokument ausgewählt und der Variablen "addComment" zugewiesen.
    let addComment: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
    // Der Wert des "addComment"-Elements wird der Variablen "amountComment" zugewiesen.
    let amountComment: string = addComment.value;
    // Der Wert von "amountComment" wird in der Konsole ausgegeben.
    console.log(amountComment);
}

// Die Funktion "Arraydata" wird definiert.
function Arraydata(): void {
    // Eine Schleife iteriert über jedes Element im Array "data".
    for (let entry of data) {
        // Die Eigenschaft "name" jedes Eintrags wird in der Konsole ausgegeben.
        console.log(entry.name);
        // Die Eigenschaft "amount" jedes Eintrags wird in der Konsole ausgegeben.
        console.log(entry.amount);
        // Die Eigenschaft "comment" jedes Eintrags wird in der Konsole ausgegeben.
        console.log(entry.comment);
        // Die Eigenschaft "lastBought" jedes Eintrags wird in der Konsole ausgegeben.
        console.log(entry.lastBought);
        // Die Eigenschaft "toBeBought" jedes Eintrags wird in der Konsole ausgegeben.
        console.log(entry.toBeBought);

        // Neue HTML-Input-Elemente werden erstellt und mit den entsprechenden Werten aus dem "data"-Array gefüllt.
        let newProduct = document.createElement("input");
        newProduct.value = entry.name;

        let newAmount = document.createElement("input");
        newAmount.value = entry.amount;

        let newComment = document.createElement("input");
        newComment.value = entry.comment;

        let newLastBought = document.createElement("input");
        newLastBought.value = entry.lastBought;

        let newtoBeBought = document.createElement("input");
        newtoBeBought.value = entry.toBeBought;

        // Das HTML-Element mit der Klasse "box1" wird aus dem Dokument ausgewählt und der Variablen "newHTML" zugewiesen.
        let newHTML = document.querySelector(".box1");
        // Ein neues Formular-Element wird erstellt und den Input-Elementen hinzugefügt.
        let newForm = document.createElement("form");
        newForm.appendChild(newProduct);
        newForm.appendChild(newAmount);
        newForm.appendChild(newComment);
        newForm.appendChild(newLastBought);
        newForm.appendChild(newtoBeBought);
        // Das neue Formular wird dem HTML-Element mit der Klasse "box1" hinzugefügt.
        newHTML.appendChild(newForm);
    }
}       // Das Array "data" wird definiert und enthält Objekte mit verschiedenen Eigenschaften.
        let data = [{
            name: "Brot",
            amount: "2",
            comment: "war abgelaufen",
            lastBought: "21.03.24",
            toBeBought: "true"
        },
        {
            name: "Banane",
            amount: "5",
            comment: "reif",
            lastBought: "04.04.24",
            toBeBought: "false"
        }];
}
