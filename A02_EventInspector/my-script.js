let fixedspan = document.querySelector(".fixed-span"); // HTML-Element, was verändert werden soll wird ausgewählt
window.addEventListener("mousemove", moveSpan); // ganzes Fenster führt Funktion bei Mausbewegung aus
window.addEventListener("click", logInfo);
window.addEventListener("keyup", logInfo);
function moveSpan(_event) {
    fixedspan.style.top = `${_event.clientY}px`; // auf zuvor ausgewähltes HTML wird zugegriffen, Style-Property (Inline-CSS) wird verändert - Top (Y-Achse)
    fixedspan.style.left = `${_event.clientX}px`; // auf zuvor ausgewähltes HTML wird zugegriffen, Style-Property (Inline-CSS) wird verändert - Left (X-Achse)
    logInfo(_event);
    fixedspan.innerHTML = `x: ${_event.clientX} <br> y: ${_event.clientY}`; //ZUSÄTZLICH: Koordinaten werden in fixedspan geschrieben
}
function logInfo(_event) {
    console.log(_event.target);
    console.log(_event.type);
    console.log(_event.currentTarget);
    console.log(_event);
}
// `$ macht, dass Zahlenwerte in einen String (dynamisch) eingefügt werden können
//# sourceMappingURL=my-script.js.map