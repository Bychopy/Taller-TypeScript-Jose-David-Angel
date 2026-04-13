import { series } from './data.js';
function renderSeriesInTable(series) {
    const tableBody = document.getElementById('series-tbody');
    if (!(tableBody instanceof HTMLTableSectionElement)) {
        return;
    }
    tableBody.innerHTML = '';
    for (const serie of series) {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    }
}
renderSeriesInTable(series);
