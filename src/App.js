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
import SpotifyStats from './SpotifyStats';
import NEA from './NEA';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar style={{ backgroundColor: '#9A8C98' }} expand="md">
          <Container>
            <Navbar.Brand style={{ color: '#F2E9E4' }} href="/">James Westhead</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ paddingTop: '15px' }} className="me-auto">
                <Nav.Link href="/"><p style={{ color: '#F2E9E4' }}>Home</p></Nav.Link>
                <NavDropdown title={<span style={{ color: '#F2E9E4' }}>Projects</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item ><Link to='/projects/allprojects'>All Projects</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to='/projects/nea'>A Level Project</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/projects/spotifystats'>Spotify Stats</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/projects/allprojects' element={<AllProjects />} />
          <Route path='/projects/spotifystats' element={<SpotifyStats />} />
          <Route path='/projects/nea' element={<NEA />} />
        </Routes>
      </Router>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="main-page">
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: "10%" }}>
        <section style={{ marginLeft: '5%', textAlign: 'left' }}>
          <h1>My name is <strong style={{ color: '#4A4E69' }}>James Westhead</strong></h1>
          <h1>This is my portfolio.</h1>
        </section>
        <img style={{ marginLeft: '20%' }} src="./logo512.png" alt='profile' height="150px" width="150px" />
      </div>

      <section style={{ marginTop: "5%", marginLeft: '5%', textAlign: 'left',paddingBottom:'2%' }}>
        <h4 > Wee bit about me </h4>
        <p className="p">I am currently in my second year at Sheffield Hallam and I'm studying software engineering. I am currently seeking a placement for my third year to enhance my programming skills, learn and expand my knowledge of technologies and get experience in a professional environment.</p>
        <p className="p">I have a passion for learning (mostly things that excite me) like learning new frameworks and new ways of solving problems. Outside of coding my major interests are going to the gym and music. </p>
        <p className="p">Back to topic I have a steady (some would say strong) understanding of technologies such as Python, JavaScript, Node.js and recently gaining strength in C#. However I have briefly worked with others listed below!</p>
        <h4>Technologies I have worked with:</h4>
        <ul>
          <li>Python:</li>
          <ul>
            <li>Flask</li>
            <li>Simple solution using sockets</li>
            <li>Worked with a speech recognition library</li>
            <li>Worked with a little bit of cryptography</li>
          </ul>
          <li>HTML</li>
          <li>CSS (really bad at design):</li>
          <ul>
              <li>React Bootstrap (CSS Framework)</li>
            </ul>
          <li>JavaScript:</li>
          <ul>
            <li>React.js:</li>
            <ul>
              <li>React Bootstrap (CSS Framework)</li>
              <li>React Router</li>
            </ul>
            <li>React Native</li>
            <li>Node.js:</li>
            <ul>
              <li>Express</li>
              <li>Sockets</li>
              <li>Worked with a little bit of cryptography</li>

            </ul>

          </ul>
          <li>C#</li>
          <li>Small small bit of Bash</li>
          <li>Samba</li>
          <li>Netlify</li>
          <li>Used heroku for a bit</li>
          <li>Databases</li>
          <ul>
            <li>MySQL - also used MySQL Bench as a database tool</li>
            <li>sqlite - also used a sqlite database tool like MySQL Bench</li>
            <li>Used MSSQL for a a week at a placement.</li>
          </ul>
        </ul>
      </section>
    </div>)
}

export default App;
