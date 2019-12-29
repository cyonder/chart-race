import React from 'react'
import data from './data.json'
import Chart from './Chart'

function App() {
  const config = {
    data: data,
    options: {
      duration: 1000,
      numberOfBars: 10,
      showLegend: true
    },
    colors: [
      '#a6cee3',
      '#1f78b4',
      '#b2df8a',
      '#33a02c',
      '#fb9a99',
      '#e31a1c',
      '#fdbf6f',
      '#ff7f00',
      '#cab2d6',
      '#6a3d9a'
    ]
  }

  return (
    <div className="app">
      <Chart config={config} />
    </div>
  )
}

export default App
