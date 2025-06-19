import { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }

  return(
    <table>
    <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="average" value={props.average.toFixed(2)} />
      <StatisticLine text="positive" value={props.positive.toFixed(1) + ' %'} />
    </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad  = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = all !== 0 ? (good - bad) / all : 0
  const positive = all !== 0 ? (good / all * 100) : 0

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementGood} text='good' />
      <Button onClick={incrementNeutral} text='neutral' />
      <Button onClick={incrementBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App