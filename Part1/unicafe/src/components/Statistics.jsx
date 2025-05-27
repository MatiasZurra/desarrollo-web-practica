import React from 'react'

const Statistics = ({good,neutral,bad}) => {
    const getAll = () => good + neutral + bad
    const getAverage = () => getAll()===0 ? 0 : (good - bad) / getAll()
    const getPositives = () => getAll()===0 ? 0 : (good * 100) / getAll()
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {getAll()}</p>
      <p>average {getAverage()}</p>
      <p>positive {getPositives()} %</p>
    </div>
  )
}

export default Statistics
