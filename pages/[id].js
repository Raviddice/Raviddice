import { useRouter } from "next/router";
import Image from 'next/image'
import Header from '../components/header.js'
import styles from "../styles/Books.module.css";
import { books } from "../public/HomePageBookEntries.js";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookObject = books[id];

  function constructText(text) {
  return text.map((lineObject, index) => {
    let computedClassName = lineObject.className;
    return (
      <p className={styles[computedClassName]} key={index}>
        {lineObject.text}
      </p>
    );
  });
}



  if (bookObject !== undefined) {
  return (
    <div>
      <Header headerBackground="homeBackground"/>
      <div className={styles.bookImages}>
      <div className={styles.bookInnerContainer}>
        <Image className={styles.bookPicOne}
          src={bookObject["imgUrl"]}
          height={500}
          width={350}
          alt="Cover of David Leo Rice's-Authored Books"
        />
        </div>
        <div className={styles.bookInnerContainer}>
        <Image className={styles.bookPicTwo}
          src={bookObject["imgUrl"]}
          height={500}
          width={350}
          alt="Cover of David Leo Rice's-Authored Books"
        />
        </div>
        <div className={styles.bookInnerContainer}>
        <Image className={styles.bookPicThree}
          src={bookObject["imgUrl"]}
          height={500}
          width={350}
          alt="Cover of David Leo Rice's-Authored Books"
        />
        </div>
      </div>
          <div className={styles.purchaseLinkBox}>
        <a className={styles.purchaseLink} href={bookObject["projectUrl"]} target="_blank" rel="noopener noreferrer">&#10154;Purchase&#10154;</a>
          </div>
    <div className={styles.blurbFrame}>
      <div>{constructText(bookObject["publicity"])}</div>
    </div>
    <div className={styles.purchaseLinkBox}>
  <a className={styles.purchaseLink} href={bookObject["projectUrl"]} target="_blank" rel="noopener noreferrer">&#10154;Purchase&#10154;</a>
    </div>
    </div>
  );
} else {
  return <div className="text">404 Sorry, project not found.</div>;
}
};

export default Book;
