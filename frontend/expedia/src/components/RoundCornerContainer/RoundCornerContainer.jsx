import React from 'react'
import TabNav from '../TabNav/TabNav'
import style from "./RoundCornerContainer.module.css";
export default function RoundCornerContainer() {
  return (
    <div className={style.RoundCornerContainer_container}>
      <TabNav />
    </div>
  )
}
