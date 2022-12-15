import React from 'react'
import style from './Logo.module.css'

export default function Logo() {
  return (
    <div>
        <img className={style.logo} src='./exprobook.png' alt="logo" />
    </div>
  )
}
