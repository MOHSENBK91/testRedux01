import {ADDMOVIE , DELETMOVIE} from './action-types'
//import {}


export const newAddMovie = (data)=> {
    return{
   type : ADDMOVIE,
   payload:data

    }
} 

export const fonDELETMOVIE = (id)=> {
    return{
   type : DELETMOVIE,
   payload:id

    }
} 