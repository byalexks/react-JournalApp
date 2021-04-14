import React from 'react'

export const JorunalEntry = () => {
    return (
      <div className="jorunal__entry pointer">
        <div
          className="jorunal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://img.zonared.com/images/analisis/2500/2515/5.jpg)", 
          }}
        ></div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo dia
            </p>
            <p className="journal-entry-content">
                asdasfdasfasfafaffasfdasfasdfasdasfasfasfasf            
            </p>
        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
                <h4>27</h4>
        </div>

      </div>
    );
}
