import Row from "./components/Row";
import request from "./routes/request";
import Banner from "./components/Banner";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchURL={request.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchURL={request.fetchTrending} />
            <Row title="Top Rated" fetchURL={request.fetchTopRated} />
            <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
        </div>
    );
};

export default App;
