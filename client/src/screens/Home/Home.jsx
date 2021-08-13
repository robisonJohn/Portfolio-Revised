import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container id="primary-container">
            <Container>
                <Row>
                        <Col>
                            <Card style={{width: '13rem', marginTop: '20px', marginLeft: '150px', marginRight: '100px'}}><Card.Img src="https://gocolumbialions.com/images/2017/9/21/BFVHOAVAUFXMKGK.20170921192451.JPG" width="225" height="250" alt=""/></Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '7rem', marginLeft: '25px', marginTop: '85px'}}><a href="https://previews.123rf.com/images/hironicons/hironicons1912/hironicons191201172/136455877-cv-resume-icon.jpg"><Card.Img src="https://static.thenounproject.com/png/543772-200.png" height="90" width="100" alt=""/></a></Card>
                        </Col>
                        <Col><a href="https://www.linkedin.com/in/john-robison-a3b649217/"><Image src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png" height="100" width="100" alt="" style={{ marginTop: '80px'}}/></a></Col>
                        <Col><a href="https://github.com/robisonJohn"><Image src="https://d1158lcjk2f3km.cloudfront.net/assets.00/asstziwq0a1i" height="100" width="100" alt="" style={{ marginTop: '75px'}}/></a></Col>
                    
                </Row>
            </Container>

            <Container id="text-container">
                <h1>Welcome!</h1>
                <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>
                    My name is John Robison, a second semester student-athlete at Columbia University 
                    studying mathematics and statistics. I currently work for the Blockchain Research 
                    Institute where I am writing an analysis of the DeFi space for C-Suite executives.
                    Prior to the BRI, I worked at NASA Goddard Space and Flight Center in their 
                    Cryospheric Sciences division as a researcher where I was focusing on using methods 
                    in statistical machine learning to identify error between satellite data measurements
                    (gathered by a laser altimeter) and citizen scientist data observations (gathered by a camera-reliant smart phone application).
                </Card>
                <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>
                    My original goal in life was to pursue a PhD in either mathematics or statistics. However, after working at NASA for
                    the summer, I realized that although such work is interesting and rigorous, it lacked a degree of transcendental meaning 
                    and purpose that I desperately yearned for. I believe that there are so many pressing problems left to solve in the world,
                    and I don’t want to relegate myself to the lifestyle of an academic when I could instead play a role in solving these 
                    problems. Therefore, I enrolled in a Software Engineering Bootcamp at General Assembly this past summer (in addition to 
                    my work at the BRI) and have sought to convert my skills in mathematics, statistics, and data science into understanding 
                    how to build ideas into solutions for concrete human problems.
                </Card>

                <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>
                    However, it is not enough to simply have the answers to current problems; it is equally (if not more) important to also 
                    know how to ask the right questions and to possess the will to act on these intuitions. It is for these reasons that I am 
                    extremely passionate about the intersection of technology and entrepreneurship. I regard technology as the physical 
                    manifestation of solutions to problems in moral philosophy and entrepreneurship as the vehicle through which a system of 
                    the world based on this moral philosophy may be implemented.
                </Card>

                <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>
                    If you’re interested in my work and project experience, please see my resume and GitHub. If you are interested in 
                    connecting with me further, please feel free to send me an invitation to connect on LinkedIn.
                </Card>

                <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>
                    If you’re interested in learning more about me, this website includes 
                    recent projects,  writing samples, and favorite books for your perusal. I hope this website provides meaningful feedback 
                    into my temperament and character.
                </Card>

                <p>
                    <em>Happy Browsing,</em>
                </p>

                <p>
                    <em>John Robison</em>
                </p>

            </Container>
        </Container>


    )
}

export default Home;