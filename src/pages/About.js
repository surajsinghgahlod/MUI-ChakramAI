import React from 'react'
import '../App.css'

const About = () => {
  return (
    <div>
          {/* <!-- ABOUT US SECTION  --> */}
    <section className="section-aboutUs" id="about-us">
        <div className="container">
            <div className="d-flex align-items-center justify-content-center text-center">
                <div className="section-heading-box">
                    <div className="section-heading py-3">About Us</div>
                    <div className="section-heading-content py-2">
                        About Chakram.Ai, why it exists, how are we going to help mankind Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Nullam sed consectetur quam, sed posuere purus.
                    </div>
                </div>
            </div>
            <div className="row about-row text-center">
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="about-box d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="about-box-img">
                            <img src="./assets/img/team-member.webp" alt="about-img" />
                        </div>
                        <div className="about-box-heading">
                            Mr John Doe
                        </div>
                        <div className="about-box-content">
                            The brain behhind Chakram.Ai, what’s your thought and where do you want to take it.
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
                    <div className="about-box d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="about-box-img">
                            <img src="./assets/img/team-member.webp" alt="about-img" />
                        </div>
                        <div className="about-box-heading">
                            Mr John Doe
                        </div>
                        <div className="about-box-content">
                            The brain behhind Chakram.Ai, what’s your thought and where do you want to take it.
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
                    <div className="about-box d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="about-box-img">
                            <img src="./assets/img/team-member.webp" alt="about-img" />
                        </div>
                        <div className="about-box-heading">
                            Mr John Doe
                        </div>
                        <div className="about-box-content">
                            The brain behhind Chakram.Ai, what’s your thought and where do you want to take it.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
