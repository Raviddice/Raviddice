import Header from '../components/header.js'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Writings.module.css'
import { stories, essays, interviewsExcerptsEvents, podcasts, whatImReading} from "../public/WritingsPageEntries.js";
Writings.title = 'david leo rice ~ writings'
Writings.pieceName = 'david leo rice ~ writings page'
Writings.description = 'david leo rice ~ comprehensive list of individual publications'
Writings.image = "https://www.raviddice.com/images/WritingsBackground.jpg"


export default function Writings() {

     function storyEntries() {
    let storyHtml = [];
    for (const entry in stories) {
      let currentEntry = stories[entry];
      storyHtml.push(
        <div className={styles.entryContainer} key={currentEntry.title}>
          <a className={styles.workLink} href={currentEntry.workUrl} target="_blank" rel="noreferrer" passHref>&#10154;&#10154;&#10154; {stories[entry].workTitle} &#10154;&#10154;&#10154;<span className={styles.venue}>{stories[entry].venue}</span></a>
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
     <div className={styles.entryContainer} key={currentEntry.title}>
       <a className={styles.workLink} href={currentEntry.workUrl} target="_blank" rel="noreferrer" passHref>&#10154;&#10154;&#10154; {essays[entry].workTitle} &#10154;&#10154;&#10154;<span className={styles.venue}>{essays[entry].venue}</span></a>
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
   <div className={styles.entryContainer} key={currentEntry.title}>
     <a className={styles.workLink} href={currentEntry.workUrl} target="_blank" rel="noreferrer" passHref>&#10154;&#10154;&#10154; {interviewsExcerptsEvents[entry].workTitle} &#10154;&#10154;&#10154;<span className={styles.venue}>{interviewsExcerptsEvents[entry].venue}</span></a>
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
   <div className={styles.entryContainer} key={currentEntry.title}>
     <a className={styles.workLink} href={currentEntry.workUrl} target="_blank" rel="noreferrer" passHref>&#10154;&#10154;&#10154; {podcasts[entry].workTitle} &#10154;&#10154;&#10154;<span className={styles.venue}>{podcasts[entry].venue}</span></a>
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
   <div key={currentEntry.title}>
     <h4 className={styles.month}>+{whatImReading[entry].month}+</h4>
     <p className={styles.books}>{whatImReading[entry].BookOne}</p>
     <Image
       className={styles.readingImage}
       src={whatImReading[entry].imgUrl}
       height={200}
       width={150}
       alt="Picture of Book Being Read By David Leo Rice"
     />
    <p className={styles.books}>{whatImReading[entry].BookTwo}</p>
    <p className={styles.books}>{whatImReading[entry].BookThree}</p>
    <p className={styles.books}>{whatImReading[entry].BookFour}</p>
    <p className={styles.books}>{whatImReading[entry].BookFive}</p>

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
        <h2 className={styles.groupHeader}>... INTERVIEWS ... <br/> ... EXCERPTS ... <br/> ... EVENTS ...</h2>
             <div>{interviewEntries()}</div>
          <h2 className={styles.groupHeader}>... STORIES ...</h2>
                <div>{storyEntries()}</div>
           <h2 className={styles.groupHeader}>... ESSAYS ... ARTICLES ...</h2>
                <div>{essayEntries()}</div>
           <h2 className={styles.groupHeader}>... PODCAST APPEARANCES ...</h2>
                <div>{podcastEntries()}</div>
                  </div>
        <div className={styles.readingContainer}>
           <h2 className={styles.groupHeaderTwo}>... What ... <br/> ... I&apos;m ... <br/> ... Reading ... </h2>
        <div className={styles.readingsContainer}>{readingsEntries()}</div>
   </div>

    </div>
    </>
  )
}
