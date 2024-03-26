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
//# sourceMappingURL=my-script.js.map