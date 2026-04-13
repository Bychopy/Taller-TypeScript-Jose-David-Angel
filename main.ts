import { series } from './data.js';
import type { Serie } from './serie.js';

function calculateSeasonsAverage(series: Serie[]): number {
  if (series.length === 0) {
    return 0;
  }

  const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
  return totalSeasons / series.length;
}

function renderSeasonsAverage(series: Serie[]): void {
  const averageElement = document.getElementById('seasons-average');

  if (!(averageElement instanceof HTMLParagraphElement)) {
    return;
  }

  const average = calculateSeasonsAverage(series);
  averageElement.textContent = `Seasons average: ${average.toFixed(2)}`;
}

function renderSeriesInTable(series: Serie[]): void {
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
renderSeasonsAverage(series);