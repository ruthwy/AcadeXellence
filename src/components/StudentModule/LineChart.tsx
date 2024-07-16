import React, { useEffect, useRef } from 'react';
import { Chart, LineController, CategoryScale, PointElement, LinearScale, LineElement } from 'chart.js';

Chart.register(LineController, CategoryScale, PointElement, LinearScale, LineElement);

// ... rest of the code


interface LineChartProps {
  exams: string[];
  yourMarks: number[];
  topMarks: number[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ exams, yourMarks, topMarks }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let myChart: Chart | null = null;

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      if (myChart) {
        myChart.destroy();
      }
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: exams,
          datasets: [
            {
              label: 'Your Marks',
              data: yourMarks,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
            },
            {
              label: 'Top Marks',
              data: topMarks,
              borderColor: 'rgba(255, 99, 132, 1)',
              fill: false
            }
          ]
        }
      });
      setTimeout(() => {
        const canvasElement = canvasRef.current;
        if (canvasElement) {
          canvasElement.style.width = '300px';  // Your value here
          canvasElement.style.height = '250px'; // Your value here
        }
      }, 1000);
    }
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [exams, yourMarks, topMarks]);

  return <canvas ref={canvasRef}></canvas>;
};

export default LineChartComponent;
