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

function zadanie4(){
    console.log("Ciąg Fibonacciego");
    const x = Number(prompt("Podaj x: "));

    if(isNaN(x)){
        console.log("Podane x nie jest liczbą...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    if(x < 1){
        console.log("x jest mniejsze od 1...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    a = 0;
    b = 0;
    licznik = 0;
    let wiersz = ""

    do {
        if(licznik == 0){
            a = 1;
            wiersz = a + " ";
        }
        else{
            if(a > b){
                b = b + a;
                wiersz += b + " ";
            }
            else {
                a = a + b;
                wiersz += a + " ";
            }
        }

        ++licznik;
    } while(licznik != x)

    console.log(wiersz);
}

//zadanie4();

function zadanie5(){
    console.log("Choinka");
    const x = Number(prompt("Podaj x: "));

    if(isNaN(x)){
        console.log("Podane x nie jest liczbą...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    if(x < 1){
        console.log("x jest mniejsze od 1...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    szerokosc = 1
    for (let wysokosc = 0; wysokosc < x; wysokosc++) {
        let wiersz = "";
        for (let y = 0; y < szerokosc; y++) {
            wiersz += "*"
        }
        console.log(wiersz);
        ++szerokosc;
    }
}

//zadanie5();

function zadanie6(){
    console.log("Choinka nocą");
    const x = Number(prompt("Podaj x: "));

    if(isNaN(x)){
        console.log("Podane x nie jest liczbą...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    if(x < 3){
        console.log("x jest mniejsze od 3...");
        console.log("Nieprawidłowe dane!");
        return;
    }

    max_szerokosc = 3
    if(x > 3){
        for(let z = 4; z <= x; z++) {
            max_szerokosc += 2;
        }
    }

    kropki = 1;

    for(let wysokosc = 0; wysokosc < x; wysokosc++) {
        let wiersz = "";
        if((wysokosc == 0) || (wysokosc == x-1)){
            for (let y = 0; y < max_szerokosc; y++) {
                wiersz += "*";
            }
        }
        else{
            for(let z = 0; z < (max_szerokosc-kropki) / 2; z++) {
                wiersz += "*";
            }
            for(let z = 0; z < kropki; z++) {
                wiersz += " ";
            }
            for(let z = 0; z < (max_szerokosc-kropki) / 2; z++) {
                wiersz += "*";
            }
            kropki += 2;
        }
        console.log(wiersz);
    }
}

//zadanie6();

function zadanie7(){
    console.log("Wybierz figurę: prostokat, trapez, rownoleglobok, trojkat");
    const figura = prompt("Podaj figurę: ").toLowerCase();

    switch(figura) {
        case 'prostokat': {
            const a = Number(prompt("Podaj a: "));
            const b = Number(prompt("Podaj b: "));

            if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
                console.log("Nieprawidłowe dane!");
                return;
            }

            console.log("Pole prostokątu: " + a * b);

            break;
        }

        case 'trapez': {
            const a = Number(prompt("Podaj a: "));
            const b = Number(prompt("Podaj b: "));
            const h = Number(prompt("Podaj h: "));

            if (isNaN(a) || isNaN(b) || isNaN(h) || a <= 0 || b <= 0 || h <= 0) {
                console.log("Nieprawidłowe dane!");
                return;
            }

            console.log("Pole trapezu: " + (((a + b) * h) / 2));

            break;
        }

        case 'rownoleglobok': {
            const a = Number(prompt("Podaj a: "));
            const h = Number(prompt("Podaj h: "));

            if (isNaN(a) || isNaN(h) || a <= 0 || h <= 0) {
                console.log("Nieprawidłowe dane!");
                return;
            }

            console.log("Pole rownolegloboku: " + a * h);
            break;
        }

        case 'trojkat': {
            const a = Number(prompt("Podaj a: "));
            const h = Number(prompt("Podaj h: "));

            if (isNaN(a) || isNaN(h) || a <= 0 || h <= 0) {
                console.log("Nieprawidłowe dane!");
                return;
            }

            console.log("Pole trojkatu: " + (a * h) / 2);
            break;
        }

        default:
            console.log("Brudasie nie znam takiej figury!!")
    }
}

//zadanie7();

function zadanie8() {
    console.log("--- Trójkąt Pascala ---");
    const x = Number(prompt("Podaj wysokość: "));

    if (isNaN(x) || x < 1) {
        console.log("Niepoprawne dane!!");
        return;
    }

    const figura = [];

    for (let i = 0; i < x; i++) {
        figura[i] = [];

        for (let z = 0; z <= i; z++) {
            if (z === 0 || z === i) {
                figura[i][z] = 1;
            } else {
                figura[i][z] = figura[i - 1][z - 1] + figura[i - 1][z];
            }
        }
    }

    for (let i = 0; i < x; i++) {
        let odstep = " ".repeat(x - i);

        let zawartoscWiersza = figura[i].join(" ");

        console.log(odstep + zawartoscWiersza);
    }
}

zadanie8();