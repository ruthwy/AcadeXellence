import React, { useEffect, useRef } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Chart as ChartJS, DoughnutController, CategoryScale, ArcElement } from 'chart.js';


// Register necessary parts of Chart.js
ChartJS.register(DoughnutController, CategoryScale, ArcElement);
ChartJS.register(ChartDataLabels);


interface PieChartComponentProps {
  totalMarks: number;
  score: number;
}

const DoughnutChartComponent: React.FC<PieChartComponentProps> = ({ totalMarks, score }) => {
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
            type: 'doughnut',
            data: {
              labels: ['Scored', 'Remaining'],
              datasets: [
                {
                  data: [score, totalMarks - score],
                  backgroundColor: ['green', 'grey']
                }
              ]
            },
            options: {
              plugins: {
                datalabels: {
                  formatter: (value, context) => {
                    if (context.dataIndex === 0) {
                      return `Scored: ${value}`;
                    }
                    return `Max Marks: ${totalMarks}`;
                  },
                  color: 'black'  
                }
              }
            }
          });
          
          
      }
    }
  }, [totalMarks, score]);

  return (
    <div>
        <canvas ref={chartRef} id="myDoughnutChart" className="smaller-chart"></canvas>
    </div>
  );
};

export default DoughnutChartComponent;
