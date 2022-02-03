import React from 'react';
import './topbar.css'

function Topbar() {
  return (
    <div className='container row col-12 topbar'>
        <div className='container col-6 topbar-userdetails'>
            <p className='topbar-username'>
                {`UserName`}
            </p>
        </div>
        <div className='container col-6 topbar-options'>
            <span className='topbar-options-help'>
                Help
            </span>
            <span className='topbar-options-upgrade'>
                Upgrade
            </span>
            <span className='topbar-options-login'>
                Login
            </span>
        </div>
    </div>
  )
}

export default Topbar;
