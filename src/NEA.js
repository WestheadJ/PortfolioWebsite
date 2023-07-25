import React, { useEffect, useState } from 'react';
import zero from "./images/NEA-A-Level/Admin-Users.png"
import one from './images/NEA-A-Level/Create-Table-Error-1.png'
import two from './images/NEA-A-Level/Create-Table.png'
import three from './images/NEA-A-Level/Create-User.png'
import four from './images/NEA-A-Level/Delete-User.png'
import five from './images/NEA-A-Level/Edit-User-1.png'
import six from './images/NEA-A-Level/Edit-User-2.png'
import seven from './images/NEA-A-Level/Front-Dashboard-1.png'
import eight from './images/NEA-A-Level/Kitchen-Dashboard-1.png'
import nine from './images/NEA-A-Level/Kitchen-Dashboard-Completed.png'
import ten from './images/NEA-A-Level/Kitchen-Dashboard-Current.png'
import eleven from './images/NEA-A-Level/Kitchen-Dashboard-Waiting.png'
import twelve from './images/NEA-A-Level/Login-Wrong-Password.png'
import thirteen from './images/NEA-A-Level/Login-Wrong-User.png'
import fourteen from './images/NEA-A-Level/Login.png'
import fifteen from './images/NEA-A-Level/Ordering-Menu.png'
import sixteen from './images/NEA-A-Level/Table-Created.png'
import seventeen from './images/NEA-A-Level/User-Deleted.png'




export default function NEA() {

    const [photoOption, setPhotoOption] = useState(false)
    const [count, setCount] = useState(0)
    const [image, setImage] = useState(zero)
    const [caption, setCaption] = useState(Caption0)
    const pics = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]

    useEffect(() => {
        if (!photoOption) {
            setInterval(changePhotoForward, 3000)
        }
    }, [photoOption])

    function changePhotoForward() {

    }

    return (
        <div id='NEA-Page'>
            <h1>A Level NEA - Restaurant POS</h1>
            <section id='NEA-Summary'>
                <h4 >Summary</h4>
                <p>In college, I studied Computer Science at A-Level. In this 2 year course, the last year consisted of a full year length project. This was an N.E.A (non examined assessment), which is a marked piece of course work. I decided on the idea of creating a restaurant POS system. I decided to create this using <a style={{ color: '#5e585d' }} href='https://reactjs.org'>React.js</a> as a framework for the project. .</p>
            </section>
            <section id='NEA-Project-Desc'>
                <h4>What Was The Project?</h4>
                <p>This project consisted of three stages: planning, development and analysis. The planning section was to plan what we wanted to create. I wanted to create a restaurant POS because I was working at pub at the time and our system ran on a ticket system, was thinking how I could change this system and make it a bit more efficient. I also took inspiration from the likes of McDonalds and Wetherspoons. This restaurant POS would basically consist of a front of house and back of house system, front of house was for the use of the waiters and bar staff, they would be able to see active tables, to allow for ease of sitting. Back of house was for the use of the kitchen, allowing to see orders for tables in a queue order, they can set cheques as waiting, completing and completed. Along with getting the idea together we then needed to show how the program would work, we used a flowchart to show the flow of our program and how each functions will flow, either on their own or work with other functions. The next stage was development this was our longest section, obviously all work was done solo, so learning front end and back end things too time. We also had to cite our sources for anything we learnt from, or any solutions for our code from websites like stackoverflow. Next was analysis, this section was all about analysing what we had done over the time we were given, criticising our planning and development stages. Looking back I had shown that better planning could've been carried out, and that a lot of overthinking happened and took the project out of scope.</p>
            </section>
            <section id='NEA-Project-Learn-Desc'>
                <h4>What Did I Learn From This?</h4>
                <p>Because this was part of my A Level, I had things on the curriculum that I was learning alongside the project, some things helped and some things were unrelated. For example things like programming tasks, learning different methodologies for development and different diagrams for planning out the development of a piece of software, helped with development and planning of my project. I learnt more about how servers and clients connect to each other and how they send and receive information. I learnt about security access of pages, for example like an admin page and the likes. I also learnt about testing and test cases. As well I also learnt how to criticise my work through the analysis section, questioning what I did well and what I did wrong and what I could've done better. This will help in all areas of my life, not just in a professional work environment.</p>
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
                <p>In this project I decided on the approach of using React.js, this way it was a quick and easy set-up and I could use packages to enhance the project. Using Socket.io I could create a socket connection between my server and client for live data display which was vital for live display of orders and tickets. I used react router for easy routing of pages, and security on pages, instead of learning how to use localstorage and cookies, I used something I had some similarity to (localstorage and cookies are on my list of things I want and need to learn). Using express.js which is ran through node.js makes making endpoints and easy to make with safety features in place by default. If looked at, in the project I am using a CORS library that is an extension on express.js. CORS, standing for Cross Origin Resource Sharing, is a HTTP header protocol that controls what resources a device can load. I had to pass off my IP as whitelist IP so my device can connect back and forth to the server.</p>
            </section>
            <section>
                <div>
                    {photoOption ? <>true</> :
                        <div className='carasoul ' style={{ backgroundColor: '#9A8C98', paddingTop: '2%' }} >
                            <img style={{ width: 'auto', maxHeight: '600px' }} src={image} alt='' />
                            <p>{caption}</p>
                        </div>

                    }
                </div>
            </section>
        </div>
    )
}

function Caption0() {
    return (<div>
        <p>This screen grab shows the admins dashboard when they log in. From here an admin can see all users on the system, they can update user details, delete users and also create new users. An admin can also edit the menu, changing prices and adding and removing items. </p>
    </div>)
}

function Caption1() {
    return (<div>
        <p>This screen grab shows the modal that shows when you want to create a table, you can chose a table number and how many seats the table can seat.</p>
    </div>)
}

function Caption2() {
    return <div><p>This screen grab shows the error message you get when you try to create a table with a pre-existing table number</p></div>
}



