
import React from 'react'
import "../assets/style.css"
import { Project } from '../components/Project'

export default function Home() {
    return (
        <>
            <section className='home'>
                <div className="container bg-home">
                    <div className="row-home">
                        <div className="left-content-home">
                            <h2 className='text-home'>designer</h2>
                            <span>suka design UI dan Content IG</span>
                        </div>
                        <div className="right-content-home">
                            <h2 className='text-home coder'>coder</h2>
                            <span>Frontend developer who writes cleane, <br /> elegant and effecient code</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='project-home'>
                <div className="container">
                    <div className="row-project-home">
                        <span className='title-project'>SOME OF MY LATEST WORK</span>

                        <Project />

                    </div>
                </div>
            </section>
        </>
    )
}
