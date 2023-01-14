import React, { FormEvent} from 'react';
import { MagnifyingLensIcon }  from "../media/MagnifyingLensIcon";
import './SearchForm.css'

interface ISearchProps {
    searchFormGame: (text:string) => void,
    inputType: string,
    inputValue: string
}

export function SearchForm(props: ISearchProps):JSX.Element {
    const { searchFormGame, inputType, inputValue } = props;

    const formHandler = (event: FormEvent) => {
        event.preventDefault()
        searchFormGame("")
    }

    return (
        <form className="form_search" onSubmit={formHandler}>
            <input
                className="input_search"
                value={inputValue}
                type={`${inputType}`}
                onChange={e => searchFormGame(e.target.value.trim())}
            />
            <button className="btn_search" type="submit">
                <MagnifyingLensIcon />
            </button>
        </form>
    );
}