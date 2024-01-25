import {useEffect} from "react";
import {Header} from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import './App.css';

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        console.log("tg: ", tg);
        tg.ready(); // ready сигнализирует, что приложение полностью проинициализировалось и его можно отрисовывать
    }, [tg]);

    return (
        <div className="App">
            Hello World
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
