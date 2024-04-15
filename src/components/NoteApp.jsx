import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import { getInitialData } from '../utils';
class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            notes: getInitialData(),
            filter: []
        }
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this)
        this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this)
        this.onArchivedNotesHandler = this.onArchivedNotesHandler.bind(this)
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)
    }
    onAddNotesHandler({ title,body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title: title,
                body: body,
                createdAt: new Date(),
                archived: false
              }
            ]
          }
        });
    }
    onDeleteNotesHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }
    onArchivedNotesHandler(id) {
      const updatedNotes = this.state.notes.map(note => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });
    
      this.setState({ notes: updatedNotes });
    }
    onSearchChangeHandler(event) {
        const value = event.target.value;
        this.setState({filter: this.state.notes})
        if (value || value.length >= 0) this.setState({filter: this.state.notes})
        this.setState({ searchText: value }, () => {
            const coba = this.state.filter.filter(title=>(title.title.toLowerCase().includes((value.toLowerCase()))))  
            this.setState({ filter: this.state.filter = coba })
        });
    }
    getDataNotes(){
      if(this.state.filter.length > 0){
        if(this.state.searchText.length>0){
          return this.state.filter
        }else{
          return this.state.notes
        }
      }else{
        return this.state.notes
      }
    }
    render(){
        return(
            <>
                <NoteAppHeader 
                    searchText = { this.state.searchText }
                    onSearchChange = {this.onSearchChangeHandler}
                />
                <NoteAppBody 
                    notes={this.getDataNotes()}
                    onAddNotesHandler= {this.onAddNotesHandler}
                    onDelete={this.onDeleteNotesHandler}
                    onArchived={this.onArchivedNotesHandler}
                />
                {console.log(this.state.filter)}
                {console.log(this.state.notes)}
            </>
        )
    }
}

export default NoteApp