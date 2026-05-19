const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');

const container = document.getElementById('divy-container');

btn1.addEventListener('click', () => {
    const nowyDiv = document.createElement('div');
    nowyDiv.className = 'box';
    nowyDiv.innerText = `Div ${container.children.length + 1}`;
    container.appendChild(nowyDiv);
});

btn2.addEventListener('click', () => {
    if (container.firstElementChild) {
        container.firstElementChild.remove();
    }
});

btn3.addEventListener('click', () => {
    const wszystkieDivy = container.children;

    if (wszystkieDivy.length >= 3) {
        wszystkieDivy[2].style.backgroundColor = '#85e085';
    } else {
        alert("Nie ma trzeciego diva!");
    }
});

btn4.addEventListener('click', () => {
    const wszystkieDivy = container.children;

    for (let i = 0; i < wszystkieDivy.length; i++) {
        wszystkieDivy[i].innerText = 'nowy tekst';
    }
});