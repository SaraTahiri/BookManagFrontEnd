import React , {useState,useContext,useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { Input, Button } from "antd";
import { BookContext } from "../State/BookContext";

const Edit = () => {

    const {books,editbook} = useContext(BookContext)
    const navigateTo = useNavigate()
    const {id} = useParams()
    console.log(id)
    const [author,setAuthor] = useState('')
    const [book,setBook] = useState('')

    useEffect(() => {
        const editedbook = books.find(book => book.id === id)
        if (editedbook) {
            setAuthor(editedbook.author);
            setBook(editedbook.title);
        }
    },[id,books])

    const handleEdit = () => {
        editbook(id,author,book)
        navigateTo('/books')
    }

    const handleChangeAuthor = (e) => [
        setAuthor(e.target.value)
    ]

    const handleChangeBook = (e) => {
        setBook(e.target.value)
    }

    return (
        <>
            <div className="flex justify-center ml-[500px] gap-3">
                <div>
                    <Input onChange={handleChangeAuthor} value={author} placeholder="Author Name" /> 
                </div>
                    <br />
                <div>
                    <Input onChange={handleChangeBook} value={book} placeholder="Book" />
                </div>
                <br />
                <div>
                    <Button className="bg-sky-500 hover:bg-sky-700" onClick={handleEdit} type="primary">Edit Book</Button>
                </div>
            </div>
        </>
    )
}
export default Edit