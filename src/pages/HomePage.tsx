import React, {Fragment, useState} from 'react';
import { useGetGamesByTokenQuery } from '../store/service/gamesApi';
import {SteamIcon} from "../media/SteamIcon";
import {SearchForm} from "../UI/SearchForm";
import {SortIconComponent} from "../UI/SortIconComponent";
import {Select} from "../UI/Select";
import {SearchButtons} from "../UI/SearchButtons";
import './HomePage.css';


export function HomePage() {
    const [searchGame, setSearchGame] = useState<string>("");
    const { data:gamesData, isLoading, error } = useGetGamesByTokenQuery("");
    let searchGamesFilter:any[] = [];

    if(gamesData) {
        searchGamesFilter = gamesData!.filter(item => item.title.toLowerCase().includes(searchGame))
    }

    return (
        <Fragment>
        <section className="wrapper">
            <div className="container_nav">
                <SteamIcon />
                <SearchForm searchGame={setSearchGame} inputType="text" inputValue={searchGame}/>
                <SortIconComponent />
                <Select />
                <SearchButtons />
            </div>
            {isLoading && <p style={{color: "red"}}>Loading...</p>}
            {gamesData && searchGamesFilter.map(item => <p key={item.appId} style={{color:"red"}}>{item.title}</p>)}
        </section>
        </Fragment>
    );
}