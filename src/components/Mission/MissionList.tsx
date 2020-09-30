import React from 'react'
import { MissionsInfoQuery } from './../../generated/graphql'
import './styles.css'

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: MissionsInfoQuery
}

const className = 'LaunchList';

const MissionList: React.FC<Props> = ({ data,handleIdChange }) => {
  return (
    <div style={{backgroundColor:'black'}}>
      <h3 style={{textAlign:'center',color:'white',marginTop:0,paddingTop:'15px'}}>Launches</h3>
      
      <ol className={`${className}__list`}>
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <li key={i} className={`${className}__item`}
                  onClick={() => handleIdChange(i+1!)}>
                  {launch.mission_name} ({launch.launch_year})
                </li>
              ),
          )}
      </ol>
    </div>
  )
}
export default MissionList