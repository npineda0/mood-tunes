"use client";

export default function About() {

  return (
    <main className="aboutContainer">
        <p className="aboutSiteDesc">
        This app incorporates Spotify's API and OAuth 2.0 to seamlessly integrate with your Spotify account,
        transforming your mood into a personalized playlist to match your unique vibe. By analyzing
        your mood and preferences, Mood Tunes suggests songs that you are most likely to enjoy. 
        Among the sites features there's also an interactive customization option to further set the
        mood by changing the color of the site. This app was created with Next.js and styled with SaSS. 
        </p>

        <div className="aboutMeContainer">
          <div className="aboutDevContainer">
            <p className="aboutHeader">About Web Developer:</p>
            <div className="aboutPic" src="/aboutImg.jpg"></div>
          </div>
          <div className="aboutTxtContainer">
            <p>Naila Lugardo-Pineda</p>
            <p className="aboutMeTxt"> 
            I'm an undergraduate student at Indiana University's Luddy School of Informatics for Media Arts and 
            Science, specializing in a web design and development degree. As a Web Developer, my programming skills 
            include Javascript, PHP, React, and Next, along with experience using design softwares to create interactive
            prototypes. In my projects, I've developed dynamic and responsive web applications featuring CRUD functionality,
            MVC architecture, MySQL database management, and user authentication. I've incorporated libraries such as SaSS 
            and Bootstrap to effectively style these applications. 
            </p>
          </div>
        </div>
    </main>
  );
}