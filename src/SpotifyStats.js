import React from 'react'
import './App.css'

import image1 from "./images/spotify-stats/1.png"
import image2 from "./images/spotify-stats/2.png"
import image3 from "./images/spotify-stats/3.png"
import image4 from "./images/spotify-stats/4.png"
import image5 from "./images/spotify-stats/5.png"
import githubIcon from "./images/github.svg"

export default function SpotifyStats() {
    return (
        <div className='spotifyStatsPage'>
            <h1 style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>Spotify Latest</h1>
            <a className="github-link" href="https://github.com/WestheadJ/spotifyLatestRelease/tree/main"><img src={githubIcon} style={{ width: '24px', height: "24px" }} alt="github icon" />View On GitHub</a>
            <section id='spotifySectionOne'>
                <h2>Summary</h2>
                <p>The aim was to create a single page application that gets your recent most played artists and songs and also shows new songs that have been released like the release radar feature on spotify. </p>

                    {/* <p>I built this single paged application with <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> and using the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a>. Spotify keeps user stats on their most recent artists and songs. So I have used the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a> to fetch this information and display to the user.</p> */}
            </section>
            <section id="spotifySectionTwo">
                <h2>What Was The Project?</h2>
                <p>I wanted to learn how to make a single page application with <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> and working with a third-party API and displaying the data from it. One of my favorite past times is listening to music, using Spotify as my main platform to listen to music.
                I was then reminded that there was a web app that was created that I love using from time to time and that is <a style={{color:'#5e585d'}} href='https://www.statsforspotify.com'>Stats for Spotify</a>. This displays data from your spotify account using Spotify's own free to use 
                <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a>. I got to learning how to use the Spotify API first with <a style={{color:'#5e585d'}} href='https://www.postman.com'>PostmanAPI</a> then it was thinking about how I could display it.
                Now I am not a man who is good at designing, so the design of the page is off however the functionality all works and think the data is shown off well.</p>
            </section>
            <section id="spotifySectionThree">
                <h2>What Did I Learn From This?</h2>
                <p>I learnt a few things and also refreshed my knowledge of some things after this project. One thing I enjoyed learning was how Spotify's own API worked, I liked learning how they structured their return data and what actual data they had. The way they stored it was through dictionaries, so it was a hassle trying to search through the dictionaries all the time.</p>
                
            </section>
            {/* <div id='spotifySectionTwo'>
                <div>
                    <h2 style={{ textAlign: 'right' }}>How it Works</h2>
                </div>
                <div >
                    <p style={{ textAlign: 'right' }}>So using <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> it is only one page, the user has to login with a token that is generated when the page is loaded using the <a className='code-snippet-link' href='https://reactjs.org/docs/hooks-effect.html'><i className='code-snippet'>useEffect()</i></a> hook that is built into <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> .</p>
                    <p style={{ textAlign: 'right' }}>They can then click any button that they would like to carry out which ever function they would like to carry out. So for example if a user wanted to see the latest releases that Spotify make available. It fetches the information from the <a style={{ color: '#5e585d' }} href='https://developer.spotify.com/dashboard/'>Spotify API</a> and displays it in a format that is responsive.
                    </p>
                    <p style={{ textAlign: 'right' }}>It displays the data using the <a className='code-snippet-link' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'><i className='code-snippet'>.map</i></a> method which returns the HTML and it's styled to display it in a grid style, using flexbox styling and a little bit of setting the size of the image containers.</p>
                </div>
            </div>
            <div id='spotifySectionThree'>
                <h2>Some Screenshots Of The UI</h2>
                <div id='spotifyStatsImages'>
                    <div id='image-1'>
                        <img src={image1} alt="Screenshot of login screen" />
                    </div>
                    <div id="image-2">
                        <img src={image2} alt="Screenshot of main menu" />
                    </div>
                    <div id='image-3'>
                        <img src={image3} alt="Screenshot of spotify latest releases" />
                    </div>
                    <div id='image-4'>
                        <img src={image4} alt="Screenshot of the users top artists" />
                    </div>
                    <div id='image-5'>
                        <img src={image5} alt="Screenshot of the users top albums" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
