import React from 'react'
import Footer from '../Footer/Footer';
import RoundCornerContainer from '../RoundCornerContainer/RoundCornerContainer'
import Gowithapp from './Gowithapp';



import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <RoundCornerContainer />
      <div  className={style.home_big_img_div}>
        <img src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg" alt="" />
      </div>
    <Gowithapp />
    <Footer />
    </div>
  )
}
