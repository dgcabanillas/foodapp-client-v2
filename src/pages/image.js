
import React from 'react'
import './styles.css'
export const Image = ({ name, image }) => {
    console.log(name, image);
    return (
        <div className='card'>
            <div className='container'>
                <div className='image'>
                    <img src={image} alt={name}  />
                    
                </div>
                <div>{name}</div>
            </div>
                <button className='buttonDetail'>Go To Detail</button>
        </div>
    )
}
