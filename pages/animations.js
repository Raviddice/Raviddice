import Header from '../components/header.js'
import ReactPlayer from "react-player"
import styles from '../styles/Animations.module.css'
Animations.title = 'david leo rice ~ animations'
Animations.pieceName = 'david leo rice ~ animations page'
Animations.description = 'david leo rice ~ links to animations'
// Animations.image = INSERT LINK TO HEADER!!

export default function Animations() {
  return (
    <>
    <Header headerBackground="animationsBackground"/>
      <div className={styles.pageContainer}>
    <p className={styles.title}>... Animations ...</p>
      <div className={styles.videoContainer}>
    <ReactPlayer
         url="https://vimeo.com/203852613"
         width="100%"
            height="100%"
       />
       </div>
            <br/>
            <br/>
         <div className={styles.videoContainerTwo}>
       <ReactPlayer
            url="https://vimeo.com/42249909"
            width="100%"
               height="100%"
          />
          </div>
      </div>

  </>
  )
}
