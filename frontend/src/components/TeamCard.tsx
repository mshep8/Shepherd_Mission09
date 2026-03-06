type TeamCardProps = {
    school: string
    name: string
    city: string
    state: string
}

function TeamCard({ school, name, city, state }: TeamCardProps) {
    return (
        <div className="team-card">
        <h2>{school}</h2>
        <p>Mascot: {name}</p>
        <p>
            Location: {city}, {state}
        </p>
        </div>
    )
}

export default TeamCard