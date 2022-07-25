import Link from 'next/link'
import styles from '../styles/Header.module.css'


export default function Header(props) {

  return (
    <>
  <div className={`${styles.header} ${styles[props.headerBackground]}`}>

    <Link href = "/" passHref>
      <button>&#10154;books (home)&#10154;</button>
    </Link>
    <Link href = "/writings" passHref>
      <button>&#11059;<i>interviews // events // other writings</i>&#8668;</button>
    </Link>
    <Link href = "/about" passHref>
      <button>&#8668;about&#10154;</button>
    </Link>
    <Link href = "/wake-island-podcast" passHref>
      <button>&#10154;<i>wake island podcast</i>&#8668;</button>
    </Link>
    <Link href = "/animations" passHref>
      <button>&#10154;<i>animations</i>&#10239;</button>
    </Link>
    <div className={styles.social}>
    <a href="https://twitter.com/raviddice" target="_blank" rel="noreferrer">&#10239;twitter&#8668;</a>
    <a href="https://www.goodreads.com/author/show/16296226.David_Leo_Rice" target="_blank" rel="noreferrer">&#10154;<i>goodreads</i>&#10154;</a>
    <a href="https://www.instagram.com/raviddice/" target="_blank" rel="noreferrer">&#8668;instagram&#8668;</a>
    <a href="https://www.patreon.com/raviddice?utm_medium=social&utm_source=twitter&utm_campaign=tyshare2" target="_blank" rel="noreferrer">&#10154;&#10239;<i>patreon</i>&#10154;</a>
    </div>
    </div>
     </>
  )
}
