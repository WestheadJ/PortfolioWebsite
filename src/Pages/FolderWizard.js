import React from 'react'
import githubIcon from "../images/github.svg"


export default function FolderWizard() {
  return (
    <div className="folderWizardPage">
        <h1 style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>Folder Wizard</h1>
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

        </section>
    </div>
  )
}
