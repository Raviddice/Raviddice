import { useRouter } from "next/router";
import styles from "../styles/Books.module.css";
import { books } from "../public/HomePageBookEntries.js";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookObject = books[id];



  if (bookObject !== undefined) {
  return (
    <div className="bookContainer">
      <div className={styles.bookImage}>
        <img className={styles.bookPicOne}
          src={bookObject["imgUrl"]}
          height={bookObject["height"]}
          width={bookObject["width"]}
        />
        <img className={styles.bookPicTwo}
          src={bookObject["imgUrl"]}
          height={bookObject["height"]}
          width={bookObject["width"]}
        />
        <img className={styles.bookPicThree}
          src={bookObject["imgUrl"]}
          height={bookObject["height"]}
          width={bookObject["width"]}
        />
      </div>
    <a href={bookObject["projectUrl"]} target="_blank" rel="noopener noreferrer">
      <div className={styles.purchaseLink}>Buy</div>
    </a>
    <div className={styles.projectDescription}>
      <div className="text">{bookObject.shortText}</div>
    </div>
    </div>
  );
} else {
  return <div className="text">404 Sorry, project not found.</div>;
}
};

export default Book;
