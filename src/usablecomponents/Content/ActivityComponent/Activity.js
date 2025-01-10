import React from 'react'
import './Activity.css'
const Activity = () => {
  return (
    <div className='activity'>
      <div className="mainactivity">
        <div className='recent'>
          Recently Activity
        </div>
        <div className='second'>
          <div className='timeDate'>
            10.40 AM, Fri 10 Jan 2025
          </div>
          <div className='subActivity'>
            You Posted a New Job
          </div>
          <div className='para'>
            Kindly check the requirements and terma of work and make sure everthing is right.
          </div>
          <div className='totalActivity'>
            <div className='total'>
              Today you makes 12 Activity
            </div>
            <div className='showallActivity'>
              See All Activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity
