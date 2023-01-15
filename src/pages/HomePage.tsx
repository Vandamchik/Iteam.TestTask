import React, { Fragment,  useState } from 'react';
import { useGetGamesByTokenQuery, useLazyGetGamesByTokenQuery } from '../store/service/gamesApi';
import { SteamIcon } from "../media/SteamIcon";
import { SearchForm } from "../UI/SearchForm";
import { SortIconComponent } from "../UI/SortIconComponent";
import { Select } from "../UI/Select";
import { SearchButtons } from "../UI/SearchButtons";
import { GameCard } from "../components/GameCard";
import './HomePage.css';
import { IGameInfoData } from "../modules/module";


export function HomePage() {
    const [searchGame, setSearchGame] = useState<string>("");
    const [selectGames, setSelectGames] = useState<string>("");
    const { data, isLoading, error } = useGetGamesByTokenQuery("");
    let gamesData:IGameInfoData[] = structuredClone(data!)
    // const [fetchGamesData,{ data:gamesData, isLoading, error } ] = useLazyGetGamesByTokenQuery()


    if(gamesData && searchGame) {
        gamesData = gamesData!.filter(item => item.title.toLowerCase().includes(searchGame))
    }

    if(selectGames === "price") {
        gamesData = gamesData!.reduce<IGameInfoData[]>((accum:IGameInfoData[], item:IGameInfoData): IGameInfoData[] => {
            let numberValue = parseFloat(item.price.toString().trim());
            item.numberPrice = numberValue;
            if(Number.isNaN(item.numberPrice)) {
                item.numberPrice = 0;
                accum.push(item)
            }
            else accum.push(item);
            accum.sort((a:IGameInfoData, b:IGameInfoData) => b.numberPrice! - a.numberPrice!);
            return accum
        },[])
    }

    if (selectGames === "publishDate") {
        gamesData = gamesData!.reduce<IGameInfoData[]>((accum:any[], item:any): any[] => {
            let releasedDateValue = new Date(item.released).toString()
            item.releasedDate = Date.parse(releasedDateValue);
            if(Number.isNaN(item.releasedDate)){
                item.releasedDate = 0
                accum.push(item)
            }
            else accum.push(item)
            accum.sort((a:IGameInfoData,b:IGameInfoData) => b.releasedDate! - a.releasedDate!)
            return accum
        },[])
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