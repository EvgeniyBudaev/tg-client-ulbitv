import {useEffect} from "react";
import {Header} from "./components/Header/Header";
import './App.css';

function App() {

    useEffect(() => {
        tg.ready(); // ready сигнализирует, что приложение полностью проинициализировалось и его можно отрисовывать
    }, [tg]);

    return (
        <div className="App">
            Hello World
            <Header/>
        </div>
    );
}

export default App;
