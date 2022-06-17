import Header from '../components/header.js'
import Link from 'next/link'
import styles from '../styles/Writings.module.css'
Writings.title = 'david leo rice ~ writings'
Writings.pieceName = 'david leo rice ~ writings page'
Writings.description = 'david leo rice ~ comprehensive list of individual publications'
import { stories } from "../public/WritingsPageEntries.js";
import { essays } from "../public/WritingsPageEntries.js";
import { interviewsExcerptsEvents } from "../public/WritingsPageEntries.js";
import { podcasts } from "../public/WritingsPageEntries.js";
import { whatImReading } from "../public/WritingsPageEntries.js";
// About.image = INSERT LINK TO HEADER!!

export default function Writings() {

     function storyEntries() {
    let storyHtml = [];
    for (const entry in stories) {
      let currentEntry = stories[entry];
      storyHtml.push(
        <div className={styles.bookContainer} key={currentEntry.title}>
          <h3>{stories[entry].workTitle}</h3>
          <a className={styles.workLink} href={currentEntry.workUrl} target="_blank" passHref>{stories[entry].workTitle}</a>
          <p className={styles.bookDescription}>{stories[entry].shortText}</p>
        </div>
      );
    }

    return storyHtml;
  }

  function essayEntries() {
 let essayHtml = [];
 for (const entry in essays) {
   let currentEntry = essays[entry];
   essayHtml.push(
     <div className={styles.bookContainer} key={currentEntry.title}>
       <h3>{essays[entry].workTitle}</h3>
       <a className={styles.workLink} href={currentEntry.workUrl}>{essays[entry].workTitle}</a>
       <p className={styles.bookDescription}>{essays[entry].shortText}</p>
     </div>
   );
 }

 return essayHtml;
}

function interviewEntries() {
let interviewHtml = [];
for (const entry in interviewsExcerptsEvents) {
 let currentEntry = interviewsExcerptsEvents[entry];
 interviewHtml.push(
   <div className={styles.bookContainer} key={currentEntry.title}>
     <h3>{interviewsExcerptsEvents[entry].workTitle}</h3>
     <a className={styles.workLink} href={currentEntry.workUrl}>{interviewsExcerptsEvents[entry].workTitle}</a>
     <p className={styles.bookDescription}>{interviewsExcerptsEvents[entry].shortText}</p>
   </div>
 );
}

return interviewHtml;
}

function podcastEntries() {
let podcastHtml = [];
for (const entry in podcasts) {
 let currentEntry = podcasts[entry];
 podcastHtml.push(
   <div className={styles.bookContainer} key={currentEntry.title}>
     <h3>{podcasts[entry].workTitle}</h3>
     <a className={styles.workLink} href={currentEntry.workUrl}>{podcasts[entry].workTitle}</a>
     <p className={styles.bookDescription}>{podcasts[entry].shortText}</p>
   </div>
 );
}

return podcastHtml;
}

function readingsEntries() {
let readingsHtml = [];
for (const entry in whatImReading) {
 let currentEntry = whatImReading[entry];
 readingsHtml.push(
   <div className={styles.bookContainer} key={currentEntry.title}>
     <h4>{whatImReading[entry].month}</h4>
     <p>{whatImReading[entry].BookOne}</p>
     <img className={styles.coverImage}
       src={whatImReading[entry].imgUrl}
       height={150}
       width={150}
     />
    <p>{whatImReading[entry].BookTwo}</p>
    <p>{whatImReading[entry].BookThree}</p>
    <p>{whatImReading[entry].BookFour}</p>
    <p>{whatImReading[entry].BookFive}</p>

   </div>
 );
}

return readingsHtml;
}

  return (
  <>
   <Header headerBackground="writingsBackground"/>
   <div className={styles.pageContainer}>
   <div className={styles.worksContainer}>
   <h2 className={styles.groupHeader}>... SHORT ... STORIES ...</h2>
   <div className={styles.entryContainer}>{storyEntries()}</div>
   <h2 className={styles.groupHeader}>... ESSAYS ... ARTICLES ...</h2>
   <div className={styles.entryContainer}>{essayEntries()}</div>
   <h2 className={styles.groupHeader}>... INTERVIEWS ... <br/> ... EXCERPTS ... <br/> ... EVENTS ...</h2>
   <div className={styles.entryContainer}>{interviewEntries()}</div>
   <h2 className={styles.groupHeader}>... PODCAST ... <br/> ... APPEARANCES ...</h2>
   <div className={styles.entryContainer}>{podcastEntries()}</div>
   </div>
   <div className={styles.readingContainer}>
   <h2 className={styles.groupHeaderTwo}>... What ... <br/> ... I'm ... <br/> ... Reading ... </h2>
   <div className={styles.readingsContainer}>{readingsEntries()}</div>
   </div>

    </div>
    </>
  )
}
