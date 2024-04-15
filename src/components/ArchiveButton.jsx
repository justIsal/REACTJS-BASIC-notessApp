import React from "react"
export function ArchiveButton ({id,isArchived,children}) {
    return(
        <button className="note-item__archive-button" onClick={()=>isArchived(id)}>{children}</button>
    )
}