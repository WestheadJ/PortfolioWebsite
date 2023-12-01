import React from 'react'
import '../App.css';
import ProjectsCard from '../Components/ProjectsCard';

export default function AllProjects() {

  const spotifyStats = "A web app where a user can login to their Spotify and can look at the latest releases and their top artists and songs.";
  const nea = "A food POS system for a front of house and back of house for my A Level Computer Science NEA";
  const folderWizard = "A windows program that can sort photos and videos out respectively to the date, sorted by year and month";
  return (
    <div style={{backgroundColor:'#F2E9E4'}}>
        <h1>My Projects</h1>
        <hr/>
        <ProjectsCard title="Spotify Latest Project" link='spotifystats' description={spotifyStats}/>
        <ProjectsCard title="A Level NEA - Food POS" link='nea' description={nea}/>
        <ProjectsCard title="Folder Wizard" link="folderwizard" description={folderWizard}/>
        
    </div>
  )
}
