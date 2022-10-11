import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProjects from './AllProjects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar style={{backgroundColor:'#9A8C98'}} expand="md">
          <Container>
            <Navbar.Brand style={{color:'#F2E9E4'}} href="/">James Westhead</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{paddingTop:'15px'}} className="me-auto">
              <Nav.Link href="/"><p style={{color:'#F2E9E4'}}>Home</p></Nav.Link>
              <NavDropdown title={<span style={{color:'#F2E9E4'}}>Projects</span>}id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to='/projects/allprojects'>All Projects</Link></NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.1">A Level Project</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          <Route exact path='/projects/allprojects' element={<AllProjects/>} />
          <Route path='/projects/alevelproject'/>
        </Routes>
      </Router>  
    </div>
  );
}

function Dashboard(){
  return(<div style={{backgroundColor:"#F2E9E4",height:'900px'}}>
  <section style={{marginTop:"10%", marginLeft:'5%', textAlign:'left'}}>
    <h1>Hello welcome to my portfolio</h1>
    <h1>website</h1>
  </section>
  <section style={{marginTop:"5%",marginLeft:'5%' , textAlign:'left'}}>
    <h4 >My name is <strong style={{color:'#4A4E69'}}>James Westhead</strong> </h4>
  </section>
</div>)
}

export default App;
