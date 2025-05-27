import { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })// Se crea un objeto para guardar los estados de los votos en una unica variable
  //const [good, setGood] = useState(0)
  //const [neutral, setNeutral] = useState(0)
  //const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick = {()=> setVotes({...votes,good: votes.good + 1})} > good</button>
      <button onClick = {()=> setVotes({...votes,neutral: votes.neutral + 1})} > neutral</button>
      <button onClick = {()=> setVotes({...votes,bad: votes.bad + 1})} > bad</button>
      <Statistics votes={votes}></Statistics>
    </div>
  )
}

export default App