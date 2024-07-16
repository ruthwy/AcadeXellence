import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, DoughnutController, ArcElement } from 'chart.js';

// Register the required controllers and elements
Chart.register(DoughnutController, CategoryScale, ArcElement);

interface GaugeChartProps {
  classMean: number;
}

const GaugeChartComponent: React.FC<GaugeChartProps> = ({ classMean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let myChart: Chart | any = null;

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      if (myChart) {
        myChart.destroy();
      }
      myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Mean'],
          datasets: [
            {
              data: [classMean],
              backgroundColor: 'rgb(255, 99, 132, 1)'
            }
          ]
        },
      });
      setTimeout(() => {
        const canvasElement = canvasRef.current;
        if (canvasElement) {
          canvasElement.style.width = '200px';  // Your value here
          canvasElement.style.height = '200px'; // Your value here
        }
      }, 1000);
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [classMean]);

  return <canvas ref={canvasRef}></canvas>;
};

export default GaugeChartComponent;
