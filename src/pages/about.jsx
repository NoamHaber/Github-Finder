
const aboutTitle = "This is the github finder app";
const aboutDescription=`
What you are viewing now is my first web application written in the react framework.
The app is a 'search and view' platform to view github profiles.
the architecture and many of the design ideas came from brad traversary on his Udemy course
'React Front To Back 2022', which i very much reccomend. for any feedback please contact me!
you can search contact information on this app under NoamHaber.
`;


function About()
{
    return(
        <div id="about-container" className="main-container">
            <div className="body-text about-headline">
                {aboutTitle}
            </div>
            <div className="body-text about-text">
                {aboutDescription}
            </div>
        </div>
    )
}

export default About


      