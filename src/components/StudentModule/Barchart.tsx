import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(BarController, CategoryScale, LinearScale, BarElement);

interface BarChartProps {
  marks: number;
  mean: number;
  topMark: number;
}

const BarChartComponent: React.FC<BarChartProps> = ({ marks, mean, topMark }) => {
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
          type: 'bar',
          data: {
            labels: ['Your Mark', 'Mean', 'Top Mark'],
            datasets: [
              {
                label: 'Marks',
                data: [marks, mean, topMark],
                backgroundColor: ['MediumBlue', 'FireBrick', 'green']
              }
            ]
          },
          options: {
            scales: {
              x: {
                ticks: {
                  color: 'black'
                }
              },
              y: {
                ticks: {
                  color: 'black'
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: 'black'
                }
              },
              datalabels: {
                color: 'black',
                anchor: 'center',
                align: 'center',
                formatter: (value) => {
                  return value;
                }
              }
            }
          }
        });
      }
    }
  }, [marks, mean, topMark]);

  return (
    <div>
        <canvas ref={chartRef} id="myBarChart" className="smaller-chart-bar"></canvas>
    </div>
  );
};

export default BarChartComponent;

