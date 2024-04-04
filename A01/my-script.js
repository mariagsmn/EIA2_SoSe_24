// Vorlesung Notizen
/*
   Array immer mit [] kennzeichnen!
   Bsp.: let a: number[] = [1, 2, 3]
   Es kann ein Array IN einem Array sein
*/
/*
   p = ["Hallo", "Welt"]
   let q = p
   q = ["Hallo", "Welt"]
   q[1] = "Universum"
   p = ["Hallo", "Universum"]
   p hat sich verändert, obwohl wir nur q neu zugewiesen haben!!!
   p bzw. q sind nur "Adressen", Wert darin kann sich ändern
*/
/*
   normales Array:
   let a:number[] = [7, 1, 2]
   Assoziatives Array:
   let s = {"Ergebnis1": 7, "Ergebnis2": true, "Ergebnis3": "Hallo"}
   Elemente werden mit sog. Schlüsseln verknüpft
   um auf 2. Wert zuzugreifen: s["Ergebnis2"] ODER s.Ergebnis2
*/
/*
    interface VectorWithMeaning {
    x: number;
    y: number;
    meaning: string;
    }
    let vector: VectorWithMeaning = {x: 12.4, y: -7.2, meaning: "Ortsvektor"};

    definiert Werte/Rahmen vor und muss später dann verwendet werden, nicht mehr Werte!
*/
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate = ["braut", "liebt", "studiert", "versteckt", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "Horkruxe", "Hogwarts", "Zauberstäbe", "Dementoren", "Werwölfe"];
    //console.log(subject);
    //console.log(predicate);
    //console.log(object);
    for (let i = subject.length; i > 0; i--) { //i>0 --> Schleife geht bis 0 durch i-- --> Eine Wiederholung wird in jeder Ausführung abgezogen
        //console.log(i);
        //console.log(getVerse(subject, predicate, object));
        let sentence = getVerse(subject, predicate, object);
        console.log(sentence);
    }
    function getVerse(_subject, _predicate, _object) {
        let sentence = "";
        let randomNumbsubject = Math.floor(Math.random() * _subject.length);
        let randomNumbpredicate = Math.floor(Math.random() * _predicate.length);
        let randomNumbobject = Math.floor(Math.random() * _object.length);
        sentence += _subject.splice(randomNumbsubject, 1) + " "; //+= nimmt Wert und addiert subject.splice
        sentence += _predicate.splice(randomNumbpredicate, 1) + " ";
        sentence += _object.splice(randomNumbobject, 1) + " ";
        return sentence;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=my-script.js.map