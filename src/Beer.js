import React from 'react';


export function Beer(props) {
   

    return (
    <div>
      <li>
        <h3>{props.name}</h3>
        <img  className="image" alt={props.name} src={props.image}/>
        <button></button>
      </li>
    </div>
    )
  }


export default Beer