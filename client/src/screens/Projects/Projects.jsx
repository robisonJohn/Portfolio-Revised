import { Card, Container, Row, Col } from 'react-bootstrap';
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
            <h2>Selected Projects</h2>
            <p>The following projects are </p>
            <Col className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h1>Drone Wars</h1>
                        <h4><a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/2125625.pdf">Paper</a></h4>
                        <p>
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
                        <h1>Community Table</h1>
                        <><h4><a href="https://healu.netlify.app/home">Website</a></h4></>
                        <><h4><a href="https://github.com/robisonJohn/Community-Table">GitHub</a></h4></>
                        <p>Community Table seeks to rethink how organizations manage food waste by optimizing donations according to 
                            principles in Probability Theory and Tax Law. For a more detailed description of how Community Table works, please refer to 
                            the readMe <a href="https://github.com/robisonJohn/Community-Table/blob/development/README.md">here</a>
                        </p>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h1>ValueCoin</h1>
                        <h4><a href="https://velocity-coins.netlify.app/">Website</a></h4>
                        <h4><a href="https://github.com/robisonJohn/ValueCoin">GitHub</a></h4>
                        <p>ValueCoin builds out Key Performance Indicators (KPIs) to compare the social and financial performance of a cryptocurrency
                            in order to enable the investor to determine which investments possess intrinsic value (according to the 
                            tautological framework of Value Investing described by David Dodd and Benjamin Graham in Security Analysis).
                        </p>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h1>Heal U</h1>
                        <h4><a href="https://healu.netlify.app/home">Website</a></h4>
                        <h4><a href="https://github.com/robisonJohn/Heal-U-Version-Two">GitHub</a></h4>
                        <p>
                            Heal U enables the user to enter emotional data (according to key principles described by Abraham Maslow and other major thinkers 
                            in the field) to allow tracking of emotional data over time and thereby measure emotional fulfillment on a relative scale.
                        </p>
                    </Card>
                </Row>
            </Col>

        </Container>

    )
}

export default Projects;