// Mary Catherine Shepherd
// IS 413
// Mission 9

// App root component: imports global styles, header, and the team list.
// Reads team data from a local JSON file and passes it to `TeamList`.
import './App.css'
import Heading from './components/Heading'
import TeamList from './components/TeamList'
import teamsData from './CollegeBasketballTeams.json'

function App() {
  return (
    <div className="app-container">
      {/* Page heading */}
      <Heading />
      {/* Render the list of teams from the JSON file */}
      <TeamList teams={teamsData.teams} />
    </div>
  )
}

export default App