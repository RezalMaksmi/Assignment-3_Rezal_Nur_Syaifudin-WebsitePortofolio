import React from 'react'
import img1 from '../assets/img/Screenshot (2).png'
import img2 from '../assets/img/Screenshot (6).png'
import img3 from '../assets/img/ruangan-camera1.png'

const data =
    [
        {
            img: img1,
            title: "MY Slicing Preject Campus",
            category: "slicing"
        },
        {
            img: img2,
            title: "MY UI Desaign Website",
            category: "slicing"
        },
        {
            img: img3,
            title: "Project 3D Animation ",
            category: "slicing"
        }

    ];



export const Project = () => {
    return (
        <div className="wrapping-projects">
            {
                data.map((items) => (
                    <div className="project">
                        <div className="wrapp-img">
                            <img src={items.img} alt="" />
                        </div>
                        <div className="wrapp-text">
                            <h5 className='_title-project'>{items.title}</h5>
                            <span>{items.category}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
