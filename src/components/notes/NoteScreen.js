/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
      <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
          <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
          />
          <textarea
            placeholder="what happened today"
            className="notes__textarea"
          ></textarea>

          <div className="notes__image">
            <img
              src="https://img1.ak.crunchyroll.com/i/spire1/8a14ece0c596e93358672abbf13b946d1517476476_large.png"
              alt="iamgen"
            />
          </div>
        </div>
      </div>
    );
}
