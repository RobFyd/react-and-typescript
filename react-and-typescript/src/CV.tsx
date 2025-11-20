import { useState } from "react";

interface CVProps {
    name: string;
    currentRole: string;
    jobHistory: string[];
    children?: React.ReactNode;
}

export function CV({ name, currentRole, jobHistory }: CVProps) {
    const [showJobHistory, setShowJobHistory] = useState<boolean>(true);

    const jsxFragment: React.ReactNode = <h2>Current role: {currentRole}</h2>

    return (
        <>
            <h1>{name}</h1>
            {jsxFragment}

            <select onChange={(e) => {
                const shouldShowHistory = e.target.value === "show";
                setShowJobHistory(shouldShowHistory);
            }}>
                <option value="show">Show Job History</option>
                <option value="hide">Hide Job History</option>
            </select>

            {showJobHistory && (<>
                <h3>Job History:</h3>
                {jobHistory.map((job, index) => {
                    return <p key={index}>{job}</p>
                })}
            </>)}
        </>
    )
}