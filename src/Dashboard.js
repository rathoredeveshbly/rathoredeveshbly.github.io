import React from 'react'
import { askForPermissionToReceiveNotifications } from './push-notification'
export default function Dashboard()
{
    return(
        <div>
            <h1>Dashboard Component</h1>
            <button onClick={askForPermissionToReceiveNotifications} >
          Click to receive notifications
        </button>
        </div>
    )
}