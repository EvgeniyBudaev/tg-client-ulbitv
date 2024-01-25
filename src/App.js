import './App.css';
import {useEffect} from "react";

function App() {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready(); // ready сигнализирует, что приложение полностью проинициализировалось и его можно отрисовывать
    }, []);

    const onClose = () => {
        tg.close();
    };

  return (
    <div className="App">
      Hello World
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
