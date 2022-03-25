import { useState } from 'react';
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
//imported Stickers
import slap from "./stickers/slap.png";
import doing_fine from "./stickers/doing_fine.png";
import frame from "./stickers/frame.png";
import suspend from "./stickers/suspend.png";
import poke from "./stickers/poke.png";
import applause from "./stickers/applause.png";
import grab from "./stickers/grab.png";

import { Link, Switch, Route, Redirect } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  "@global *": {
      margin: 0,
      padding: 0,
      fontFamily: 'Poppins',
      scrollBehavior:"smooth",
  },
  
  App: {
    "& a": {
      color: theme.palette.black_txt,
      textDecorationLine: "none",
    },
    "& ul li": {
      listStyleType: "none",
    }
  },

  Header: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "2rem",
    paddingLeft: "2rem",
    backgroundColor: theme.palette.grey_background,
    filter: theme.filters.light_grey_shadow,
    "& h1": {
      color: theme.palette.red_primary,
      margin: 0,
      fontSize: "6rem",
    },
    "& p": {
      color: theme.palette.red_secondary,
      fontSize: "2rem",
      fontWeight: 600,
      marginTop: ".5rem",
      maxWidth: "30%"
    },
    "& span": {
      textDecoration: "underline 3px #FE5F55",
    },
    "& nav": {
      marginTop: "1.5rem",
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
    "& nav ul li a": {
      color: theme.palette.red_nav,
      fontWeight: 500,
    },
    "& nav ul li a:hover": {
      opacity: 0.6,
      transition: "0.2s ease-in-out",
    },
  },

  Gallery: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0 2rem 2rem",
    
    alignItems: "flex-start",
    filter: theme.filters.light_grey_shadow,
    minHeight:"50vh",
    background: "#FCCDB5",
    "& p": {
      fontSize: "4rem",
    },
    "& span": {
      textDecoration: "underline 3px #FE5F55",
      fontWeight:500,
    },
    "& input:hover": {
      maxWidth: "23rem",
      minHeight: "4rem",
      padding: ".5rem",
      border: "5px solid black",
      borderRadius: "10px",
      textAlign: "center",
      fontSize: "2.5em",
      filter: "drop-shadow(9px 9px 0 #FE5F55)",
      transition: "110ms",
      outline: "none",
    },
    "& input": {
      margin: "3rem 7rem 0",
      maxWidth: "23rem",
      minHeight: "4rem",
      padding: ".5rem",
      border: "5px solid black",
      borderRadius: "10px",
      textAlign: "center",
      fontSize: "2.5em",
      fontWeight: 600,
      filter: "drop-shadow(5px 5px 0 #FE5F55)",
      transition: "110ms",
      outline: "none",
    },
    "& img": {
      maxWidth: "40rem",
    },
  },

  Stickers: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
    marginLeft: "2rem",
    alignItems: "flex-start",
    padding: "2rem 0 2rem 2rem",
    backgroundColor: theme.palette.stickers_background,
    filter: theme.filters.light_grey_shadow,
    "& p": {
      fontSize: "4rem",
    },
    "& span": {
      textDecoration: "underline 3px #FE5F55",
      fontWeight:500,
    },
    "& button": {
      border:"none",
      padding: "1rem",
      cursor: "pointer",
      borderRadius: "10px",
      background:"none",
    },
    "& img": {
      maxWidth: "15em",
    },
    "& div": {
      marginTop: "2rem",
      display: "grid",
      gap: "1.5rem",
      gridTemplateColumns: "1fr 1fr 1fr",
      maxWidth:"100%",
      "@media (max-width: 1024px)": {
        gridTemplateColumns:"1fr 1fr"
      },
      "@media (max-width: 670px)": {
        gridTemplateColumns:"1fr"
      }
    },
  },

  Main: {
    display: "flex",
    padding: "2rem 0 2rem 2rem",
    flexDirection: "column",
    justifyContent:"center",
    minHeight:"50vh",
    backgroundColor: theme.palette.gallery_background,
    filter: theme.filters.light_grey_shadow,
    "& canvas": {
      maxWidth: "50rem",
      padding: "4rem 0 5rem 5rem",

      filter: theme.filters.canvas_shadow,
    },
    "& video": {
      display: "none",
    },
    "& p": {
      fontSize: "4rem",
    },
    "& span": {
      textDecoration: "underline 3px #FE5F55",
      fontWeight:500,
    },
  },

  Footer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "60vh",
    marginLeft: "2rem",
    alignItems: "flex-start",
    padding: "2rem 0 0 2rem",
    backgroundColor: theme.palette.red_primary,
    color: theme.palette.text,
    filter: theme.filters.light_grey_shadow,
    "& p": {
      fontSize: "4rem",
    },
    "& span": {
      fontWeight:600,
      textDecoration: "underline 5px #D64045",
    },
  },

  Picture: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& img": {
      maxWidth: "40rem",
      filter: theme.filters.canvas_shadow,
    },
    "& h3": {
      padding: ".2rem .5rem 0 .5rem",
      textAlign: "center",
      maxWidth: "50rem",
      fontSize: "2rem",
    },
    "& p": {
      marginBottom: "2rem",
    }
  },

  Readme: {
    padding: "0 2rem 2rem",
    fontWeight: 300,
    maxWidth: "50%",
    minHeight: "95vh",
    fontSize: "1.3rem",
    "& h2": {
      fontSize: "5rem",
      color: theme.palette.red_primary,
    },
    "& h3": {
      textDecoration: "underline 5px #FE5F55",
      fontSize: "2rem",
      fontWeight: 700,
      margin: "1rem 0 1rem"
    },
    "& section": {
      padding: "2rem",
      backgroundColor: theme.palette.grey_background,
      filter: theme.filters.grey_shadow,
    }
  },
}));


