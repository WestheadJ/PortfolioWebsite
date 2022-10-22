import React from 'react'
import './App.css'

export default function SpotifyStats() {
  return (
    <div className='spotifyStatsPage'>
        <div className='spotifySectionOne'>
            <div>
                <h2>Summary</h2>
            </div>
            <div >
                <p style={{width:'30em'}}>I built this single paged application with React.js and using the Spotify API. Spotify keeps user stats on their most recent artists and songs. So I have used the Spotify API to fetch this information and display to the user.</p>
            </div>
        </div>
        <div className='spotifySectionTwo'>
            <div>
                <h2 style={{textAlign:'right'}}>How it works</h2>
            </div>
            <div >
                <p style={{textAlign:'right'}}>So using React.js it is only one page, the user has to login with a token that is generated when the page is loaded using the <a className='code-snippet-link' href='https://reactjs.org/docs/hooks-effect.html'><i className='code-snippet'>useEffect()</i></a> hook that is build into React.js .</p>
                <p style={{textAlign:'right'}}>They can then click any button that they would like to carry out which ever function they would like to carry out. So for example if a user wanted to see the latest releases that Spotify make available. It fetches the information from the Spotify API and displays it in a format that is responsive.
                </p>
            </div>
        </div>
    </div>
  )
}
