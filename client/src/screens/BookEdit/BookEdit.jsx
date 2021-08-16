import { useState, useEffect } from "react";

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
}