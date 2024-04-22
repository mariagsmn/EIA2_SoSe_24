// Ereignisse abfangen
document.getElementById('shopping-list').addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('bought-btn')) {
        markAsBought(target.parentElement);
    }
    else if (target.classList.contains('delete-btn')) {
        deleteItem(target.parentElement);
    }
});
// Funktionen für Interaktionen
function markAsBought(item) {
    const itemName = item.querySelector('.name').textContent;
    console.log(`${itemName} wurde gekauft.`);
    item.remove(); // Hier könnte man weitere Funktionalitäten implementieren, z.B. das Item durchstreichen oder anders darstellen
}
function deleteItem(item) {
    const itemName = item.querySelector('.name').textContent;
    console.log(`${itemName} wurde gelöscht.`);
    item.remove();
}
//# sourceMappingURL=my-script.js.map