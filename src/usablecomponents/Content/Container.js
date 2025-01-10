// src/components/Dashboard.js
import React from 'react';
import Card from './Card';
import SecondCard from './SecondCard';
import './container.css'
import Announcement from './AnnouncementComponent/Announcement';
import Activity from './ActivityComponent/Activity';
import Schedule from './ScheduleComponent/Schedule';


const Container = () => {
  return (
    <>
      <div className="mains">
        <h2 className='dash'>Dashboard</h2>
        <div className='main-container'>
          <div className='container1'>
            <div>
              <div className="dashboard">
                <Card
                  title="Available Position"
                  value="24"
                  description="Urgently Needed"
                  bgColor="#FFEFE7"
                  descColor="#ff0000"
                />
                <Card
                  title="Job Open"
                  value="10"
                  description="Active Hiring"
                  bgColor="#E8F0FB"
                  descColor="#3786F1"
                />
                <Card
                  title="New Employees"
                  value="24"
                  description="Department"
                  bgColor="#FDEBF9"
                  descColor="#EE61CF"
                />
              </div>
              <div>
              <div className='dashboard1'>
                <SecondCard
                  title="Total Employees"
                  count={216}
                  maleCount={120}
                  femaleCount={96}
                  percentageChange={2}
                />
                <SecondCard
                  title="Talent Request"
                  count={16}
                  maleCount={6}
                  femaleCount={10}
                  percentageChange={5}
                />
              </div>
              </div>
              <div className="dashboard2">
                <Announcement />
              </div>
            </div>

          </div>
          <div className="container2">
            <div className='Activity-container'>
              <Activity />
            </div>
            <div className='Schedule-container'>
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
