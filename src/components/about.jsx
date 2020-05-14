import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a Computer Science student studying at the
                        University of New South Wales in Sydney, NSW, Australia
                        with a major specialisation in Artificial Intelligence
                        taking courses in Machine Learning, Computer Vision and
                        Knowledge Representation and Reasoning.
                      </p>
                      <p>
                        I love learning and exploring new technology platforms
                        outside my educational requirements as well as always
                        willing to learn more to become the best developer I can
                        be as an aspiring Software Engineer in my upcoming
                        professional careers.
                      </p>
                      <p>
                        My passion apart from programming is in leadership,
                        influencing positively a large group of people to get
                        things done where I am not too shy to go after what I
                        want in every aspect of my life. I also love playing
                        piano, guitar and singing as well as composing my own
                        music to readily perform to others!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites and applications using
                      HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB
                      and VueJS. I am currently a Web Developer for Platute
                      developing their professional website and administrative
                      console using MERN Stack
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Mobile Applications Development</h3>
                    <p>
                      I have developed professionally Mobile Applications for
                      Android using Java as a Full-Stack Developer for Bundy and
                      Cross-Platform Mobile Applications for Android and iOS
                      Platforms for EVisuals using Xamarin coding in C#, SQL and
                      XAML
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      Coming from a Computer Science background, I have a good
                      understanding of Data Structures & Algorithms having taken
                      courses in them and solving these problems in my spare
                      time using C, Java and Python
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
