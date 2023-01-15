import React, { Fragment,  useState } from 'react';
import { useGetGamesByTokenQuery, useLazyGetGamesByTokenQuery } from '../store/service/gamesApi';
import { SteamIcon } from "../media/SteamIcon";
import { SearchForm } from "../UI/SearchForm";
import { SortComponent } from "../UI/SortComponent";
import { Select } from "../UI/Select";
import { SearchButtons } from "../UI/buttons/SearchButtons";
import { GameCard } from "../components/GameCard";
import { IGameInfoData } from "../modules/module";
import { WrapperSection } from "../layout/WrapperSection";
import './HomePage.css';


export function HomePage() {
    const [ searchGame, setSearchGame ] = useState<string>("");
    const [ selectGames, setSelectGames ] = useState<string>("");
    const [ sortGames, setSortGames] = useState<string>("")
    const [ currentPage, setCurrentPage ] = useState<string>('1')
    const { data, isLoading, error } = useGetGamesByTokenQuery(currentPage);
    const [fetchGames, { data:lazyData, isLoading: lazyLoading }] = useLazyGetGamesByTokenQuery();
    let gamesData:IGameInfoData[] = structuredClone(data!);
    let pagArr = ["1","2","3","4","5"];

    const paginationHandler = (id: string) => {
        setCurrentPage(id)
        fetchGames(id)
    }

    if (lazyData && !lazyLoading) {
        gamesData = structuredClone(lazyData)
    }

    if(gamesData && searchGame) {
        gamesData = gamesData!.filter(item => item.title.toLowerCase().includes(searchGame))
    }

    if(selectGames === "price") {
        gamesData = gamesData!.reduce<IGameInfoData[]>((accum:IGameInfoData[], item:IGameInfoData): IGameInfoData[] => {
            item.numberPrice = parseFloat(item.price.toString().trim());
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
        gamesData = gamesData!.reduce<IGameInfoData[]>((accum:IGameInfoData[], item:IGameInfoData): IGameInfoData[] => {
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

    if(sortGames === "lower" && selectGames === "price") {
        gamesData = gamesData!.reduce<IGameInfoData[]>((accum:IGameInfoData[], item:IGameInfoData): IGameInfoData[] => {
            item.numberPrice = parseFloat(item.price.toString().trim());
            if(Number.isNaN(item.numberPrice)) {
                item.numberPrice = 0;
                accum.push(item)
            }
            else accum.push(item);
            accum.sort((a:IGameInfoData, b:IGameInfoData) => a.numberPrice! - b.numberPrice!);
            return accum
        },[])
    }

    if(sortGames === "lower" && selectGames === "publishDate") {
        gamesData = gamesData!.reduce<IGameInfoData[]>((accum:IGameInfoData[], item:IGameInfoData): IGameInfoData[] => {
            let releasedDateValue = new Date(item.released).toString()
            item.releasedDate = Date.parse(releasedDateValue);
            if(Number.isNaN(item.releasedDate)){
                item.releasedDate = 0
                accum.push(item)
            }
            else accum.push(item)
            accum.sort((a:IGameInfoData,b:IGameInfoData) => a.releasedDate! - b.releasedDate!)
            return accum
        },[])
    }

    return (
        <Fragment>
        <WrapperSection>
            <div className="search-container">
                <SteamIcon />
                <SearchForm searchFormGame={ setSearchGame } inputType="text" inputValue={searchGame} />
                <SortComponent sortGameOrder={ setSortGames }/>
                <Select selectGameState={ setSelectGames } />
                <SearchButtons />
            </div>
            { isLoading && <p style={{color: "red"}}>Loading...</p> }
            { gamesData &&
                ( <div className="card-list_container">
                    { gamesData!.map(item =>
                        <GameCard
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            released={item.released}
                            image={item.imgUrl}
                        />)
                    }
                </div> )
            }
            { (!isLoading && gamesData.length === 0) && <p className="card-list__empty">
                No Games with this name, try another one</p> }
            <div className="pagination_container">
                { pagArr.map(item => <p
                    key={item}
                    className="pagination_numbers"
                    id={item}
                    onClick={e => paginationHandler(e.currentTarget.id)}
                >{item}</p>)}
            </div>
        </WrapperSection>
        </Fragment>
    );
}