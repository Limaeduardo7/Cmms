import React from 'react';
import ReactECharts from 'echarts-for-react';

interface ScatterChartProps {
  data: { name: string; value: [number, number] }[];
  title: string;
}

const ScatterChart: React.FC<ScatterChartProps> = ({ data, title }) => {
  const options = {
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {},
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: data.map(item => item.value),
        type: 'scatter'
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: 400 }} />;
};

export default ScatterChart;
