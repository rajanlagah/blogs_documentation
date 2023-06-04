// Example from https://beta.reactjs.org/learn

import { useState } from 'react'

import styles from './ImgLoader.module.css'

const ImgLoader = ({type}) =>  {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  const TYPE_TO_IMG_MAP = {
    nft_landing_page: {
      url:"https://nft-ranking-weld.vercel.app/",
      src:"/NFT_ranking_landing_page.png"
    },
    paypal_landing_page: {
      url:"https://paypal-decentralized.vercel.app",
      src:"/Paypal/PayPal_LandingPage_1.png"
    }
  }

  return (
    <figure style={{textAlign:"center"}}>
      <img src={TYPE_TO_IMG_MAP[type].src} />
      <a className={styles["img-caption-demo"]} href={TYPE_TO_IMG_MAP[type].url}>Visit website ↗</a>
    </figure>
  )
}
export default ImgLoader