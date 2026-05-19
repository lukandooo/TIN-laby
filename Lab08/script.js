class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }
}

let auta = [
    new Auto(2020, 45000, 60000, 55000),
    new Auto(2015, 120000, 30000, 25000),
    new Auto(2022, 15000, 120000, 118000)
];

function wygenerujTabele(autaArray) {
    const container = document.getElementById('samochody-container');

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const naglowki = ['Rok', 'Przebieg', 'Cena wyjściowa', 'Cena końcowa'];

    naglowki.forEach(tekst => {
        const th = document.createElement('th');
        th.innerText = tekst;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    autaArray.forEach(auto => {
        const tr = document.createElement('tr');

        Object.values(auto).forEach(wartosc => {
            const td = document.createElement('td');
            td.innerText = wartosc;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}

wygenerujTabele(auta);

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko, oceny) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.oceny = oceny;

        let suma = 0;
        this.oceny.forEach(ocena => suma += ocena.wartosc);
        this.srednia = this.oceny.length > 0 ? (suma / this.oceny.length).toFixed(1) : 0;
    }
}

let studenci = [
    new Student('Jan', 'Kowalski', [
        new Ocena('WPR', 5),
        new Ocena('TIN', 3),
        new Ocena('POJ', 4)
    ]),
    new Student('Anna', 'Nowak', [
        new Ocena('WPR', 3),
        new Ocena('TIN', 5),
        new Ocena('POJ', 4)
    ]),
    new Student('Jan', 'Trzeci', [
        new Ocena('WPR', 5),
        new Ocena('TIN', 5),
        new Ocena('POJ', 2)
    ])
];

function wygenerujAkordeon(studenciArray) {
    const container = document.getElementById('studenci-container');

    studenciArray.forEach((student) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'student-item';

        const header = document.createElement('div');
        header.className = 'student-header';
        header.classList.add('closed-border');
        header.innerText = `${student.imie} ${student.nazwisko}`;

        const details = document.createElement('div');
        details.className = 'student-details';

        const lista = document.createElement('ul');
        student.oceny.forEach(ocena => {
            const li = document.createElement('li');
            li.innerText = `${ocena.przedmiot}: ${ocena.wartosc}`;
            lista.appendChild(li);
        });

        const sredniaDiv = document.createElement('div');
        sredniaDiv.className = 'student-srednia';
        sredniaDiv.innerText = `Średnia: ${student.srednia}`;

        details.appendChild(lista);
        details.appendChild(sredniaDiv);

        header.addEventListener('click', () => {
            details.classList.toggle('active');

            if (details.classList.contains('active')) {
                header.classList.remove('closed-border');
            } else {
                header.classList.add('closed-border');
            }
        });

        wrapper.appendChild(header);
        wrapper.appendChild(details);
        container.appendChild(wrapper);
    });
}

wygenerujAkordeon(studenci);