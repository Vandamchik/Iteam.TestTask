import React, { FormEvent, useTransition } from 'react';
import { MagnifyingLensIcon }  from "../media/MagnifyingLensIcon";
import { ISearchProps } from "../modules/module";
import './SearchForm.css'


export function SearchForm(props: ISearchProps): JSX.Element {
    const {searchFormGame, inputType, inputValue} = props;
    const [isPending, startTransition] = useTransition();

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
                onChange={e => startTransition(() => searchFormGame(e.target.value.trim()))}
            />
            <button className="btn_search" type="submit">
                <MagnifyingLensIcon/>
            </button>
        </form>
    );
}