const stickers = [slap,doing_fine,frame,poke,suspend,applause, grab].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

function App(props) {
  // css classes from JSS hook
  const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("Hello!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <h1>StickerCam.</h1>
        <p>
          Have you ever wanted to poke your face, slap it or even have someone smiling telling you you're doing fine? Well now you can!
        </p>
        <br />
        <p>
          <span>Scroll down</span> and follow the steps :P
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/readme">readme</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        /** * Main app route */
        <Route path="/" exact>
          <main>
            <section className={classes.Gallery}>
              <p>One: <span>Give it a name</span></p>
              <input
                type="text"
                placeholder='Hello!'
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </section>
            <section className={classes.Stickers}>
              <p>Two: <span>Select your sticker!</span></p>
              <div>
              <button onClick={() => setSticker(stickers[0])}>
                <img src={stickers[0].url} />
              </button>
              <button onClick={() => setSticker(stickers[1])}>
                <img src={stickers[1].url} />
              </button>
              <button onClick={() => setSticker(stickers[2])}>
                <img src={stickers[2].url} />
              </button>
              <button onClick={() => setSticker(stickers[3])}>
                <img src={stickers[3].url} />
              </button>
              <button onClick={() => setSticker(stickers[4])}>
                <img src={stickers[4].url} />
              </button>
              <button onClick={() => setSticker(stickers[5])}>
                <img src={stickers[5].url} />
              </button>
              </div>
            </section>
            <section className={classes.Main}>
              <p className='section-title'>Three: <span>Strike a pose & shoot :P</span></p>
              <video ref={handleVideoRef} />
              <canvas
                ref={handleCanvasRef}
                width={2}
                height={2}
                onClick={handleCapture}
              />
              <p>SCROLL DOWN.</p>
            </section>
              {picture && (
              <section className={classes.Footer}>
                <div className={classes.Picture}>
                  <p>Four: <span>Cherish your shot!</span></p>
                  <img src={picture.dataUri} />
                  <h3>{picture.title}</h3>
                </div>
              </section>
              )}
          </main>
        </Route>
        /** * Readme route */
        <Route path="/readme">
          <main className={classes.Readme}>
            <h2>Devtest Readme.</h2>
            <section>
            <p>
              Hello candidate, Welcome to our little dev test. The goal of this
              exercise, is to asses your general skill level, and give us
              something to talk about at our next appointment.
            </p>
              <h3>What this app should do</h3>
              <p>
                SlapSticker is an app that lets users to slap stickers on their
                face, using their webcam. Functionality wise the app works, but
                the ui needs some love. We'd like for you to extend this
                prototype to make it look and feel it bit better.
              </p>
              <br />
              <p>These are the basic requirements:</p>
              <ul>
                <li>User can pick a sticker</li>
                <li>User can give the captured image a title</li>
                <li>User can place the sticker over the webcam image</li>
                <li>User can capture the webcam image with sticker</li>
              </ul>
              <h3>What we want you to do</h3>
              <p>
                Of course we didn't expect you to build a full fledged app in
                such a short time frame. That's why the basic requirements are
                already implemented.
              </p>
              <p>
                However, we would like for you to show off your strengths as a
                developer by improving the app.
              </p>
              <p>Some ideas (no need to do all):</p>
              <br />
              <ul>
                <li>Make it look really nice</li>
                <li>Let users pick from multiple (custom) stickers</li>
                <li>Improve the workflow and ux</li>
                <li>Show multiple captured images in a gallery</li>
                <li>Let users download or share the captured pics</li>
                <li>Add super cool effects to webcam feed</li>
                <li>Organize, document and test the code</li>
                <li>Integrate with zoom, teams, meet...</li>
              </ul>
              <h3>Quickstart</h3>
              <ul>
                <li>You can clone this repo to get started </li>
                <li>run `$ npm install` to install deps</li>
                <li>run `$ npm run start` to start dev environment</li>
                <li>push it to github or gitlab to share it with us. </li>
              </ul>
              <p>
                P.s. We've already added some libraries to make your life easier
                (Create React App, Jss, React Router), but feel free to add
                more.
              </p>
            </section>
          </main>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
