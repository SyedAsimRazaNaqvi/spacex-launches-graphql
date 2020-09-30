import React from 'react'
import MissionList from './MissionInfo';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'

interface ownProps {
    id: number
}

const MissionInfoContainer = ({ id }: ownProps) => {

    const { data, loading, error, refetch } = useLaunchMissionInfoQuery({
        variables: {
            id: String(id)
        },
    });
    React.useEffect(() => {
        refetch();
    }, [id])

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h2>Error</h2>
    return (
        <MissionList data={data} />
    )
}

export default MissionInfoContainer