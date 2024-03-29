import React from 'react'
import { Link } from 'react-router-dom';

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
            <li><Link to='/badges'>Badges</Link></li>
            <li><Link to='/Tabs'>Tabs</Link></li>
            <li><Link to='/buttons'>Buttons</Link></li>
            <li><Link to='/buttongroup'>Button Group</Link></li>
            <li><Link to='/chips'>Chips</Link></li>
            <li><Link to='/autoComplete'>AutoComplete</Link></li>
            <li><Link to='/PaginationParts'>PaginationParts</Link></li>
            <li><Link to='/SelectDropDowns'>SelectDropDowns</Link></li>
            <li><Link to='/CheckBoxes'>CheckBoxes</Link></li>
            <li><Link to='/radio'>Radio</Link></li>
            <li><Link to='/CustomInput'>CustomInput</Link></li>
            <li><Link to='/FileUploader'>FileUploader</Link></li>
            <li><Link to='/cards'>Cards</Link></li>
            <li><Link to='/inputmask'>InputMask</Link></li>
            <li><Link to='/switchs'>switchs</Link></li>
        </ul>
    </div>
  )
}
