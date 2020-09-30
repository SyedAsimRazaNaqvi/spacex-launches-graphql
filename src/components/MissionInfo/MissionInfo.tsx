import React from 'react'
import './styles.css'

import { LaunchMissionInfoQuery } from './../../generated/graphql'

interface Props {
    data: LaunchMissionInfoQuery
}
const className = 'LaunchProfile';

const MissionInfo: React.FC<Props> = ({ data }) => {
    return (
        <div className={className}>
        <div className={`${className}__status`}>
          {data.launch?.launch_success ? (
            <span className={`${className}__success`}>Success</span>
          ) : (
            <span className={`${className}__failed`}>Failed</span>
          )}
        </div>
        <h1 className={`${className}__title`}>
          {data.launch?.mission_name}
          {data.launch?.rocket &&
            ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
        </h1>
        <p className={`${className}__description`}>{data.launch?.details}</p>
        {!!data.launch?.links && !!data.launch?.links.flickr_images && (
          <div className={`${className}__image-list`}>
            {data.launch.links.flickr_images.map(image =>
              image ? <img src={image} className={`${className}__image`} key={image} /> : null,
            )}
          </div>
        )}
      </div>
    );
  };



    
export default MissionInfo