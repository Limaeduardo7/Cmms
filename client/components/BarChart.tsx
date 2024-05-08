import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({ data, title, theme }) => {
  const getOptions = () => {
    return {
      title: {
        text: title,
        textStyle: {
          color: theme === 'dark' ? '#FFFFFF' : '#000000',
        },
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: data.map(item => item.label),
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: data.map(item => item.value),
        type: 'bar',
      }],
    };
  };

  return <ReactECharts option={getOptions()} style={{ height: '400px' }} />;
};

export default BarChart;
