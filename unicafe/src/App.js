import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' buttonOnClick={() => setGood(good + 1)} />
      <Button text='neutral' buttonOnClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' buttonOnClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    </div>
  )
}

const Button = ({ text, buttonOnClick }) => <button onClick={buttonOnClick}>{text}</button>

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={(good - bad) / all} />
          <StatisticLine text='positive' value={good / all * 100 + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App