import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, PieController, CategoryScale, ArcElement } from 'chart.js';

// Register necessary parts of Chart.js
ChartJS.register(PieController, CategoryScale, ArcElement);

interface PieChartComponentProps {
  totalMarks: number;
  score: number;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ totalMarks, score }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new ChartJS(ctx, {
          type: 'pie',  // Using 'pie' here
          data: {
            labels: ['Scored', 'Remaining'],
            datasets: [
              {
                data: [score, totalMarks - score],
                backgroundColor: ['green', 'grey']
              }
            ]
          }
        });
      }
    }
  }, [totalMarks, score]);

  return (
    <div>
      <canvas ref={chartRef} id="myPieChart" width="200" height="200"></canvas>
    </div>
  );
};

export default PieChartComponent;
