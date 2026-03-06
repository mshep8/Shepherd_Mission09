// Mary Catherine Shepherd
// IS 413
// Mission 9

// Card component for displaying a single team's information.
// `TeamCardProps` lists the expected properties for the component.
type TeamCardProps = {
    school: string
    name: string
    city: string
    state: string
}

function TeamCard({ school, name, city, state }: TeamCardProps) {
    return (
        <div className="team-card">
        {/* School name (headline) */}
        <h2>{school}</h2>
        {/* Mascot/name and location */}
        <p>Mascot: {name}</p>
        <p>
            Location: {city}, {state}
        </p>
        </div>
    )
}

export default TeamCard