import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';
import healU from '../Projects/images/heal-u.png';
import communityTable from '../Projects/images/community-table.png';
import droneWars from '../Projects/images/drone-wars.png';
import valueCoin from '../Projects/images/value-coin.png';
/*
<em><p>Trust in your teammates and optimize your particular strengths</p></em>
<em><p>Apply first principles thinking, rather than relying on past archetypal models
</p></em>
<em>
<p>
Build and scale your project quickly; not every decision can warrant or even afford endless contemplation.
There are not necessarily right or wrong answers to every problem, merely tradeoffs we must weigh
and decide on the least-worst option that will allow us to sleep at night.
</p>
</em>
*/

const Projects = () => {
    return (
        <Container>
            <h1>Selected Projects</h1>
            <Col className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h3>Drone Wars</h3>
                        
                        <h4><a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/2125625.pdf"><Card.Img src={droneWars} height="650" width="100px" style={{margin: "20px", padding: "60px", marginTop: "-40px", marginBottom: "-10px"}}/></a></h4>
                        <p style={{marginTop: "-40px"}}>
                            Drone Wars is a project I completed as part of a 3-person team for Columbia University's mathematics club over 72 hours
                            as part of a competition in the International Mathematical Contest in Modeling. We received honorable mention in this category,
                            one of only half a dozen United States teams to receive the honor out of thousands of entrants.
                            The paper lays out a drone implementation program for Victoria, Australia to combat the growth of 
                            wildfires in the region. 
                        </p>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h3>Community Table</h3>
                        
                        <><h4><a href="https://community-table.netlify.app"><Image src={communityTable} height="450" width="600" style={{margin: "20px"}}/></a></h4></>
                        <p>Community Table seeks to rethink how organizations manage food waste by optimizing donations according to 
                            principles in Probability Theory and Tax Law. Namely, the expected value of the food is calculated so that 
                            food will be donated as soon as the food's expected value is less or equal to than its price price multiplied by the tax 
                            deduction percentage.
                            
                        </p>
                        <a href="https://github.com/robisonJohn/Community-Table/blob/development/README.md"><Button variant="dark">GitHub</Button></a>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h3>ValueCoin</h3>
                        
                        <h4><a href="https://velocity-coins.netlify.app/"><Image src={valueCoin} height="450" width="600" style={{margin: "20px"}}/></a></h4>
                        
                        <p>ValueCoin builds out Key Performance Indicators (KPIs) to compare the social and financial performance of a cryptocurrency
                            in order to enable the investor to determine which investments possess intrinsic value (according to the 
                            tautological framework of Value Investing described by David Dodd and Benjamin Graham in Security Analysis).
                            
                            
                        </p>
                        <a href="https://github.com/robisonJohn/ValueCoin"><Button variant="dark">GitHub</Button></a>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px", marginBottom: "50px"}}>
                        <h3>Heal U</h3>
                        <h4><a href="https://healu.netlify.app"><Image src={healU} height="450" width="600" style={{margin: "20px"}}/></a></h4>

                        <p>
                            Heal U enables the user to enter emotional data (according to key principles described by Abraham Maslow and other major thinkers 
                            in the field) to allow tracking of emotional data over time and thereby measure emotional fulfillment on a relative scale.
                            
                            
                            
                        </p>
                        <a href="https://github.com/robisonJohn/Heal-U-Version-Two"><Button variant="dark">GitHub</Button></a>
                    </Card>
                </Row>
            </Col>

        </Container>

    )
}

export default Projects;