import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './Components/Header'
import ImageCard from './Components/ImageCard'
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
      .then(data => setImages([{ ...data, title: term }, ...images]))
      .catch(err => console.log(err))

    setTerm('')
  }

  const handleDeleteImage = id => {
    setImages(images.filter(image => image.id !== id))
  }

  return (
    <>
      <Header title='Images Gallery' />
      <Search term={term} setTerm={setTerm} handleSubmit={handleSearchSubmit} />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className='pb-3'>
              <ImageCard handleDelete={handleDeleteImage} image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default App
