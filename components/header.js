import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'


export default function Header(props) {
  const router = useRouter();

  return (
    <>
  <div className={`${styles.header} ${styles[props.headerBackground]}`}>

    <Link href = "/" passHref>
      <button className={router.pathname == "/" ? "active" : ""}>home</button>
    </Link>
    <Link href = "/writings" passHref>
      <button>writings</button>
    </Link>
    <Link href = "/about" passHref>
      <button>about</button>
    </Link>
    <Link href = "/wake-island-podcast" passHref>
      <button>wake island podcast</button>
    </Link>
    <Link href = "/animations" passHref>
      <button>animations</button>
    </Link>

   </div>
     </>
  )
}
