import React from 'react'
import './cardAnnounce.css'
const AnnouncementCard = ({ text, time, plug, other }) => {
    return (
        <div className="Acard">
            <div className="left-card">
                <div className="text">{text}</div>
                <div className="time">{time}</div>
            </div>
            <div className="right-card">
                <div className='pin'>
                    {other === 'true' && (
                        plug === 'true' ? (
                            <img src="./menu_items/darkpin.svg" alt="dark icon" />
                        ) : (
                            <img src="./menu_items/pin.svg" alt="pin icon" />
                        )
                    )}
                </div>
                <div className='dot'>
                    <img src="./menu_items/dots.svg" />
                </div>
            </div>
        </div>
    );
};

export default AnnouncementCard
