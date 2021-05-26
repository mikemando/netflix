import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../routes/axios";

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);

            setMovies(request.data.result);
            return request;
        };

        fetchData();
    }, [fetchURL]);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

Row.propTypes = {
    title: PropTypes.string.isRequired,
    fetchURL: PropTypes.string.isRequired,
};

Row.defaultProps = {
    title: "NETFLIX ORIGINALS",
};

export default Row;
