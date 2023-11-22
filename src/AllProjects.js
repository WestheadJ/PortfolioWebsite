import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';


export default function AllProjects() {
  return (
    <div style={{backgroundColor:'#F2E9E4'}}>
        <h1>My Projects</h1>
        <hr/>
        <div className="projects-container" style={{borderBottom:'black solid 1px'}}>
          <Link style={{textDecoration:'none'}} to='/projects/spotifystats'>
            <h2>Spotify Latest Project</h2>
            <p>Summary: A web app where a user can login to their Spotify and can look at the latest releases and their top artists and songs.</p>
          </Link>
        </div>
        <div className='projects-container'>
          <Link style={{textDecoration:'none'}} to='/projects/alevelproject'>
            <h2>A Level NEA</h2>
            <p>Summary: A food POS system for a front of house and back of house for my A Level Computer Science NEA</p>
          </Link>
        </div>
    </div>
  )
}
