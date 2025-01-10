import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <>
      <div className='sideBar'>
        <div className='logo'>
          <img className='logo-icon' src='./dashboard_svg/logo.svg' />
          <h2 className='logo-name'>Vasitum</h2>
        </div>
        <div className='options'>
          <h4 className='main'>MAIN MENU</h4>
          <div className="main-menu">
            <li className='list_item'>
              <img className='list_i' src='./dashboard_svg/dashboard.svg' />
              <a href="/"><text id='o' className='list_o D'>Dashboard</text></a>
            </li>
            <li className='list_item'>
              <img className='list_icon' src='./dashboard_svg/recruitment.svg' />
              <a href="/recruitment"><text className='list_opt'>Recruitment</text></a>
            </li>
            <li className='list_item'>
              <img className='list_icon' src='./dashboard_svg/schedule.svg' />
              <a href="/schedule"><text className='list_opt'>Schedule</text></a>
            </li>
            <li className='list_item'>
              <img className='list_icon' src='./dashboard_svg/employee.svg' />
              <a href="/employee"><text className='list_opt'>Employee</text></a>
            </li>
            <li className='list_item'>
              <img className='list_icon' src='./dashboard_svg/department.svg' />
              <a href="/department"><text className='list_opt Dept'>Department</text></a>
            </li>
          </div>

          <h3 className='main'>OTHER</h3>
          <div className="next-menu">
            <li className='list_item'>
              <img className='list_icon' src='./menu_items/support.svg' />
              <a href="support"><text className='list_opt Supp'>Support</text></a>
            </li>
            <li className='list_item'>
              <img className='list_icon' src='./menu_items/settings.svg' />
              <a href="settings"><text className='list_opt Set'>Settings</text></a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard
