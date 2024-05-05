import React from 'react';
import ReactECharts from 'echarts-for-react';  // Assumindo que está usando ECharts

const BarChart = ({ data, title, theme }) => {
  const getOptions = () => {
    return {
      title: {
        text: title,
        textStyle: {
          color: theme === 'dark' ? '#FFFFFF' : '#000000',  // Cor do título baseada no tema
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: data.map(item => item.label)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: data.map(item => item.value),
          type: 'bar'
        }
      ]
    };
  };

  return <ReactECharts option={getOptions()} style={{ height: '400px' }} />;
};

export default BarChart;
