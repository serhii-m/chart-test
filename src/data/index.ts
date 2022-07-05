export const initialInputData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

export const CHART_COLOR = '#ADD8E6';

export const options = {
  indexAxis: 'y' as const,
  scales: {
    x: {
      display: false,
    },
    y: {
      ticks: {
        font: {
          size: 16,
        },
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'SPENT TIME (SECONDS)',
      font: {
        size: 20,
      },
    },
  },
};

export const dataSet = {
  data: initialInputData.map((data) => data?.time),
  borderColor: CHART_COLOR,
  backgroundColor: CHART_COLOR,
}