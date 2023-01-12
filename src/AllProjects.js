import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';


export default function AllProjects() {
  return (
    <div style={{backgroundColor:'#F2E9E4',height:'900px',}}>
        <h1>My Projects</h1>
        <hr/>
        <div className="projects-container">
          <Link style={{textDecoration:'none'}} to='/projects/spotifystats'>
            <h2>Spotify Latest Project</h2>
            <p>Summary: A web app where a user can login to their Spotify and can look at the latest releases and their top artists and songs.</p>
          </Link>
        </div>
    </div>
  )
}
