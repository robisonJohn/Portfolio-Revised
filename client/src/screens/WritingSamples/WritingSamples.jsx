import { Container, Card, Row, Col } from 'react-bootstrap';
import origin from './images/origin-of-evil.png';
import primes from './images/primes-and-pop-art.png';
import dragons from './images/rational-dragons.png';

const WritingSamples = () => {
    return (
        <Container>
            <h1>Below is a list of my selected writing samples: </h1>
            <Col className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h3>Rational Dragons</h3>
                        <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/MCM_Final_Assignment.pdf"><Card.Img src={dragons} height="700" width="100px" style={{margin: "20px", padding: "60px", marginTop: "-40px", marginBottom: "-40px"}}/></a>
                        <p>
                            What if dragons from Game of Thrones existed on Earth? This paper seeks to examine this question under an initial assumption that dragons 
                            are in fact rational agents that seek to optimize their individual utility by avoiding other dragons and instead maximizing 
                            their comparative advantage within a selective niche, thereby minimizing the energy wasted on needless competition. 
                        </p>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px"}}>
                        <h3>Prime Numbers and Post-Modern Art</h3>
                        <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/Prime%20Numbers%20and%20Post-Modern%20Art.pdf"><Card.Img src={primes} height="700" width="100px" style={{margin: "20px", padding: "60px", marginTop: "-40px", marginBottom: "-40px"}}/></a>
                        <p>
                            This paper offers an exploration into a work of art by German painter Rune Mields that models the Sieve of Erastothenes and 
                            debates whether it should be included into 
                            the Art Humanities curriculum at Columbia. By comparing its style to that of Andy Warhol and the Pop Art movement that is 
                            fundamentally predicated on post-modernism, I argue that this work would offer a useful juxtaposition in the quest to 
                            answer two questions: What is the nature of truth? And is all creativity ultimately derivative (i.e. derived from a deterministic 
                            source rather than offering a truly novel medium through which one may interpret the world)?
                            Rather than offering answers to these questions, the paper argues that Rune Mields work would provoke these questions 
                            from Warhol's work.
                        </p>
                    </Card>
                </Row>
                <Row className="justify-content-md-center">
                    <Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px", width: "700px", marginBottom: "100px"}}>
                        <h3>The Fall of Man: A Critical Analysis into the Origins of Evil</h3>
                        <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/The%20Fall%20of%20Man-2.pdf"><Card.Img src={origin} height="700" width="100px" style={{margin: "20px", padding: "60px", marginTop: "-40px", marginBottom: "-40px"}}/></a>
                        <p>
                            What is the origin of evil? Are humans born evil (nature) or does evil derive from external sources (nurture)? In this essay,
                            I examine three distinct works in cinema (Peppermint Candy, Star Wars, and Dark) that delve deeply into the origin story of 
                            antagonists that began as heroes. The paper argues that the most interesting protagonists, at least in cinema, are heroes who 
                            experience the three fundamental losses of innocence, naivety, and life itself; and thereby enter into a state of "death before death"
                            in which the body is alive but the soul is dead. Within this chasm that lacks either purpose and truth, evil arises and flourishes and
                            truly dynamic villains are incarnated.
                        </p>
                    </Card>
                </Row>
            </Col>


        </Container>
    )
}
export default WritingSamples;