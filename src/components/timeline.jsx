import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Professional Experience <span>2019 - Present</span>
                        </h2>
                        <p>
                          I am currently a Frontend Developer for Muster where I
                          am developing the social meetup mobile application
                          using React Native for the Android and iOS Platform. I
                          have been migrating the entire existing codebase from
                          the Frontend and Backend from JavaScript to TypeScript
                          for further development. I am now working on multiple
                          features across many issues covered throughout the
                          Sprint Board engaging in frequent pair programming
                          reviews. I am also simultaneously integrating the
                          Frontend to work with the Postgres Relational
                          Database, GraphQL and the Apollo server for the
                          Backend.
                        </p>
                        <p>
                          I was also a Web Developer for Platute where I was
                          developing the professional commercial Platute website
                          based on Adobe XD designs using the MERN Stack. I also
                          implemented 20% of the administrative console of an
                          instantaneous location-based on-demand tutoring
                          marketplace. I also created the NodeJS backend with
                          Express that handles 15% of the REST API requests from
                          the React frontend of the admin panel and I used
                          MongoDB to store the dozens of tutors and student
                          users of the application into the cloud database.
                        </p>
                        <p>
                          I was previously a Mobile Applications Developer for
                          EVisuals during the 2019-2020 Australian Summer Period
                          where I created a cross-platform mobile application
                          using Xamarin to improve firefighting operations
                          efficiency for 10’000 people having implemented a
                          database that inputs 35 building information variables
                          from the Facility Manager for the NSW Fire Brigade.
                          Thus, I developed 10 application pages and utilised
                          Microsoft Azure for hosting the mobile application’s
                          server and database using SQL and LINQ.
                        </p>
                        <p>
                          And I was a Full-Stack Developer for Bundy in 2019
                          where I developed an application using Android Studios
                          that has helped over 100 users in businesses to manage
                          their workforce. During my time there I implemented
                          20% of the Android frontend features for the
                          development sprints using the Agile processes.
                          Throughout my employment I worked with JIRA for
                          multiple ticket tracking and project management whilst
                          using Git for code management.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Leadership <span>2016 - Present</span>
                        </h2>
                        <p>
                          I have had and am currently holding leadership
                          positions throughout my education in University. I am
                          currently the 2020 Student Representative for the
                          School of Computer Science and Engineering where I am
                          representing 3000 students studying a Computer Science
                          and Engineering degree to address their grievances and
                          questions. I am a representative on the School’s
                          Teaching Committee and conducting surveys about
                          courses run by the academic staff running monthly
                          meetings with the Head of School and Executive to
                          provide updates and feedback from the students.
                        </p>
                        <p>
                          I was the 2019 Executive for the Computer Science and
                          Engineering Society at UNSW serving as the Arc
                          Delegate where I ensured that CSESoc’s aims for 2759
                          members were being fulfilled through the activities of
                          the Society’s working groups. Whilst being a senior
                          Executive of the Society, I oversaw 15 Directors in
                          Careers, Marketing and Media, Social and Development
                          Teams in running their events. I also liaised with and
                          obtained the max funding of $8800 through Arc, the
                          UNSW umbrella for all University clubs and societies.
                          Throughout the year I documented and kept 40 records
                          of all CSESoc’s activities and events to obtain
                          funding grants. And I helped in the planning and
                          running of the 25 members team of CSESoc's Orientation
                          Week and First Year Camp reaching out to thousands of
                          first-year students.
                        </p>
                        <p>
                          And I was the 2016-2017 President of the Society of
                          Asian Scientists and Engineers - University of South
                          Florida Chapter where I oversaw meetings with 13
                          officers of the Executive Board to plan and organise
                          events for the Chapter. I also coordinated
                          communications between the 3 Regional Managers and the
                          University of the South Florida Chapter. Furthermore,
                          I facilitated weekly events to develop the
                          professionalism, academic and networking skills of our
                          200 members and increased chapter membership by over
                          120%, laying the foundations to host the SASE
                          Southeast Regional Conference 2018.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Education <span>2007 - Present</span>
                        </h2>
                        <p>
                          I completed my High School Education at St. Aloysius’
                          College in Milson’s Point which I started in Grade 5
                          in 2007, finishing as part of the Class of 2014. I
                          then went to study for my first two years of my
                          undergraduate education at the University of South
                          Florida studying a Computer Engineering Degree from
                          2015-2017. I then took a gap year to travel throughout
                          Southeast Asia before returning in 2018 to finish my
                          Computer Science Degree at the University of New South
                          Wales where I will be graduating in early 2021.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
