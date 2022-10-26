import React from 'react'
import './App.css'
import mainPageScreenshot from '../src/images/mainPageScreenshot.png'
import getLatest1 from '../src/images/getLatestScreenshot1.png'
import getLatest2 from '../src/images/getLatestScreenshot2.png'
import getLatest3 from '../src/images/getLatestScreenshot3.png'
import getArtists1 from '../src/images/getArtists1.png'
import getArtists2 from '../src/images/getArtists2.png'

export default function SpotifyStats() {
    return (
        <div className='spotifyStatsPage'>
            <h1 style={{textAlign:'center',marginTop:'3%'}}>Spotify Latest</h1>
            <div className='spotifySectionOne'>
                <div>
                    <h2>Summary</h2>
                </div> 
                <div >
                    <p>I built this single paged application with <a style={{color:'#756c74'}} href='https://reactjs.org'>React.js</a> and using the <a style={{color:'#756c74'}} href='https://developer.spotify.com/dashboard/'>Spotify API</a>. Spotify keeps user stats on their most recent artists and songs. So I have used the <a style={{color:'#756c74'}} href='https://developer.spotify.com/dashboard/'>Spotify API</a> to fetch this information and display to the user.</p>
                </div>
            </div>
            <div className='spotifySectionTwo'>
                <div>
                    <h2 style={{textAlign:'right'}}>How it works</h2>
                </div>
                <div >
                    <p style={{textAlign:'right'}}>So using <a style={{color:'#756c74'}} href='https://reactjs.org'>React.js</a> it is only one page, the user has to login with a token that is generated when the page is loaded using the <a className='code-snippet-link' href='https://reactjs.org/docs/hooks-effect.html'><i className='code-snippet'>useEffect()</i></a> hook that is built into <a style={{color:'#756c74'}} href='https://reactjs.org'>React.js</a> .</p>
                    <p style={{textAlign:'right'}}>They can then click any button that they would like to carry out which ever function they would like to carry out. So for example if a user wanted to see the latest releases that Spotify make available. It fetches the information from the <a style={{color:'#756c74'}} href='https://developer.spotify.com/dashboard/'>Spotify API</a> and displays it in a format that is responsive.
                    </p>
                </div>
            </div>
            <div className='spotifySectionThree'>
                <div>
                    <h2>Images Of The Frontend</h2>
                </div>
                <div className='image-gallery' >
                    <div className='image-container'>
                        <img src={mainPageScreenshot} alt='main page' height = '300px' width = '300px' />
                        <h4>Screenshot Of The Main Page</h4>
                    </div>
                    <div className='image-container'>
                        <img src={getLatest1} alt='get latest 1' height = '300px' width = '300px' />
                        <h4>Display Get Latest Info</h4>
                    </div>
                    <div className='image-container'>
                        <img src={getLatest2} alt='get latest 2' height = '300px' width = '300px' />
                        <h4>Hover On Get Latest Containers</h4>
                    </div>
                    <div className='image-container'>
                        <img src={getLatest3} alt='get latest 3' height = '300px' width = '300px' />
                        <h4>What Happens When You Click On The Latest Song</h4>
                    </div>
                    <div className='image-container'>
                        <img src={getArtists1} alt='get artists 1' height = '300px' width = '300px' />
                        <h4>Display Get Artists Info</h4>
                    </div>
                    <div className='image-container'>
                        <img src={getArtists2} alt='get artists 2' height = '300px' width = '300px' />
                        <h4>What Happens When You Click On An Artist</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
