import React, { FormEvent} from 'react';
import { MagnifyingLensIcon }  from "../media/MagnifyingLensIcon";
import './SearchForm.css'

interface ISearchProps {
    searchGame: (text:string) => void,
    inputType: string,
    inputValue: string
}

export function SearchForm(props: ISearchProps):JSX.Element {
    const { searchGame, inputType, inputValue } = props;

    const formHandler = (event: FormEvent) => {
        event.preventDefault()
        searchGame("")
    }

    return (
        <form className="form_search" onSubmit={formHandler}>
            <input
                className="input_search"
                value={inputValue}
                type={`${inputType}`}
                onChange={e => searchGame(e.target.value.trim())}
            />
            <button className="btn_search" type="submit">
                <MagnifyingLensIcon />
            </button>
        </form>
    );
}