import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {Form} from "./components/Form/Form";
import {Header} from "./components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";
import {useTelegram} from "./hooks/useTelegram";
import './App.css';


function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        console.log("tg: ", tg);
        console.log("initData: ", tg.initData);
        console.log("initDataUnsafe: ", tg.initDataUnsafe);
        console.log("user: ", tg.initDataUnsafe?.user);
        tg.ready(); // ready сигнализирует, что приложение полностью проинициализировалось и его можно отрисовывать
    }, [tg]);

    return (
        <div className="App">
            Hello World
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path="form" element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
