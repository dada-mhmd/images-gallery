import { Container, Navbar } from 'react-bootstrap'
import { ReactComponent as Logo } from '../Images/logo.svg'

const navbarStyle = {
  backgroundColor: '#eee',
}

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant='light'>
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  )
}
export default Header
