interface CVProps {
    name: string;
    currentRole: string;
    jobHistory: string[];
    children?: React.ReactNode;
}

export function CV({ name, currentRole, jobHistory }: CVProps) {
    const jsxFragment: React.ReactNode = <h2>Current role: {currentRole}</h2>

    return (
        <>
            <h1>{name}</h1>
            {jsxFragment}

            <p>Job History:</p>
            {jobHistory.map((job, index) => {
                return <p key={index}>{job}</p>
            })}
        </>
    )
}