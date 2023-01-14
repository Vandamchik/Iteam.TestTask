import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit'


const actions = {
    // ...favoritesActions
}

export function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}