import Row from "./components/Row";
import request from "./routes/request";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Hello there. Netflix and chill ...</h1>
            <Row
                title="NETFLIX ORIGINALS"
                fetchURL={request.fetchNetflixOriginals}
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
}

export default App;
