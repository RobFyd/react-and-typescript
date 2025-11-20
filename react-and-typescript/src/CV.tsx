export function CV({ name, currentRole, jobHistory }: { name: string; currentRole: string; jobHistory: string[] }) {
    return (
        <>
            <h1>{name}</h1>
            <h2>Current role:{currentRole}</h2>
            <p>Job History</p>
            {jobHistory.map((job, index) => {
                return <p key={index}>{job}</p>
            })}
        </>
    )
}