import { useState, useEffect } from "react";
import { getBook, updateBook } from "../../services/items";
import { useParams, Redirect, Link } from "react-router-dom";
import { Form, Image, Button, Container } from "react-bootstrap";

/*
const ItemEdit = (props) => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        review: "",
        img_url: "",
        publication_date: "",
        author: "",
        category: "",
        author_name: "",
        category_name: "",
    });

    const [isUpdated, setUpdated] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id);
            setBook(book);
        };
        fetchBook();
    }, [id]);

    const handleChange = (event) => {
        const { title, value } = event.target;
        setBook({
            ...book,
            [title]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updated = await updateBook(id, book);
        setUpdated(updated);
    };

    if (isUpdated) {
        return <Redirect to={`/books/${id}`}/>
    }

    return ()


}
*/