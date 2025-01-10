import React from 'react'
import { useState } from 'react'
import './Schedule.css'
import AnnouncementCard from '../card/cardAnnounce'

const Schedule = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="schedule">
        <div className="head">
          <div className="mainhead">Upcoming Schedule</div>
          <div className="mainhead2">Today, 14 Feb 2025<spam><img src="./menu_items/downarrow.svg"></img></spam></div>
        </div>
        <div className='schedule-info'>
          <div className='prior'>Priority</div>
          <AnnouncementCard
            text="Review candidate applications"
            time="Today - 03.45 PM"
            plug="true"
            other="false" />
          <div className='other'>Others</div>
          <AnnouncementCard
            text="Interview with candidates"
            time="Today - 02.30 PM"
            plug="true"
            other="false" />
          <AnnouncementCard
            text="Short meeting with product designer from IT Department"
            time="Today - 01.00 PM"
            plug="true"
            other="false" />
          <AnnouncementCard
            text="Short meeting with product designer from IT Department"
            time="Today - 01.00 PM"
            plug="true"
            other="false" />
          {showAll && (
            <>
              <AnnouncementCard
                text="Short meeting with product designer from IT Department"
                time="Today - 12.15 PM"
                plug="true"
                other="false" />
            </>
          )}
        </div>
        <btn className="btn1" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Back' : 'Create a new Schedule'}
        </btn>
    </div>
  )
}

export default Schedule
