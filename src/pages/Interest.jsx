import React from 'react'
import { BsInstagram, BsFacebook, BsYoutube, BsPinterest } from "react-icons/bs";

export const Interest = () => {
    return (
        <section className='skills'>
            <div className="">
                <div className="skills__col">
                    <div className="bg-skills">
                        <div className="container">
                            <div className="wrapp__text-info">
                                <h1 className='web__title'>Interest</h1>
                                <span className='web__desc'>
                                    I'm a Frontend Web Developer.
                                </span>
                                <p className='web__p'>Saya adalah seorang programmer web developer, yang berfokus di bagian Frontend website dan mobile aplication dengan reactJS & React Native</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="wrapping__card">
                            <div className="wrapping-interest">
                                <span>Nama saya rezal nur syaifudin saya berasal dari blitar, yang saat ini sedang berkuliah di UNIVERSITAS PGRI Kanjuruhan Malang jurusan Teknik Informatika.</span>
                                <span>Saya tertarik denga hal-hal yang berhubungan tentang teknologi, karena ada banyak tantangan didalam setiap code yang dituliskan, saya juga suka mempelajari hal-hal yang belum pernah saya pelajari terutama musik.</span>
                            </div>
                            <div className="sosmed_icon">
                                <a href="https://www.instagram.com/maks_miproject/"><BsInstagram /></a>
                                <a href="https://www.instagram.com/maks_miproject/"><BsFacebook /></a>
                                <a href="https://www.instagram.com/maks_miproject/"><BsYoutube /></a>
                                <a href="https://www.instagram.com/maks_miproject/"><BsPinterest /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
