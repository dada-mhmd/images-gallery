import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Search = () => {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Row>
              <Col xs={8}>
                <Form.Control placeholder='Search for new image..' />
              </Col>
              <Col>
                <Button variant='primary' type='submit'>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Search
