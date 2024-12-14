"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

//style modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Nav() {
    //nav hidden by default
    const [ showNav, setShowNav ] = useState(false);
    //const router = useRouter();

    //modal for changing bgColor
    const [ open, setOpen ] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //array for background colors
    const bgColors = [
        "radial-gradient(at center, #AE1D1F, #4163CD",
        "radial-gradient(at center, #F96D26, #2A06FD)",
        "radial-gradient(at center, #AFB055, #232CFB)",
        "radial-gradient(at center, #71F97D, #174EE8)",
        "radial-gradient(at center, #308FCD, #25106B)",
        "radial-gradient(at center, #A501DB, #3330D2)",
        "radial-gradient(at center, #EF60C3, #3431BF)",
        "radial-gradient(at center, #010101, #0C099B)",
        "radial-gradient(at center, #4C4B4B, #131E9E)",
        "radial-gradient(at center, #DEDBD1, #04018F)"
    ];
/*
/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=e64a78&c2=308dbd&gt=r&gd=d
background: #E64A78;
background: radial-gradient(at center, #E64A78, #308DBD);

background: #AE1D1F;
background: radial-gradient(at center, #AE1D1F, #FFC45A);

background: #205389;
background: radial-gradient(at center, #205389, #685D96);

background: #252223;
background: radial-gradient(at center, #252223, #DBDBDB);

background: #AFB055;
background: radial-gradient(at center, #AFB055, #232CFB);

background: #DEDBD1;
background: radial-gradient(at center, #DEDBD1, #B558A2);

background: #F96D26;
background: radial-gradient(at center, #F96D26, #291B7C);

background: #551444;
background: radial-gradient(at center, #551444, #3330D2);

background: #71F97D;
background: radial-gradient(at center, #71F97D, #174EE8);

*/
    //set background color to default blue
    const [ backgroundColor, setBackgroundColor ] = useState("radial-gradient(at center, #308FCD, #25106B)");
    
    //change background color
    useEffect(()=> {
        document.body.style.background = backgroundColor
    }, [backgroundColor])
    
    //if hamburger nav clicked
    function clickNav() {
        //set to the opposite of showNav state
        setShowNav(!showNav);
    }

    return (
    <header>
        {/* HAMBURGER NAV */}
        <button id="hamburgerNav" className={showNav?"showNavStay":""} onClick={clickNav}>
            {/* three spans for the hamburger lines  */}
            <span></span>
            <span></span>
            <span></span>
        </button>

        {/* if const showNav is true, apply className showNav, else no className displayed {showNav?"showNav":""}*/} 
        <nav className={showNav?"showNav":""}>
            <ul className="mainNav">
                <li>
                    <Link className="link" href="/account" onClick={clickNav}>ACCOUNT</Link>
                </li>
                <li>
                    <Link className="link" href="/about" onClick={clickNav}>ABOUT</Link>
                </li>
                {/* <li>
                    <Link className="link" href="/playlist" onClick={clickNav}>PLAYLIST</Link>
                </li> */}
            </ul>
        </nav>

        {/* LOGO */}
        <Link href="/">
            <img  className="logo" src="/MoodTunesLogo.PNG" height={300} width={300} alt="MoodTunesLogo"/>
        </Link>

        {/* CHANGE BACKGROUND COLOR FORM (MODAL)*/}
        <div className="colorModalContainer">
            <Button className="btnTxt" onClick={handleOpen}>Change <br/> Me!</Button>
            <Modal
                // set to open useState variable
                open={open}
                // set to false 
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 900,
                    height: 550,
                    bgcolor: 'white',
                    border: '2px solid #000',
                    borderRadius: 12,
                    boxShadow: 24,
                    p: 4,}}>
                    <p id="modal-title" className="modalTitle" style = {{ color: '#2E2F76', marginTop: 50, textAlign: 'center', fontSize: 30, fontFamily: 'CaviarDreams'}}>
                    Change background color <br></br>to match your mood!
                    </p>
                    <div id="modal-description" className="colorContainer" style={{marginLeft: 63, marginTop: 60, width: '100%', maxWidth: 800, display: 'flex', justifyContent: 'spaceBetween', flexWrap: 'wrap'}}>
                        {bgColors.map((bgColor, index) => (
                            <div 
                                key={index} 
                                className="colorCard" 
                                style={{ width: '100%', maxWidth: 100, marginTop: 10, marginBottom: 10, marginRight: 50}}>
                            <div    
                                style={{ background: bgColor, width: '100%', height: 100, borderRadius: 20, cursor: 'pointer' }}
                                className="colorBox" 
                                onClick={() => setBackgroundColor(bgColor)}
                                //id="colorBoxHover"
                                // onMouseEnter={() => mouseEnter()}
                                // onMouseLeave={() => mouseLeave()}
                                >
                            </div>
                        </div>
                        ))}
                    </div>
                </Box>
            </Modal>
        </div>
    </header>
  );
}

/**
 * <div id="modal-description" className="colorContainer">
                        {bgColors.map((bgColor, index) => (
                            <div key={index} className="colorCard">
                                <div 
                                    style={{ background: bgColor }}
                                    className="colorBox" 
                                    onClick={() => setBackgroundColor(bgColor)}>

                                </div>
                            </div>
                        ))}
                    </div>
 */