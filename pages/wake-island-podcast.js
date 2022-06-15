import Header from '../components/header.js'
import styles from '../styles/WakeIsland.module.css'
WakeIsland.title = 'david leo rice ~ wake island podcast'
WakeIsland.pieceName = 'david leo rice ~ wake island podcast'
WakeIsland.description = 'david leo rice ~ links to wake island podcast episodes'
// WakeIsland.image = INSERT LINK TO HEADER!!

export default function WakeIsland() {
  return (
    <>
    <Header headerBackground="wakeIslandBackground"/>
    <p className={styles.title}>... Wake Island Podcast ...</p>
    <p className={styles.subtitle}>David Leo Rice cohosts this podcast about contemporary art and literature, transgression, escape, and the darkening undercurrents of American life in the 2020s).</p>
    <div className={styles.socialBox}>
    <a href="https://twitter.com/wakeislandpod?lang=en" target="_blank" rel="noreferrer">&#10239;twitter&#8668;</a>
    <a href="https://www.instagram.com/wakeislandpod/?hl=en" target="_blank" rel="noreferrer">&#8668;instagram&#8668;</a>
    </div>
    <div className={styles.wakeIslandContainer}>
    <iframe frameborder="0" height="450" width="600" src="https://embed.podcasts.apple.com/us/podcast/wake-island/id1485799907"></iframe>
    </div>
    </>
  )
}
