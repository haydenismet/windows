import React from "react";

function About() {
  return (
    <>
      <div className="about">
        <ul className="tree-view">
          <li>
            <details>
              <summary>Personal Statement</summary>
              <ul>
                <li>
                  <li>
                    Personal Statement. Having originally studied Digital Media
                    Technology BSc (1st Class Honours) I began my career in
                    print and digital, accumulating a wide range of experience
                    across multiple platforms which I have thoroughly enjoyed.
                  </li>
                  <li>
                    However, my passion has always been front end development
                    and user interface design. I have worked with a diverse
                    range of clients to develop and deliver digital products,
                    incorporating both my design and development skills. I find
                    process driven digital work which will serve a purpose or
                    end goal to the user very rewarding.
                  </li>
                  <li>
                    I am constantly keeping up to date with digital technologies
                    and trends, whether that be through following technical
                    articles online, or via independent training/learning. In
                    all of my roles I have been required to develop
                    relationships both internally and externally - with
                    stakeholders, senior management and clients.
                  </li>
                </li>
              </ul>
            </details>
            <details>
              <summary>Work Experience</summary>
              <ul>
                <li>
                  <details>
                    <summary>Amigo Technology Limited</summary>
                    <ul>
                      <li>Amigo Technology Limited</li>
                      <li>Software Developer</li> <li>March 2020 - Present</li>
                      <li>
                        Amigo is a low code platform for changing websites
                        without changing underlying infrastructure or
                        interrupting an internal roadmap. As a start up I have
                        gained experience in various roles, both as a Delivery
                        Team Lead line managing (both technically and
                        personally) as well as a Software Developer.
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>University Of Birmingham</summary>
                    <ul>
                      <li>University of Birmingham</li>
                      <li>Design Co-ordinator</li>
                      <li>January 2015 - March 2020</li>
                      <li>
                        A charity and the students union for more than 34,000
                        students. Responsible for rolling out digital strategy,
                        design & development as well as the execution of all
                        marketing materials across the Guild of Students at the
                        University of Birmingham.
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Spark44</summary>
                    <ul>
                      <li>Spark44</li>
                      <li>Asset Executive</li>
                      <li>August 2013 - January 2015</li>
                      <li>
                        Managed all photography, CGI & videography across
                        ßaguars 32 market sites. Ensured all assets met style
                        guidelines and were delivered on time. Responsible for
                        basic & concept retouching, mood board concepts & motion
                        graphics concepts.
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}
export default About;
