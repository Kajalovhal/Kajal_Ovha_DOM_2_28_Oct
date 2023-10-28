// Fetching data using async-await 
async function fetchData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Display data in the table
function displayData(data) {
    const table = document.getElementById('Cointable');

    data.forEach(coin => {
        const row = table.insertRow(-1);
        const nameCell = row.insertCell(0);
        const idCell = row.insertCell(1);
        const imageCell = row.insertCell(2);
        const symbolCell = row.insertCell(3);
        const priceCell = row.insertCell(4);
        const volumeCell = row.insertCell(5);

        nameCell.innerHTML = coin.name;
        idCell.innerHTML = coin.id;
        imageCell.innerHTML = `<img src="${coin.image}" alt="${coin.name}" style="height: 30px; width: 30px;">`;
        symbolCell.innerHTML = coin.symbol;
        priceCell.innerHTML = '$' + coin.current_price;
        volumeCell.innerHTML = '$' + coin.total_volume;
    });
}

fetchData();