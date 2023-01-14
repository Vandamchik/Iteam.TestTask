import React, { Fragment,  useState } from 'react';
import { useGetGamesByTokenQuery, useLazyGetGamesByTokenQuery } from '../store/service/gamesApi';
import { SteamIcon } from "../media/SteamIcon";
import { SearchForm } from "../UI/SearchForm";
import { SortIconComponent } from "../UI/SortIconComponent";
import { Select } from "../UI/Select";
import { SearchButtons } from "../UI/SearchButtons";
import { GameCard } from "../components/GameCard";
import './HomePage.css';


export function HomePage() {
    const [searchGame, setSearchGame] = useState<string>("");
    const [selectGames, setSelectGames] = useState<string>("");
    let { data:gamesData, isLoading, error } = useGetGamesByTokenQuery("");
    // const [fetchGamesData,{ data:gamesData, isLoading, error } ] = useLazyGetGamesByTokenQuery()
    let nowDate = new Date()


    if(selectGames === "price") console.log('price')

    if(selectGames === "publishDate") console.log('publishDate')

    if(gamesData && searchGame) {
        gamesData = gamesData!.filter(item => item.title.toLowerCase().includes(searchGame))
    }
    // if(gamesData && selectGames) {
    //     searchGamesFilter = gamesData!.filter(item => console.log(item))
    // }

    return (
        <Fragment>
        <section className="wrapper">
            <div className="container_nav">
                <SteamIcon />
                <SearchForm searchFormGame={setSearchGame} inputType="text" inputValue={searchGame} />
                <SortIconComponent />
                <Select selectGameState={setSelectGames} />
                <SearchButtons />
            </div>
            {isLoading && <p style={{color: "red"}}>Loading...</p>}
            {gamesData && ( <div className="card-list_container">
                        { gamesData!.map(item =>
                    <GameCard
                        key={item.title}
                        title={item.title}
                        price={item.price}
                        released={item.released}
                        image={item.imgUrl}
                    />) }
                </div> )
            }
        </section>
        </Fragment>
    );
}