import { Card } from 'react-bootstrap';

const WritingSamples = () => {
    return (
        <div>
            <h1>Below is a list of my selected writing samples: </h1>
            <Card>
                <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/MCM_Final_Assignment.pdf">
                    <h2>Rational Dragons</h2>
                </a>
            </Card>

            <Card>
                <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/Prime%20Numbers%20and%20Post-Modern%20Art.pdf">
                    <h2>Prime Numbers and Post-Modern Art</h2>
                </a>
            </Card>

            <Card>
                <a href="https://github.com/robisonJohn/Portfolio-Revised/blob/main/The%20Fall%20of%20Man-2.pdf">
                    <h2>The Fall of Man: A Critical Analysis into the Origins of Evil</h2>
                </a>
            </Card>

        </div>
    )
}
export default WritingSamples;