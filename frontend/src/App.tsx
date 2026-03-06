import './App.css'
import Heading from './components/Heading'
import TeamList from './components/TeamList'
import teamsData from './CollegeBasketballTeams.json'

function App() {
  return (
    <div className="app-container">
      <Heading />
      <TeamList teams={teamsData.teams} />
    </div>
  )
}

export default App