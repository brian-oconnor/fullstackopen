import { useState } from 'react'

const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>
const Stat = ({label, value}) => <tr><td>{label}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad < 1) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Stat label="good" value={good} />
          <Stat label="neutral" value={neutral} />
          <Stat label="bad" value={bad} />
          <Stat label="average" value={(good-bad)/(good+neutral+bad)} />
          <Stat label="positive" value={good/(good+neutral+bad)*100 + '%'} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
        <Button label="good" onClick={() => setGood(good+1)} />
        <Button label="neutral" onClick={() => setNeutral(neutral+1)}/>
        <Button label="bad"  onClick={() => setBad(bad+1)}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App