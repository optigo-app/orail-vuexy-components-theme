import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div>
        <ul>
            <li><Link to='/alerts'>Alerts</Link></li>
        </ul>
    </div>
  )
}
