import React , {createContext,useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';
import bookReducer from './BookReducer'

export const BookContext= createContext()
const BookProvider = ({children}) => {
    const [books,dispatch] = useReducer(bookReducer,[])

    const addbook = (id,author,title) => {
        const bookid = uuidv4()
        dispatch({type : 'ADD_BOOK',id:bookid,author,title})
    }

    const editbook = (id,author,title) => {
        dispatch({type : 'EDIT_BOOK',id,author,title})
    }

    const removebook = (id) => {
        dispatch({type: 'DELETE_BOOK',id})
    }

    return (
        <BookContext.Provider value={{books,addbook,editbook,removebook}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider