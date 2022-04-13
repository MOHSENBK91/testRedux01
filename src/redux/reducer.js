import {ADDMOVIE , DELETMOVIE} from './action-types'
import Movies from '../data'

const initialState = {

    Movie : Movies,

}


export const movieReducer = (state = initialState , action) => {

    switch (action.type) {
        case ADDMOVIE: return {
            ...state,
            Movie: [...state.Movie, action.payload]
            
        } 
        case DELETMOVIE: 
        return {
            ...state,
            Movie: state.Movie.filter(el=> el.id != action.payload)
        }
        
    
        default: return state 
    }
}