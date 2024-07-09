import React from 'react';
import './Feature.css';

const Feature = ({title, desc}) => {
    // console.log(data.split(".,"))

    return (
        <div className='feature'>
            <h3 className="title">{title}</h3>
            <hr />
            <ul className='feature-list'>
            {   
                Array.from(desc.split(".,")).map((des, i) => (
                        <li key={i}>{des}</li>
                    ))
            }
            </ul>

        </div>
    )
}

export default Feature