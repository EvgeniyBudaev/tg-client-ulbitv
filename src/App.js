import {useEffect} from "react";
import './App.css';

function App() {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready(); // ready сигнализирует, что приложение полностью проинициализировалось и его можно отрисовывать
    }, [tg]);

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
