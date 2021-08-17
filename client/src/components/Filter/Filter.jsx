import { Form } from 'react-bootstrap';

function Filter(props) {

    const handleFilter = (event) => {
        props.handleFilter(event.target.value)
    }

    return (

        <Form className="filter-container" onSubmit={props.handleSubmit} style={{width: "200px", margin: "15px"}}>
        <Form.Select className="filter" onChange={handleFilter}>
            <option>&nbsp; FILTER BY: &nbsp;</option>
            <option className="option" value="Science Fiction">&nbsp; Science Fiction &nbsp;</option>
            <option className="option" value="Social Sciences">&nbsp; Social Sciences &nbsp;</option>
            <option className="option" value="Mathematics and Physics">&nbsp; Mathematics and Physics &nbsp;</option>
            <option className="option" value="Business">&nbsp; Business  &nbsp;</option>
            <option className="option" value="Computer Science">&nbsp; Computer Science  &nbsp;</option>
            <option className="option" value="Other Media Forms">&nbsp; Other Media Forms  &nbsp;</option>
        </Form.Select>
    </Form>
    )
}
/*
            <DropdownButton title="FILTER BY GENRE" style={{margin: "15px"}} variant="light" onSubmit={props.handleSubmit}>
                <Dropdown.Item href="#/science-fiction">Science Fiction</Dropdown.Item>
                <Dropdown.Item href="#/social-sciences">Social Sciences</Dropdown.Item>
                <Dropdown.Item href="#/mathematics-and-physics">Mathematics and Physics</Dropdown.Item>
                <Dropdown.Item href="#/business">Business</Dropdown.Item>
                <Dropdown.Item href="#/computer-science">Computer Science</Dropdown.Item>
                <Dropdown.Item href="#/alt-media">Other Media Forms</Dropdown.Item>
            </DropdownButton>
*/

export default Filter;