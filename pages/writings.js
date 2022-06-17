import Header from '../components/header.js'
import Link from 'next/link'
import styles from '../styles/Writings.module.css'
Writings.title = 'david leo rice ~ writings page'
Writings.pieceName = 'david leo rice ~ writings page'
Writings.description = 'david leo rice ~ comprehensive list of individual publications'
import { stories } from "../public/WritingsPageEntries.js";
import { essays } from "../public/WritingsPageEntries.js";
import { interviewsExcerptsEvents } from "../public/WritingsPageEntries.js";
import { podcasts } from "../public/WritingsPageEntries.js";
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

  return (
  <>
    <Header headerBackground="writingsBackground"/>
   <h2 className={styles.groupHeader}>... SHORT ... STORIES ...</h2>
   <div className={styles.storyContainer}>{storyEntries()}</div>
   <h2 className={styles.groupHeader}>... ESSAYS ... ARTICLES ...</h2>
   <div className={styles.essayContainer}>{essayEntries()}</div>
   <h2 className={styles.groupHeader}>... INTERVIEWS ... EXCERPTS ... EVENTS ...</h2>
   <div className={styles.interviewContainer}>{interviewEntries()}</div>
   <h2 className={styles.groupHeader}>... PODCAST ... APPEARANCES ...</h2>
   <div className={styles.interviewContainer}>{podcastEntries()}</div>
    </>
  )
}
