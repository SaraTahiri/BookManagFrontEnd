import React from "react";

function bookReducer(books,action){
    switch(action.type){
        case 'ADD_BOOK' : {
            return [...books, {id: action.id ,author: action.author, title: action.title}]
        }
        case 'EDIT_BOOK' : {
            return books.map(editBook => {
                if(editBook.id === action.id){
                    return { ...editBook, author: action.author, title: action.title }
                }else{
                    return editBook
                }
            })
        }
        case 'DELETE_BOOK' : {
            return books.filter(dltdbook => dltdbook.id !== action.id)
        }
        default : {
            throw Error('Unknown action : ' , action.type)
        }
    }
}

export default bookReducer 