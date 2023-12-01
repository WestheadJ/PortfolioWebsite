import React from 'react'
import '../App.css'

import image1 from "../images/spotify-stats/1.png"
import image2 from "../images/spotify-stats/2.png"
import image3 from "../images/spotify-stats/3.png"
import image4 from "../images/spotify-stats/4.png"
import image5 from "../images/spotify-stats/5.png"
import githubIcon from "../images/github.svg"

export default function SpotifyStats() {
    return (
        <div className='spotifyStatsPage'>
            <h1 style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>Spotify Latest</h1>
            <a className="github-link" href="https://github.com/WestheadJ/spotifyLatestRelease/tree/main"><img src={githubIcon} style={{ width: '24px', height: "24px" }} alt="github icon" />View On GitHub</a>
            <section className='left-container'>
                <h4>Summary</h4>
                <p>The aim was to create a single page application that gets your recent most played artists and songs and also shows new songs that have been released like the release radar feature on spotify. </p>

                    {/* <p>I built this single paged application with <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> and using the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a>. Spotify keeps user stats on their most recent artists and songs. So I have used the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a> to fetch this information and display to the user.</p> */}
            </section>
            <section className='right-container'>
                <h4>What Was The Project?</h4>
                <p>I wanted to learn how to make a single page application with <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> and working with a third-party API and displaying the data from it. One of my favorite past times is listening to music, using Spotify as my main platform to listen to music.
                I was then reminded that there was a web app that was created that I love using from time to time and that is <a style={{color:'#5e585d'}} href='https://www.statsforspotify.com'>Stats for Spotify</a>. This displays data from your spotify account using Spotify's own free to use 
                <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a>. I got to learning how to use the Spotify API first with <a style={{color:'#5e585d'}} href='https://www.postman.com'>PostmanAPI</a> then it was thinking about how I could display it.
                Now I am not a man who is good at designing, so the design of the page is off however the functionality all works and think the data is shown off well.</p>
            </section>
            <section className='left-container'>
                <h4>What Did I Learn From This?</h4>
                <p>I learnt a few things and also refreshed my knowledge of some things after this project. One thing I enjoyed learning was how Spotify's own API worked, I liked learning how they structured their return data and what actual data they had. The way they stored it was through dictionaries, so it was a hassle trying to search through the dictionaries all the time. I also learnt how react can work with components, with my navbar. </p>
            </section>
            <section id="spotifyPhotos">
                <div className="row">
                    <div className="column">
                        <img src={image1} loading=" lazy" alt="Login to spotify"/>
                        <img src={image2} loading=" lazy" alt="The main menu"/>
                    </div>
                    <div className="column">
                    <img src={image3} loading=" lazy" alt="Latest releases"/>
                    <img src={image4} loading=" lazy" alt="Top artists"/>

                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <img src={image5} loading=" lazy" alt="Top songs"/>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
