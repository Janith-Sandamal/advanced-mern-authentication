import React from 'react'
import './Home.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import loginImg from '../../assets/login.svg'

const Home = () => {
  return (
    <div>
        <Header/>

        <section className='container hero'>
          <div className='hero-text'>
            <h2>Advanced MERN Stack Authenticayion System</h2>

            <p>Learn and Master Authentication and Authorization using MERN Stack.</p>

            <p>Build User Registration, Login, Password Reset, Social Login, User Permission, Email Notification etc.</p>

            <div className='hero-buttons --flex-start'>
              <button className='--btn --btn-danger'>Register</button>
              <button className='--btn --btn-primary'>Login</button>
            </div>

          </div>

          <div className='hero-image'>
            <img src={loginImg} alt='Authentication'></img>
          </div>

        </section>

        <Footer/>
    </div>
  )
}

export default Home