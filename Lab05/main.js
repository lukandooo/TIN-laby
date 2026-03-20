const prompt = require('prompt-sync')();

function zadanie1(){
    const liczba1 = Number(prompt('Podaj liczbę A: '));
    const liczba2 = Number(prompt('Podaj liczbę B: '));
    const liczba3 = Number(prompt('Podaj liczbę C: '));

    if(isNaN(liczba1) || isNaN(liczba2) || isNaN(liczba3)) {
        console.log("Podane liczby nie są prawidłowe!");
        return;
    }

    if((liczba1**2 + liczba2**2 == liczba3**2) || (liczba2**2 + liczba3**2 == liczba1**2) || (liczba3**2 + liczba1**2 == liczba2**2)) {
        console.log("Twierdzenie pitagorasa spełnione!");
        console.log("Trójkąt jest prostokątny!");
    } else {
        console.log("Liczby nie spełniają twierdzenia pitagorasa... :(");
    }
}

//zadanie1();

function zadanie2(){
    console.log("Funkcja wypisująca wszystkie liczby z przedziału a-b, podzielne przez c");
    const a = Number(prompt('Podaj liczbę a: '));
    const b = Number(prompt('Podaj liczbę b: '));
    const c = Number(prompt('Podaj liczbę c: '));

    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Podane liczby nie są prawidłowe!");
        return;
    }

    if(a > b){
        console.log("Liczba b nie jest większa lub równa a...!");
        console.log("Dane nie są prawidłowe!");
        return;
    }

    for(let i = a; i < b; ++i){
        if(i % c == 0){
            console.log(i);
        }
    }
}

//zadanie2();

function zadanie3(){
    console.log("Tabliczka mnożenia o boku i");
    const i = Number(prompt('Podaj i: '));

    if(isNaN(i)){
        console.log("Podane i nie jest liczbą...");
        return;
    }

    if(i < 1){
        console.log("Podane i jest mniejsze od 1...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    licznik = 1;

    for(let x = 0; x < i; ++x) {
        let wiersz = "";

        for (let y = 1; y <= i; y++) {
            wiersz += licznik + "\t";
            ++licznik;
        }

        console.log(wiersz);
    }
}

//zadanie3();