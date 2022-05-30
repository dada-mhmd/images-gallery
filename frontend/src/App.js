import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

const App = () => {
  const [term, setTerm] = useState('')
  const [images, setImages] = useState([])

  const handleSearchSubmit = e => {
    e.preventDefault()
    fetch(
      `https://api.unsplash.com/photos/random/?query=${term}&client_id=${UNSPLASH_KEY}`
    )
      .then(res => res.json())
      .then(data => setImages([data, ...images]))
      .catch(err => console.log(err))

    console.log(images)
    setTerm('')
  }

  return (
    <>
      <Header title='Images Gallery' />
      <Search term={term} setTerm={setTerm} handleSubmit={handleSearchSubmit} />
    </>
  )
}
export default App
