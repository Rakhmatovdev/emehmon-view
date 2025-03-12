import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
} from 'chart.js';

ChartJS.register(ArcElement);

const centerTextPlugin = {
  id: 'centerTextPlugin',
  afterDraw(chart:any, _:any, options:any) {
    const { ctx, chartArea: { width, height } } = chart;
    ctx.save();

    const fontSize = options.fontSize || 16;
    const fontFamily = options.fontFamily || 'sans-serif';
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = options.fontColor || '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(options.text, width / 2, height / 2);
    ctx.restore();
  }
};

ChartJS.register(centerTextPlugin);


function getColor(percentage:any) {
  if (percentage <= 60) {
    return '#FF6384'; 
  } else if (percentage <= 85) {
    return '#FFCE56'; 
  } else {
    return '#4DD282'; 
  }
}

const DonutChart = ({ percentage = 99 }) => {
  const mainColor = getColor(percentage);
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [mainColor, '#E2E2E2'],
        hoverBackgroundColor: [mainColor, '#E2E2E2'],
        borderWidth: 0 
      }
    ]
  };

 
  const options = {
    maintainAspectRatio: true,
    aspectRatio: 1,         
    cutout: '80%',         
    plugins: {
      legend: { display: false }, 
      centerTextPlugin: {
        text: `${percentage}%`,  
        fontSize: 16,
        fontColor: '#343a40'
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
