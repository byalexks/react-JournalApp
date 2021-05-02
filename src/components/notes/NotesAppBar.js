import React from 'react'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { starSaveNotes, starUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notes)

  const handleSave = () => {
    
    dispatch( starSaveNotes(active) );
    
  }

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  }

  const handleFileChange = (e)=>{
    const file = e.target.files[0];
  
    if (file) {
      dispatch( starUploading(file) );
      
    }
  }

    return (
      <div className="notes__appbar">
        <span>{moment().format("MMMM Do YYYY")}</span>
        <div>
          <input
            id="fileSelector"
            type="file"
            name="file"
            accept="image/x-png,image/gif,image/jpeg"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button onClick={handlePictureClick} className="btn">
            Picture
          </button>
          <button onClick={handleSave} className="btn">
            Save
          </button>
        </div>
      </div>
    );
}
