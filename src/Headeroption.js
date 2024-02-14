import React from 'react'
import './headeroption.css';

export default function Headeroption({Icon, title}) {
  return (
   <div>
      {Icon && <Icon className='headeroption__icon'/>}
      <h3 className='headeroption__icon'>{title}</h3>
   </div>
  )
}
