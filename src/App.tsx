import React, { useState } from 'react';

import { Chart } from './components/Chart';
import { RandomButton } from './components/RandomButton';

import { dataSet, initialInputData } from './data';

export interface IData {
  labels: string[],
  datasets: [
    {
      data: number[],
      borderColor: string,
      backgroundColor: string,
    },
  ],
}

export const initData: IData = {
  labels: initialInputData.map(data => data?.name),
  datasets: [dataSet],
};

function App () {
  const [state, setState] = useState(initData);

  const randomizeData = (state: IData): IData => {
    const newData = state?.datasets[0]['data']
      .map((el: number) => {
      return el > 5 ? el * Math.random() : el + Math.random();
    });

    return {
      ...state,
      datasets: [{ ...dataSet, data: newData }],
    };
  };

  const handleOnClick = (): void => {
    setState(randomizeData(state));
  };

  return (
    <div className="App">
      <Chart data={state} />
      <RandomButton onClick={handleOnClick} />
    </div>
  );
}

export default App;
