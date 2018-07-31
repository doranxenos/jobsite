import React from 'react'
import Link from 'next/link'




const Home = () => (

  <div>
        <div className='firstPage'>
          <h1> Looking for a Project Manager? </h1>
          <h2> Take a peek inside </h2>
          <div className='buttonContainer'>
            <button  className='binocularButton'>
              <div className='binocularView'>
                <h6 className='binocluarText'>
                  I am looking for you too
                </h6>
                <a className="resume-download"
                  href="/static/ScottFosterResume.pdf" download="Scott-Foster-Resume">
                    Download PDF Resume
                </a>
              </div>
            </button>
          </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand');
        @font-face {
          font-family: 'EB Garamond', serif;
          src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
        }

        h1 {
          text-align: center;
          justify-self: center;
          font-family: 'EB Garamond', serif;
        }

        h2 {
          text-align: center;
          justify-self: center;
          font-family: 'EB Garamond', serif;
        }

        .firstPage {
          height: 100%;
          width: 100%;
          position: fixed;
          background-image: url('/static/img/binoculars-fog-foggy-1136815.jpg');
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
          background-size: cover;;


        }

        .buttonContainer {
          position: fixed;
          height: 100%;
          width: 100%;
        }

        .binocularButton {
          height: 9%;
          width: 9%
          position: relative;
          color: white;
          cursor: pointer;
          justify-content: center;
          margin-top: 12%;
          margin-left: 40%;
          padding: 10%;
          border-radius: 50%;
          opacity: 0;
          z-index: 1;
        }


        .binocularView {
          transform: scale(5);
          transform: 100s ease-in-out;
          opacity: 1;
          background-attachment: inherit;
          background-image: url('/static/img/DSCF6548.jpg');
          background-size: cover;
          position: relative;
          position: fixed;
          top: 20%;
          left: 5%;
          width: 35%;
          display:none;
          align-items:top;
        }

        .binocluarText {
          color: black;
          width:

        }

        .resume-download {
          text-decoration: none;
          background: #054A25;
          color: white;
          padding: 5px;
          justify-content:flex-start;
        }
    `}</style>
    </div>

)

export default Home
