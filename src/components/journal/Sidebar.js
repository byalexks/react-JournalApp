import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { starLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const handleAddNew = () =>{
        dispatch( startNewNote() );
    }


    const dispatch = useDispatch()
    // useSelect para buscar cosas del redux
    const {name} = useSelector(state => state.auth)
    const handleLougout = ()=>{
       dispatch( starLogout() )


    }
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handleLougout}
                >
                    Logout
                </button>
            </div>
            <div 
                onClick={handleAddNew}
                className="journal__new-entry"
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>
                    New entry
                </p>
            </div>

            <JournalEntries />
            
        </aside>
    )
}
