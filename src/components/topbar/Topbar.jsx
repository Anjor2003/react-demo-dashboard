import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleft'>
          <span className='logo'>Anjoradmin</span>
        </div>
        <div className='topright'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconbadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconbadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&auto=compress&w=500'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  )
}

export default Topbar
