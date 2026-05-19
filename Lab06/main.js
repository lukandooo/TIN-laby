const prompt = require('prompt-sync')();

class geometriaWzory {
    static prostokat = (a, b) => a*b;
    static trapez = (a, b, h) => ((a+b) * h) / 2;
    static rownoleglobok = (a, h) => a*h;
    static trojkat = (a, h) => (a*h) / 2;
}

function pole(callback, ...args) {
    const wynik = callback(...args);
    return wynik;
}

function zadanie1(figura, ...wymiary){
    const wynik = pole(figura, ...wymiary);
    console.log(`Obliczone pole wynosi: ${wynik}`);
}

// zadanie1(geometriaWzory.trojkat, 2, 4);
// zadanie1(geometriaWzory.prostokat, 5, 10);
// zadanie1(geometriaWzory.trapez, 2, 4, 3);
// zadanie1(geometriaWzory.rownoleglobok, 2, 4);

function zadanie2(zdanie, slowo){
    let znaki = zdanie.split('');
    let slowoL = slowo.length;
    let znakiL = znaki.length;

    for (let i = 0; i <= znakiL - slowoL; ++i) {
        let fragment = zdanie.substring(i, i + slowoL);

        if(fragment === slowo){
            znaki.splice(i, slowoL, "*");

            zdanie = znaki.join('');
        }
    }

    console.log(znaki.join(''));
}

// zadanie2("Ala ma kota i psa", "psa");
// zadanie2("Szymon Szymon Shmiggles Szymon", "S");

function zadanie3(zdanie, slowo){
    return zdanie.split(slowo).join('*');
}

// let tablica = ['kotlet', 'kotka', 'koty', 'pies'];
// let niedozwolone = 'kot';
// let wynik = tablica.map(slowoZTablicy => zadanie3(slowoZTablicy, niedozwolone));
// console.log(wynik);

function zadanie4(a, b){
    let resztaA = a % 3;
    let resztaB = b % 3;
    return resztaA - resztaB;
}

// let arr = [10, 11, 13, 12, 14, 15];
// let sorted = arr.sort(zadanie4);
// console.log(sorted);

function zadanie5(a){
    return a[2] > 20;
}

// let arr = [ ['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27] ];
// let x = arr.filter(zadanie5);
// console.log(x);

function zadanie6(a){
    jeden_wyraz = a[0] + " | " + a[1] + " | " + a[2];
    return jeden_wyraz;
}

// let arr = [ ['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27] ];
// let x = arr.map(zadanie6);
// console.log(x);