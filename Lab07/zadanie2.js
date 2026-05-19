const prompt = require('prompt-sync')();

class Ocena {
    przedmiot;
    wartosc

    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    sredniaOcen;
    oceny;
    imie;
    nazwisko;

    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.sredniaOcen = 0.0;
        this.oceny = [];
    }

    hello = function(){
        return "Witaj " + this.imie + " " + this.nazwisko + ", twoja średnia ocen to: " + this.sredniaOcen + ".";
    }

    setOceny = function(noweOceny) {
        let suma = 0;

        for (let i = 0; i < noweOceny.length; i++) {
            if(noweOceny[i] instanceof Ocena) {
                this.oceny.push(noweOceny[i]);
                suma += noweOceny[i].wartosc;
            }
            else{
                console.log("Mamy błąd, dana ocena nie jest instancją klasy ocena")
                console.log("Index: " + i);
                console.log("Wartość: " + noweOceny[i]);
            }
        }

        if(this.oceny.length > 0){
            this.sredniaOcen = suma / this.oceny.length;
            console.log("Nowa średnia: " + this.sredniaOcen);
        }
    }

    getOceny = function(){
        let wyraz = "";
        for(let i = 0; i < this.oceny.length; i++){
            wyraz += "Przedmiot: " + this.oceny[i].przedmiot + " - ocena " + this.oceny[i].wartosc + ".\n";
        }
        return wyraz;
    }


}

let s = new Student('Jan', 'Kowalski');
console.log(s.hello());

o1 = new Ocena("WPR", 4);
o2 = new Ocena("TIN", 3);
o3 = new Ocena("POJ", 2);
tablica = [o1, o2, o3];
s.setOceny(tablica);
console.log(s.getOceny());