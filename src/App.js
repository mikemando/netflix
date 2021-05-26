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
        </div>
    );
}

export default App;
