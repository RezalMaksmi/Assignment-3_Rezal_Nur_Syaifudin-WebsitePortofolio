import React from 'react'
import checklist from '../assets/img/checklist.png'


export const Skills = () => {
    return (
        <section className='skills'>
            <div className="">
                <div className="skills__col">
                    <div className="bg-skills">
                        <div className="container">
                            <div className="wrapp__text-info">
                                <h1 className='web__title'>Skills</h1>
                                <span className='web__desc'>
                                    I'm a Frontend Web Developer.
                                </span>
                                <p className='web__p'>Saya adalah seorang programmer web developer, yang berfokus di bagian Frontend website dan mobile aplication dengan reactJS & React Native</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="wrapping__card">
                            <div className="wrapping-skill">
                                <div className="wrapp-skill">
                                    <div className="item-skill">
                                        <span>HTML</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>CSS</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>JS</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>SASS</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>Bootstrap</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>TailwindCSS</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>ReactJS</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                </div>
                                <div className="wrapp-skill">
                                    <div className="item-skill">
                                        <span>Microsoft</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>Github</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>Corel Draw</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                    <div className="item-skill">
                                        <span>Figma</span>
                                        <img src={checklist} alt="" width="30px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
