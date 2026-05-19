const prompt = require('prompt-sync')();

class Auto {
    rok;
    przebieg;
    cena_wyjsciowa;
    cena_koncowa;

    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    a = function(){
        this.cena_wyjsciowa += 1000;
    }

    b = function(rok){
        this.cena_koncowa = this.cena_wyjsciowa - ((rok - this.rok) * 1000);
    }

    c = function(){
        this.cena_koncowa -= (Math.trunc(this.przebieg / 100000) * 10000);
    }

    d = function(nowyRok,nowyPrzebieg ){
        this.rok = nowyRok;
        this.przebieg = nowyPrzebieg;

        this.a();
        this.b(2026);
        this.c();
    }
}
let a1 = new Auto(2024, 100000, 9000);
let a2 = new Auto(2024, 100000, 20000);

a1.a();
a1.b(2026);
a1.c();
console.log(a1.cena_koncowa);

a2.a();
a2.b(2026);
a2.c();
console.log(a2.cena_koncowa);

function podpunktE(autoObj){
    autoObj.a();
    autoObj.b(2026);
    autoObj.c();

    if(autoObj.cena_koncowa > 10000){
        tablica.push(autoObj);
    }
}

function podpunktF(){
    tablica.forEach(auto => {
        auto.rok += 1;
        }
    );
}

let tablica = [];
let a3 = new Auto(2024, 100000, 9000);
let a4 = new Auto(2024, 100000, 25000);

podpunktE(a3);
podpunktE(a4);

podpunktF();

console.log(tablica);