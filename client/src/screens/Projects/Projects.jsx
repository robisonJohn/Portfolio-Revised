import { Card, Container } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container>
            <h2>Below is a list of my selected projects</h2>
            <div>
                <h1>Drone Wars</h1>
                <h4><a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/2125625.pdf">Paper</a></h4>
                <p>
                    Drone Wars designs a drone implementation program for Victoria, Australia to combat the growth of 
                    wildfires in the region. This project was completed over the course of three days as part of a Columbia University team 
                    competing in the International Mathematical Contest in Modeling.
                </p>
            </div>

            <div>
                <h1>Community Table</h1>
                <><h4><a href="https://healu.netlify.app/home">Website</a></h4></>
                <><h4><a href="https://github.com/robisonJohn/Community-Table">GitHub</a></h4></>
                <p>Community Table seeks to rethink how organizations manage food waste by optimizing donations according to 
                    principles in Probability Theory and Tax Law. For a more detailed description of how Community Table works, please refer to 
                    the readMe <a href="https://github.com/robisonJohn/Community-Table/blob/development/README.md">here</a>
                </p>
            </div>

            <div>
                <h1>ValueCoin</h1>
                <h4><a href="https://velocity-coins.netlify.app/">Website</a></h4>
                <h4><a href="https://github.com/robisonJohn/ValueCoin">GitHub</a></h4>
                <p>ValueCoin builds out Key Performance Indicators (KPIs) to compare the social and financial strengths of a cryptocurrency
                    in order to enable the investor to determine which investments are fundamental value investments (according to the 
                    tautological framework of Value Investing described by David Dodd and Benjamin Graham in Security Analysis).
                </p>
            </div>

            <div>
                <h1>Heal U</h1>
                <h4><a href="https://healu.netlify.app/home">Website</a></h4>
                <h4><a href="https://github.com/robisonJohn/Heal-U-Version-Two">GitHub</a></h4>
                <p>
                    Heal U enables the user to enter emotional data (according to key principles laid out by Abraham Maslow and other major thinkers 
                    in the field) to allow tracking of emotional data over time and measure emotional fulfillment on a relative scale.
                </p>
            </div>
        </Container>

    )
}

export default Projects;