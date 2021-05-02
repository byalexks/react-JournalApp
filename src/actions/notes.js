import Swal from "sweetalert2";
import { types } from "../types/types";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";


 export const startNewNote = ()=>{

    // react-journalapp
     return async(dispatch, getState) => {
         
        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
      
        dispatch( activeNote(doc.id, newNote) );
        dispatch(addNewNote(doc.id, newNote));
     }
 }

 
 export const activeNote = (id, note)=>({

    type: types.notesActive,
    payload: {
        id,
        ...note,
    }

 })

 export const addNewNote = (id,note) =>({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }

 })

 export const starLoadNotes = (uid) => {
    return async(dispatch)=>{

        const notes = await loadNotes(uid)  
        dispatch( setNotes( notes ) )


    }
}

 export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
    
 });

 export const starSaveNotes = (note) => {
     return async(dispatch, getState)=>{

        const { uid } = getState().auth;

        if (!note.url) {
             delete note.url;
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)

        dispatch( refresNote( note.id, noteToFirestore ) )
        Swal.fire('Saved', note.title, 'success')

     }
 }

 export const refresNote = (id, note) =>({
    type: types.notesUpdated,
    payload: {
        id, 
        note:{
            id,
            ...note
        }
    }

 })

 export const starUploading = (file)=>{

    return async(dispatch, getState)=>{
        
        const {active:activeNote} = getState().notes

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: ()=>{
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch( starSaveNotes(activeNote));

        Swal.close();

    }

 }

 export const startDeleting = (id)=>{
     return async(dispatch, getState)=>{

        const iud = getState().auth.uid;

        await db.doc(`${iud}/journal/notes/${id}`).delete();
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            dispatch( deleteNote(id) );
          }
        });
        

     }
 }

 export const deleteNote = (id) =>({
     
    type: types.notesDelete,
    payload: id

 })

 export const notesLogout = () => ({

    type: types.notesLogoutCleaning,

 })