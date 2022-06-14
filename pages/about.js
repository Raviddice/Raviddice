import Header from '../components/header.js'
import Image from 'next/image'
import {useState} from 'react'
import styles from '../styles/About.module.css'
import AuthorPhoto from '../public/images/AboutPageImage.jpg'
About.title = 'david_leo_rice ~ about + contact page'
About.pieceName = 'david_leo_rice ~ about +contact page'
About.description = 'david_leo_rice ~ biography + interconnective info'
// About.image = INSERT LINK TO HEADER!!


export default function About() {

  const [email, setEmail] = useState("")


const handleEmailChange = (event) => {
  const { value } = event.target
  setEmail(value)
}

  return ( <
    >
    <
    Header headerBackground = "aboutBackground" / >
    <div className={styles.containerZero}>
    <div className={styles.containerOne}>
    <
    div className={styles.aboutPageProseOne}> David Leo Rice is a writer and animator from Northampton, MA. His interests cluster around metaphysical horror, dark comedy, dreams, myth, hauntings, the uncanniness of small towns, and the grotesque. < /div>

    <
    br / >
    <
    br / >
    <div className={styles.photoContainer}><Image src={AuthorPhoto} width={200} height={260}
        layout={`fixed`} alt="David Leo Rice reading at Pete's Candy Store in Brooklyn, NY"/>
        </div>
        </div>
    <
    br / >
    <
    br / >
    <
    div className={styles.aboutPageProseTwo}> David's first three novels, < strong > A ROOM IN DODGE CITY < /strong>, <strong>A ROOM IN DODGE CITY: VOL. 2</strong > , and < strong > ANGEL HOUSE < /strong>, are out now, as is his first story collection, <strong>DRIFTER: STORIES</strong >. David's fourth novel, < strong > THE NEW HOUSE < /strong>, is coming in Spring 2022. He currently teaches at Parsons, The New School, and FIT.</div >
    <
    br / >
    <
    br / >
    <
    div className={styles.aboutPageProseThree}>Contact David (for private workshops, review and interview queries, or for manuscript editing and development services) at: <a className={styles.externalLink} href="mailto:raviddice@gmail.com">raviddice@gmail.com</a></div>
    <
    br / >
    <
    br / >
    <div className={styles.containerTwo}>
    <
    div className={styles.aboutPageProseFour}>And to subscribe to David's<br/> Mailing List for updates on new work, enter <br/>your email address here:</div>
    <form className={styles.mailingListForm}>
     <input
       aria-label="Your email address"
       name="email_address"
       placeholder="Your email address"
       required
       type="email"
       onChange={handleEmailChange}
       value={email}
     />
     <button>SUBSCRIBE</button>
   </form>
   <
   br / >
   <
   br / >
   </div>
   </div>
    <
    />


  )
}
