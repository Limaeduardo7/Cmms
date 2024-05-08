import React from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart = ({ data, title, theme }) => {
  const getOptions = () => {
    return {
      title: {
        text: title,
        textStyle: {
          color: theme === 'dark' ? '#FFFFFF' : '#000000',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: title,
        type: 'pie',
        radius: '55%',
        data: data.map(item => ({
          value: item.value,
          name: item.label,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }],
    };
  };

  return <ReactECharts option={getOptions()} style={{ height: '400px' }} />;
};

export default PieChart;
