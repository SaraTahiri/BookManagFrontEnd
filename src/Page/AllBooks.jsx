import React , {useContext} from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { BookContext } from "../State/BookContext";

const AllBooks = () => {

    const {books, removebook} = useContext(BookContext)
    
    return (
        <>
            <div>
                {
                    books.map((book,index) => (
                        <div key={index} className="wrapper flex gap-3 ml-[500px] mt-[25px]">
                            <h3>{book.title} By {book.author}</h3> 
                            <Button className="bg-sky-500 hover:bg-sky-700" type="primary"><Link to={`/edit/${book.id}`}>Edit</Link></Button>
                            <Button className="bg-sky-500 hover:bg-sky-700" type="primary"><Link to={`/view/${book.id}`}>View</Link></Button>
                            <Button className="bg-sky-500 hover:bg-sky-700" onClick={() => removebook(book.id)} danger>Delete</Button>
                        </div>
                        
                    ))
                }
                <div>
                    <Button className="bg-sky-500 hover:bg-sky-700" type="primary"><Link to={'/'}>Add Book</Link></Button>
                </div>
            </div>
        </>
    )
}

export default AllBooks