import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Image from 'next/image'
import { useState } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import styles from '../styles/About.module.css'
import AuthorPhoto from '../public/images/AboutPageImage.jpg'
About.title = 'david leo rice ~ about + contact page'
About.pieceName = 'david leo rice ~ about +contact page'
About.description = 'david leo rice ~ biography + interconnective info'
About.image = "https://www.raviddice.com/images/AboutBackground.jpg"



export default function About() {

  const [email, setEmail] = useState("")


  const handleEmailChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  return ( <
    >
    <
      Header headerBackground="aboutBackground" />
    <div className={styles.containerZero}>
      <div className={styles.containerOne}>
        <
          div className={styles.aboutPageProseOne}> <span className={styles.nameFont}>David Leo Rice</span> is a writer and animator from Northampton, MA. His interests cluster around metaphysical horror, dark comedy, dreams, myth, hauntings, the uncanniness of small towns, and the grotesque. < /div>

    <
            br />
          <
            br />
          <div className={styles.photoContainer}><Image src={AuthorPhoto} width={200} height={260}
            layout={`fixed`} alt="David Leo Rice reading at Pete's Candy Store in Brooklyn, NY" />
          </div>
        </div>
        <
          br />
        <
          br />
        <
    div className={styles.aboutPageProseTwo}> David&apos;s first three novels, < span className={styles.bookName} > A ROOM IN DODGE CITY < /span>, < span className={styles.bookName} >A ROOM IN DODGE CITY: VOL. 2< /span > , and  < span className={styles.bookName} >ANGEL HOUSE < /span>, are out now, as is his first story collection, < span className={styles.bookName} >DRIFTER: STORIES</span >. David&apos;s fourth novel, < span className={styles.bookName} > THE NEW HOUSE < /span>, is coming in Spring 2022. He currently teaches at Parsons, The New School, and FIT.</div >
            <
              br />
            <
              br />
            <
              div className={styles.aboutPageProseThree}>Contact David (for private workshops, review and interview queries, or for manuscript editing and development services) at: <a className={styles.externalLink} href="mailto:raviddice@gmail.com">raviddice@gmail.com</a></div>
            <
              br />
            <
              br />
            <div className={styles.containerTwo}>
              <
                div className={styles.aboutPageProseFour}>And to subscribe to David&apos;s<br /> Mailing List for updates on new work, enter <br />your email address here:</div>
              <div><MailchimpSubscribe url="https://raviddice.us7.list-manage.com/subscribe/post?u=b62b3010e207cb12cdace2fdc&amp;id=d2303a83bd" /></div>
              <
                br />
              <
                br />
            </div>
   </div>
   <Footer/>
            <
    />


            )
          }
