import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { starSaveNotes } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notes)

  const handleSave = () => {
    // console.log(active);
    dispatch( starSaveNotes(active) );
    
  }
    return (
      <div className="notes__appbar">
        <span>28 de agosto 2020</span>
        <div>
          <button className="btn">Picture</button>
          <button onClick={handleSave} className="btn">
            Save
          </button>
        </div>
      </div>
    );
}
