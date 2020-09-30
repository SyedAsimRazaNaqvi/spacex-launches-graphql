import React from 'react'
import {useMissionsInfoQuery} from './../../generated/graphql'
import MissionList,{OwnProps} from './MissionList';



const MissionContainer = (props:OwnProps) => {
    const {data,error,loading}= useMissionsInfoQuery();

    if(loading)
        return <h2>Loading</h2>

    if(error || !data)
        return <h2>Error</h2>
    return (
        <div>
            <MissionList data={data} {...props} />
        </div>
    )
}

export default MissionContainer