import React from 'react'

export default function NEA() {
    return (
        <div id='NEA-Page'>
            <h1>A Level NEA - Restaurant POS</h1>
            <section id='NEA-Summary'>
                <h4 >Summary</h4>
                <p>In college, I studied Computer Science at A-Level. In this 2 year course, the last year consisted of a full year length project. This was a N.E.A, non examined assessment, which is a marked piece of course work. I decided on the idea of creating a restaurant POS system. I decided to create this using <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> as a framework for the project, this got me a good high scoring of around 55, can't remember out of how many marks but it was a high score. Looking back at my project after development I realised there was a few things I could've done better at the start, but looking back a few years later and I can see where I still have a few things to learn but also where I have grown as a programmer and my understanding of technologies such as react and server side programming and databases.</p>
            </section>
            <section id='NEA-Project-Desc'>
                <h4>What Was The Project?</h4>
                <p>This project consisted of three stages: planning, development and analysis. The planning was planning what we created. I wanted to create a restaurant POS because I was working at pub at the time and our system ran on a ticket system, was thinking how I could change this system and make it a bit more efficient. I also took inspiration from the likes of McDonalds and Wetherspoons. This restaurant POS would basically consist of a front of house and back of house system, front of house was for the use of the waiters and bar staff, they would be able to see active tables, to allow for ease of sitting. Back of house was for the use of the kitchen, allowing to see orders for tables in a queue order, they can set cheques as waiting, completing and completed.</p>
            </section>
            <section id='NEA-Project-Learn-Desc'>
                <h4>What Did I Learn From This?</h4>
                <p>Because this was part of my A Level, we had things to learn for the course, which were helpful to the project. For example things like programming tasks, learning different methodologies for development and different diagrams for planning out the development of a piece of software. I learnt more about how servers and clients connect to each other and how they send and receive information. I learnt about security access of pages, for example like an admin page and the likes.  </p>
            </section>

            <section id='NEA-Technologies-Used'>
                <h4>Technologies - List</h4>
                <ul>
                    <li><a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a></li>
                    <li><a style={{ color: '#5e585d' }} href='https://socket.io/'>Socket.io</a></li>
                    <li><a style={{ color: '#5e585d' }} href='https://react-bootstrap.github.io/'>React Bootstrap</a></li>
                    <li><a style={{ color: '#5e585d' }} href='https://reactrouter.com/en/main'>React Router</a></li>
                    <li><a style={{ color: '#5e585d' }} href='http://expressjs.com/'>Express</a></li>
                </ul>
            </section>
            <section id='NEA-Technologies-Used-Desc'>
                <h4>Why Have I Used These Technologies </h4>
                <p>In this project I decided on the approach of using React.js, this way it was a quick and easy set-up and I could use packages to enhance the project. Using Socket.io I could create a socket connection between my server and client for live data display which was vital for live display of orders and tickets. I used react router for easy routing of pages, and security on pages, instead of learning how to use localstorage and cookies, I used something I had some similarity to.</p>
            </section>
        </div>
    )
}
