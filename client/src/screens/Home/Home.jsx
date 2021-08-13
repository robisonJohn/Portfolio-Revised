import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
    return (
        <Container id="primary-container">
            <Container>
                <Col>
                    <Row>
                        <Col>
                            <Image src="https://gocolumbialions.com/images/2017/9/21/BFVHOAVAUFXMKGK.20170921192451.JPG" width="225" height="250" alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Image src="https://www.clipartmax.com/png/middle/308-3085721_resume-png-clipart-my-resume-icon-png.png" height="100" width="100" alt=""/></Col>
                        <Col><Image src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png" height="100" width="100" alt=""/></Col>
                    </Row>
                    <Row>
                        <Col><Image src="data:image/png;base64,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" height="100" width="100" alt=""/></Col>
                        <Col><Image src="data:image/png;base64,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" height="100" width="100" alt=""/></Col>
                    </Row>
                </Col>
            </Container>

            <div id="text-container">
                <h1>Welcome!</h1>
                <p>
                    My name is John Robison, a second semester student-athlete at Columbia University 
                    studying mathematics and statistics. I currently work for the Blockchain Research 
                    Institute where I am writing an analysis of the DeFi space for C-Suite executives.
                    Prior to the BRI, I worked at NASA Goddard Space and Flight Center in their 
                    Cryospheric Sciences division as a researcher where I was focusing on using methods 
                    in statistical machine learning methods to identify error between satellite data measurements 
                    and citizen scientist data measurements.
                </p>
                <p>
                    My original goal in life was to pursue a PhD in either mathematics or statistics. However, after working at NASA for
                    the summer, I realized that although such work is interesting and rigorous, it lacked a degree of transcendental meaning 
                    and purpose that I desperately yearned for. I believe that there are so many pressing problems left to solve in the world,
                    and I don’t want to relegate myself to the lifestyle of an academic when I could instead play a role in solving these 
                    problems. Therefore, I enrolled in a Software Engineering Bootcamp at General Assembly this past summer (in addition to 
                    my work at the BRI) and have sought to convert my skills in mathematics, statistics, and data science into understanding 
                    how to build ideas into solutions for concrete human problems.
                </p>

                <p>
                    However, it is not enough to simply have the answers to current problems; it is equally (if not more) important to also 
                    know how to ask the right questions and to possess the will to act on these intuitions. It is for these reasons that I am 
                    extremely passionate about the intersection of technology and entrepreneurship. I regard technology as the physical 
                    manifestation of solutions to problems in moral philosophy and entrepreneurship as the vehicle through which a system of 
                    the world based on this moral philosophy may be implemented.
                </p>

                <p>
                    If you’re interested in my work and project experience, please see my resume and GitHub. If you are interested in 
                    connecting with me further, please connect with me on LinkedIn. If you wish to contact me directly, feel free to email 
                    me directly.
                </p>

                <p>
                    If you’re interested in learning more about me, please feel free to browse this portfolio website. I have included my 
                    recent projects,  writing samples, and favorite books for your perusal. I hope this website provides meaningful feedback 
                    into my temperament and character. Finally, I hope you find this virtual interaction with me both meaningful and impactful.
                </p>

                <p>
                    Happy Browsing,
                </p>

                <p>
                    John Robison
                </p>

            </div>
        </Container>


    )
}

export default Home;