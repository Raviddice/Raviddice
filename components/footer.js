import styles from '../styles/Footer.module.css'


export default function Footer() {

  return (
    <>
    <p className={styles.footerText}><span className={styles.whiteText}>site</span> <br/><br/><i><span
    className={styles.spreader}>programmed</span></i> <br/><br/><span className={styles.spreaderTwo}><span
    className={styles.whiteText}>and designed </span></span><br/><br/> <span className={styles.spreaderThree}><i>by steve barbaro</i></span><br/><br/><br/><br/>
    &#10154;&#10154;<a href="https://stevebarbaro.com" className={styles.footerLink} target="_blank" rel="noreferrer"><span className={styles.blackFooterLetter}>(</span>st<span
      className={styles.blackFooterLetter}>e</span>veb<span className={styles.blackFooterLetter}>a</span>rbar<span
      className={styles.blackFooterLetter}>o</span>.com<span className={styles.blackFooterLetter}>)</span></a>
    &#10154;&#10154;
    </p>
    </>
  )
}
