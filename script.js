document.addEventListener('DOMContentLoaded', function () {
    fetch('Water_data_india.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const headers = rows[0].split(',');
            const table = document.getElementById('waterDataTable');
            const headerRow = table.insertRow(0);
            headers.forEach(headerText => {
                if (headerText !== 'Turbidity' && headerText !== 'Hardness') {
                    const header = document.createElement('th');
                    header.appendChild(document.createTextNode(headerText));
                    headerRow.appendChild(header);
                }
            });
            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].split(',');
                const row = table.insertRow(i);

                cells.forEach((cellText, index) => {
                    if (headers[index] !== 'Turbidity' && headers[index] !== 'Hardness') {
                        const cell = row.insertCell();
                        cell.appendChild(document.createTextNode(cellText));
                    }
                });
            }
        })
        .catch(error => console.log('Error fetching CSV file:', error));
});