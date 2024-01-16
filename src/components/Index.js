import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div>
        <ul>
            <li><Link to='/alerts'>Alerts</Link></li>
            <li><Link to='/accordions'>Accordions</Link></li>
            <li><Link to='/textfields'>TextFields</Link></li>
            <li><Link to='/list'>List</Link></li>
            <li><Link to='/treeviews'>TreeView</Link></li>
            <li><Link to='/avatars'>Avatars</Link></li>
            <li><Link to='/dailogs'>Dailogs</Link></li>
            <li><Link to='/Menu'>Menu</Link></li>
            <li><Link to='/DatePicker'>DatePicker</Link></li>
            <li><Link to='/TextArea'>TextArea</Link></li>
        </ul>
    </div>
  )
}
