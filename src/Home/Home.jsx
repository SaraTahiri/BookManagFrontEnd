import React , {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import { BookContext } from "../State/BookContext";

const Home = () => {
    const [author, setAuthor] = useState('')
    const [books,setBooks] = useState('')
    const {addbook} = useContext(BookContext)
    const navigateTo = useNavigate()

    const handleAdd = () => {
        const id = uuidv4()
        addbook(id,author,books)
        navigateTo('/books')
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleBook = (e) => {
        setBooks(e.target.value)
    }

    return (
        <>
            <div className="flex justify-center ml-[500px] gap-3">
                <div>
                    <Input placeholder="Author Name" onChange={handleAuthor} /> 
                </div>
                <br />
                <div>
                    <Input onChange={handleBook} placeholder="Book Title" />
                </div>
                <br />
                <div>
                    <Link to={'/books'}><Button className="bg-sky-500 hover:bg-sky-700" onClick={handleAdd} type="primary">Add Book</Button></Link>
                </div>    
            </div>
        </>
    )
}
export default Home