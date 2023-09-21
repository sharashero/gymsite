import { useRef, useEffect } from "react";
import { Chart, ChartOptions } from "chart.js/auto";


interface ILineChart {
  label: string;
  keys: (number | string)[];
  values: (number | string)[];
  secondary?: boolean;
}


function LineChart({
  label,
  keys,
  values,
  secondary = false
}: ILineChart)
{
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    let options: ChartOptions = {
      maintainAspectRatio: false
    };

    if (secondary) {
      options = {
        ...options,
        borderColor: "rgb(255, 99, 132, 1)",
        backgroundColor: "rgb(255, 99, 132, 0.5)"
      };
    }

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: keys,
        datasets: [{
          label,
          data: values,
          borderWidth: 1,
          tension: 0.4,
        }]
      },
      options
    });

    return () => chart.destroy();
  }, [keys, values, label, secondary]);

  return (
    <div className="w-full overflow-x-auto">
      <div className="h-60 w-full" style={{ minWidth: keys.length * 20 }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}


export default LineChart;
