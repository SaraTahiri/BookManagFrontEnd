import {BrowserRouter as Router,Routes,Route } from "react-router-dom" 
import Home from './Home/Home'
import AllBooks from './Page/AllBooks'
import BookDetail from './Page/BookDetail'
import Edit from './Page/EditBook'
import BookProvider from './State/BookContext'
import './App.css'

function App() {

  return (
    <>
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/view/:id" element={<BookDetail />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </BookProvider>
      
    </>
  )
}

export default App
