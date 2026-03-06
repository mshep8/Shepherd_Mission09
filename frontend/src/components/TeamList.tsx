// Component that receives an array of teams and renders a list of `TeamCard`.
// Defines a lightweight `Team` type and the `TeamListProps` shape.
import TeamCard from './TeamCard'

type Team = {
    school: string
    name: string
    city: string
    state: string
}

type TeamListProps = {
    teams: Team[]
}

function TeamList({ teams }: TeamListProps) {
    return (
        <div>
        {/* Map over teams and create a TeamCard for each item */}
        {teams.map((team, index) => (
            <TeamCard
            key={index}
            school={team.school}
            name={team.name}
            city={team.city}
            state={team.state}
            />
        ))}
        </div>
    )
}

export default TeamList