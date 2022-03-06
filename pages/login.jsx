import Image from 'next/image'
import React from 'react'
import style from '../styles/Login.module.css'
import logo from '../assets/Logo.png'
import {FiMail, FiKey, FiLogIn} from 'react-icons/fi'

function login() {
  return (
    <div className={'container min-h-screen w-full flex justify-center items-center '+ style.parent}>
        <div className={'bg-white shadow-sm flex w-11/12 '+ style.content}>
            <div className={style.leftPart+ " w-3/6"}>
              <div className={style.imgField}>
                <Image src={logo}/>
              </div>
              <h1>Website Medical Record Clinic</h1>
              <p>Sistemasi Data Kesehatan Terpercaya!</p>
            </div>
            <div className={style.rigthPart+ " flex flex-col justify-between items-center w-full"}>
                <div></div>
              <div className={style.inputDiv}>
                <h2>Pantau Selalu Kesehatanmu</h2>
                <p>Selamat Datang, Silahkan masuk ke akun mu!</p>
                <div className={style.input}>
                  <input type="text" name="email" id="email" placeholder='Email' />
                  <FiMail/>
                </div>
                <div className={style.input}>
                  <input type="password" name="password" id="password" placeholder='Password' />
                  <FiKey/>
                </div>
                <div className={style.btn}>
                  <button> Login </button>
                  <FiLogIn/>
                </div>
              </div>
              <div className={style.footer}>
                <p>Belum Punya akun? <a href="/register">Ayo Mulai Daftar.</a> </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default login