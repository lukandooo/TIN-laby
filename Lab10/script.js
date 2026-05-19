const API_URL = 'http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php';

let lastPrices = {};
let newsQueue = [];
let newsPointer = 0;

async function updateMarket() {
    try {
        const response = await fetch(API_URL, { cache: "no-store" });
        const data = await response.json();

        if (data.news && !newsQueue.includes(data.news)) {
            newsQueue.unshift(data.news);
            if (newsQueue.length > 3) newsQueue.pop();
        }

        const tbody = document.getElementById('stocks-body');
        tbody.innerHTML = '';

        if (data.stock) {
            for (const company in data.stock) {
                const price = parseFloat(data.stock[company]);
                const row = document.createElement('tr');

                const tdName = document.createElement('td');
                tdName.textContent = company;

                const tdPrice = document.createElement('td');
                tdPrice.textContent = price.toFixed(2);

                const tdTrend = document.createElement('td');

                if (lastPrices[company] !== undefined) {
                    if (price > lastPrices[company]) {
                        tdTrend.textContent = '↑ Wzrost';
                        tdTrend.className = 'up';
                    } else if (price < lastPrices[company]) {
                        tdTrend.textContent = '↓ Spadek';
                        tdTrend.className = 'down';
                    } else {
                        tdTrend.textContent = '− Bez zmian';
                        tdTrend.className = 'neutral';
                    }
                } else {
                    tdTrend.textContent = '−';
                }

                row.appendChild(tdName);
                row.appendChild(tdPrice);
                row.appendChild(tdTrend);
                tbody.appendChild(row);

                lastPrices[company] = price;
            }
        }
    } catch (err) {
        console.error("Błąd AJAX:", err);
    }
}
function rotateNews() {
    if (newsQueue.length === 0) return;

    const container = document.getElementById('news-rotator');
    container.textContent = newsQueue[newsPointer];

    newsPointer = (newsPointer + 1) % newsQueue.length;
}

updateMarket();
setInterval(updateMarket, 5000);
setInterval(rotateNews, 4000);