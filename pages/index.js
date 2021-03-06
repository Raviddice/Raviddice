import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/header.js'
import styles from '../styles/Home.module.css'
Home.title = 'david leo rice'
Home.pieceName = 'david leo rice'
Home.description = 'david leo rice ~ homepage ~ books'
import { books } from "../public/HomePageBookEntries.js";

export default function Home() {

  function bookEntries() {
    let booksHtml = [];
    for (const entry in books) {
      let currentEntry = books[entry];
      booksHtml.push(
        <div className={styles.bookContainer} key={currentEntry.title}>
          <Link href={"/" + currentEntry.url}>
          <div className={styles.bookInnerContainer}>
            <Image className={styles.coverImage}
              src={currentEntry.imgUrl}
              height={currentEntry["thumbHeight"] || 300}
              width={currentEntry["thumbWidth"] || 300}
              alt="Cover of David Leo Rice's-Authored Books"
            />
            </div>
          </Link>
          <div className={styles.bookDescription}>{books[entry].shortText}</div>
        </div>
      );
    }

    return booksHtml;
  }
  return (
  <>
  <Header headerBackground="homeBackground"/>
   <div className={styles.pageContainer}>{bookEntries()}</div>;
  </>
)
  }
