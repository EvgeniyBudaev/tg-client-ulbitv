import React, {useEffect} from 'react';
import {Button} from "../Button/Button";
import "./Header.css";

export const Header = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        console.log("tg: ", tg);
    }, [tg]);


    const onClose = () => {
        tg.close();
    };

    return (
        <div className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">{tg.initDataUnsafe?.user?.usernmae}</span>
        </div>
    );
};
