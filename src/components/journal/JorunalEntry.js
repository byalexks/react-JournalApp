import React from 'react'

export const JorunalEntry = ({id, date, title, body, url}) => {
  

    return (
      <div className="jorunal__entry pointer">
       { 
      //  if url es igual a null no lo muestra
        url && 
        <div
          className="jorunal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:`url(${url})`, 
          }}
         ></div>
      }
        <div className="journal__entry-body">
            <p className="journal__entry-title">
                {title}
            </p>
            <p className="journal-entry-content">
                {body}            
            </p>
        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
                <h4>27</h4>
        </div>

      </div>
    );
}
