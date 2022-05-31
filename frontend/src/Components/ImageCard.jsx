import { Button, Card } from 'react-bootstrap'

const ImageCard = ({ image, handleDelete }) => {
  return (
    <Card className='m-5'>
      <Card.Img
        style={{ width: '15rem' }}
        variant='top'
        src={image.urls.small}
      />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant='primary' onClick={() => handleDelete(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}
export default ImageCard
