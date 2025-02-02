import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }
    onTitleChangeEventHandler(event){
        const title = event.target.value;
        if(title.length <= 50) {
            this.setState({ title });
        }
    }
    onBodyChangeEventHandler(event){
        this.setState({ body: event.target.value });
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state)
        console.log(this.state)
    }
    render(){
        return(
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa karakter: {50 - this.state.title.length}</p>
                    <input type="text" className='note-input__title' placeholder="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                    <textarea className='note-input__body' type="text" required placeholder="tulisaknafdfdfdf" value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput