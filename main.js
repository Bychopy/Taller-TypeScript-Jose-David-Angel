import { series } from './data.js';
function calculateSeasonsAverage(series) {
    if (series.length === 0) {
        return 0;
    }
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
}
function renderSeasonsAverage(series) {
    const averageElement = document.getElementById('seasons-average');
    if (!(averageElement instanceof HTMLParagraphElement)) {
        return;
    }
    const average = calculateSeasonsAverage(series);
    averageElement.textContent = `Seasons average: ${average.toFixed(2)}`;
}
function renderSerieDetail(serie) {
    const detailContainer = document.getElementById('series-detail');
    if (!(detailContainer instanceof HTMLDivElement)) {
        return;
    }
    detailContainer.innerHTML = `
    <div class="card">
      <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank" rel="noopener noreferrer">${serie.webpage}</a>
      </div>
    </div>
  `;
}
function renderSeriesInTable(series) {
    const tableBody = document.getElementById('series-tbody');
    if (!(tableBody instanceof HTMLTableSectionElement)) {
        return;
    }
    tableBody.innerHTML = '';
    for (const serie of series) {
        const row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="link-primary text-decoration-none">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        row.addEventListener('click', () => {
            renderSerieDetail(serie);
        });
        const nameLink = row.querySelector('a');
        if (nameLink instanceof HTMLAnchorElement) {
            nameLink.addEventListener('click', (event) => {
                event.preventDefault();
            });
        }
        tableBody.appendChild(row);
    }
}
renderSeriesInTable(series);
renderSeasonsAverage(series);
const firstSerie = series.at(0);
if (firstSerie) {
    renderSerieDetail(firstSerie);
}
