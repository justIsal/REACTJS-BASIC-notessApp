import React from "react";

function NoteAppHeader ({onSearchChange,searchText}){
    return(
        <>
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input type="text" placeholder="Cari catatan..." onChange={onSearchChange} value={searchText}/>
                </div>
            </div>
        </>
    )
}
export default NoteAppHeader