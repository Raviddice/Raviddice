import Header from '../components/header.js'
import ReactPlayer from "react-player"

export default function Animations() {
  return (
    <>
    <Header headerBackground="animationsBackground"/>
    <div>Animations</div>
    <ReactPlayer
         url="https://vimeo.com/203852613"
       />
       <br/>
       <br/>
       <ReactPlayer
            url="https://vimeo.com/42249909"
          />

  </>
  )
}
