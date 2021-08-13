import { Card, Container } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container>
            <h2>Below is a list of my selected projects</h2>
            <Card>
            <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/2125625.pdf">
                <h1>Drone Wars</h1>
            </a>
            </Card>

            <a href="https://healu.netlify.app/home">
                <h1>Community Table</h1>
            </a>
            <a href="https://velocity-coins.netlify.app/">
                <h1>Velocity</h1>
            </a>
            <a href="https://healu.netlify.app/home">
                <h1>Heal U</h1>
            </a>
        </Container>

    )
}

export default Projects;