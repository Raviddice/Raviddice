import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Books.module.css";
import { books } from "../public/HomePageBookEntries.js";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookObject = books[id];

  //This isn't great, but it allows p classNames to be set.
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
    <div className="bookContainer">
      <div className={styles.bookImage}>
        <img
          src={bookObject["imgUrl"]}
          height={bookObject["height"]}
          width={bookObject["width"]}
        />
      </div>
      <div className="text">
        <p>{bookObject["objectDetails"]}</p>
      </div>
      <a href={bookObject["projectUrl"]} target="_blank" rel="noopener noreferrer">
        <div className={styles.purchaseLink}>EXAMINE</div>
      </a>
      <div className={styles.projectDescription}>
        <div className="text">{constructText(bookObject["text"])}</div>
      </div>
    </div>
  );
} else {
  return <div className="text">404 Sorry, project not found.</div>;
}
};

export default Book;
