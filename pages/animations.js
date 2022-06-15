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
    <div className={styles.videoContainer}>
    <p>... Animations ...</p>
    <ReactPlayer
         url="https://vimeo.com/203852613"
       />
       <br/>
       <br/>
       <ReactPlayer
            url="https://vimeo.com/42249909"
          />
      </div>

  </>
  )
}
