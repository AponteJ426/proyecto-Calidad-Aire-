import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  datasets: [
    {
      label: 'Activaciones',
      data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(90, 90, 192, 0.2)',
        'rgba(13, 47, 84, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        " rgba(255, 235, 205,0.2)",
        " rgba(240, 5, 255,0.2)",
        "rgba(255, 99, 71,0.2)",
        "rgb(23, 130, 238,0.2)",
        "rgb(154, 205, 50,0.2)",
        "rgb(64, 224, 208,0.2)"
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(90, 90, 192, 1)',
        'rgba(13, 47, 84, )',
        'rgba(255, 159, 64, 1)',
        "rgba(255, 235, 205,1)",
        " rgba(240, 5, 255,1)",
        "rgba(255, 99, 71,1)",
        "rgb(23, 130, 238,1)",
        "rgb(154, 205, 50,1)",
        "rgb(64, 224, 208,1)"

      ],
      borderWidth: 2,
    },
  ],
};

export function GraphicD() {
  return <Doughnut data={data} />;
}
