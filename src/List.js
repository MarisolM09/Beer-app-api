import React from 'react';
import Beer from "./Beer";

export function List(props) {
  return (
            <div>
              <ul className="beers">
                {
                  props.list.slice(5,10).map(({ id, name, image_url }) => (
                    <Beer name={name} image={image_url} key={id}/>
                  ))
                }
              </ul>
            </div>
        )
  }

export default List;