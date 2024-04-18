import React , {useContext} from 'react'
import { useParams } from "react-router-dom"
import { BookContext } from '../State/BookContext'
import {  Button } from "antd";

const BookDetail = () => {
    const {id} = useParams()
    const {books} = useContext(BookContext)
    const book = books.find(book => book.id === id)
  return (
    <div className="container mx-auto mt-10">
      <div>
        <h2>{book.title} By {book.author}</h2>
      </div>
    </div>

  )
}

export default BookDetail
