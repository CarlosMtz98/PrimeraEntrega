document.addEventListener('load',
    initTable(),
false)

function initTable() {
    const pricesInEuros = [120000, 144000, 183000, 241000];
    setPrices(pricesInEuros, "EUR");
}

function setPrices(pricesList, currency) {
    const table = document.getElementById('detailsTable');
    const rows = table.rows;

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells) {
            const cell = cells[cells.length - 1];
            if (cell) {
                cell.innerHTML = pricesList[i - 1].toLocaleString('es-MX', { style: 'currency', currency: currency });
            }
        }
    }
}

function changePrice() {
    const exchange = 23.65;
    const pricesInEuros = [120000, 144000, 183000, 241000];
    const prices = pricesInEuros.map((n) => { return n * exchange });
    setPrices(prices, "MXN");
}
