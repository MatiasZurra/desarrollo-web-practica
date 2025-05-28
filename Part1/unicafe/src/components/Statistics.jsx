import React from 'react'

const Statistics = ({votes}) => {
    const getAll = () => votes.good + votes.neutral + votes.bad
    const getAverage = () => getAll()===0 ? 0 : (votes.good - votes.bad) / getAll()
    const getPositives = () => getAll()===0 ? 0 : (votes.good * 100) / getAll()
    if (getAll()===0){
        return(
            <p>No feedback given</p>
        )
    }else{
    return(
        <div>
            <h2>statistics</h2>
            <p>good {votes.good}</p>
            <p>neutral {votes.neutral}</p>
            <p>bad {votes.bad}</p>
            <p>all {getAll()}</p>
            <p>average {getAverage()}</p>
            <p>positive {getPositives()} %</p>
         </div>
        )}
}

export default Statistics
