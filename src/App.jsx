import { useState } from 'react'
import users from './data.js'
import Testimonial from './Testimonial'
import './styles.css'

function App(props) {
let [current, setCurrent] = useState(0)
let prevUser = () => setCurrent(current - 1 < 0 ? 4 : current - 1)
let nextUser = () => setCurrent(current + 1 > 4 ? 0 : current + 1)
    return ( 
        <div className="container">
            <h1 className = 'heading'>Testimonials</h1>
            <hr/>
        <div className = 'testimonial'>
            <Testimonial user = {users[current]}/>
            <div className="buttons"><img src = '/left-297787_640.png' className="prev" onClick = {prevUser} alt = ''/><img src = "/right-297788_1280.png" className="next" onClick = {nextUser} alt = ''/></div>
        </div>
        </div>
    )
}


export default App;