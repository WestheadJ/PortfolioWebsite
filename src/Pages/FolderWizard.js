import React from 'react'
import githubIcon from "../images/github.svg"


export default function FolderWizard() {
  return (
    <div className="folderWizardPage">
        <h1 style={{ textAlign: 'center', marginTop: '3%',  }}>Folder Wizard</h1>
        <i style={{textAlign:'center', marginBottom:'3%', color:'gray' }}>* Still under development *</i>
        <a className="github-link" href="https://github.com/WestheadJ/FolderWizard"><img src={githubIcon} style={{ width: '24px', height: "24px" }} alt="github icon" />View On GitHub</a>
        <section className='left-container'>
            <h4>Summary</h4>
            <p>A program to sort out all my photos and videos in year and then by month written in C#.</p>
        </section>
        <section className='right-container'>
            <h4>What Was The Project?</h4>
            <p>So this idea came a long when I was thinking about what to do and how to get an idea of how C# works and to top up on my skills before going into 2nd year. I was trying to get photos off my phone onto my PC, I was stuck with duplicate photos in different folders in the current apple file system.</p>
            <p>At first I was sniffing around at NuGet packages to see if I could get the photos off the phone by just selecting them through a file system (long story short I looked for a week and I gave up).</p>
            <p>By the end of it, I decided for the user to just select a folder (a folder on the drives in their PC) as their source folder and select a target folder to copy or move the photos. The user can choose to sort by date, sort photos or sort videos or both. It currently works with only .MP4,.MOV,.JPG,.PNG as these at the time were the only formats I needed. </p>
        </section>
        <section className='left-container'>
            <h4>What Did I Learn?</h4>
            <p>So what did I learn? I learnt that not planning how to write your programs can really undermine your work and pace, cause errors and make really, <b>REALLY</b> messy code!!! If I was to re-do this project I would plan it out, after doing research on all the methods on how to do everything. It would've saved me time fixing bugs and refactoring code (and trying to look for where the code was).</p>
            <p>I want to make changes and add to this so for a version 2! I want to add these features, such as custom formats the user wants to sort, I want to make the code more readable and modular and change it to a more OOP format.</p>
        </section>
        
    </div>
  )
}
