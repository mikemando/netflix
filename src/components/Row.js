import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../routes/axios";
import("../styles/Row.css");

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);

            setMovies(request.data.results);
            return request;
        };

        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        <img
                            className={`row__poster ${
                                isLargeRow && "row__posterLarge"
                            }`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    );
                })}
            </div>
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
