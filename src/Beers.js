import React from 'react';
import Beer from "./Beer";

export function Beers(props) {
    return (
            <div>
              <ul className="beers">
                {
                  props.beers.slice(0,5).map(({ id, name, image_url }) => (
                    <Beer name={name} image={image_url} key={id}/>
                  ))
                }
              </ul>
            </div>
        )
  }


export default Beers

