import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAll = () => good + neutral + bad
  const getAverage = () => getAll()===0 ? 0 : (good - bad) / getAll()
  const getPositives = () => getAll()===0 ? 0 : (good * 100) / getAll()
  
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick = {()=> setGood(good + 1)} > good</button>
      <button onClick = {()=> setNeutral(neutral + 1)} > neutral</button>
      <button onClick = {()=> setBad(bad + 1)} > bad</button>
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

export default App