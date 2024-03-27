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

namespace RandomPoem {

let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let predicate: string[] = ["braut", "liebt", "studiert", "versteckt", "zaubert", "zerstört"];
let object: string[] = ["Zaubertränke", "Horkruxe", "Hogwarts", "Zauberstäbe", "Dementoren", "Werwölfe"];


//console.log(subject);
//console.log(predicate);
//console.log(object);


for (let i = subject.length; i > 0; i--) { //i>0 --> Schleife geht bis 0 durch i-- --> Eine Wiederholung wird in jeder Ausführung abgezogen
    //console.log(i);
    //console.log(getVerse(subject, predicate, object));
    getVerse(subject, predicate, object);
    
}

function getVerse(_subject: string[], _predicate:string[], _object: string[]):void {
    let sentence1: string = "";
    let randomNumb: number = Math.floor(Math.random() * _subject.length);
    _subject.splice(randomNumb,1);
}


}