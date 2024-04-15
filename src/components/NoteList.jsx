import React from "react";
import { NoteItem } from "./NoteItem";
export const NoteList = ({notes,onDelete,isArchived,children})=> {

    return(
        <div className="notes-list">
            {
                notes.map((data)=> (
                    <NoteItem
                        key={data.id}
                        onDelete={onDelete}
                        isArchived={isArchived}
                        id={data.id}
                        title={data.title}
                        body={data.body}
                        createdAt={data.createdAt}
                        {...data}
                    >{children}</NoteItem>
                ))
            }
        </div>
    )
}