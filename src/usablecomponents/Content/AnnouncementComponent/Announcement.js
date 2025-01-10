import React from 'react'
import { useState } from 'react'
import './Announcement.css'
import AnnouncementCard from '../card/cardAnnounce'
const Announcement = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="announcement">
      <div className="head">
        <div className="mainhead">Announcement</div>
        <div className="mainhead2">Today, 13 sep 2021<spam><img src="./menu_items/downarrow.svg"></img></spam></div>
      </div>
      <div className="Announcements_details">
        <AnnouncementCard
          text="Outing schedule for every departement"
          time="5 minutes ago"
          plug="true"
          other="true"
        />
        <AnnouncementCard
          text="Meeting HR Department"
          time="Yesterday, 12:30 PM"
          plug="false"
          other="true"
        />
        <AnnouncementCard
          text="IT Department need two more talents for UX/UI Designer position"
          time="Yesterday, 09:15 AM"
          plug="false"
          other="true"
        />
        {showAll && (
          <AnnouncementCard
            text="Meeting HR Department"
            time="Yesterday, 12:30 PM"
            plug="false"
            other="true"
          />//Mir Niyazul Haque
        )}
        <btn className="btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Hide Announcements' : 'See All Announcements'}
        </btn>
      </div>
    </div>
  )
}

export default Announcement
