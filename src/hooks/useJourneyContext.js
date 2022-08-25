import { useContext } from "react";
import { JourneyContext } from "../context/JourneyContext";

export default function useJourneyContext(){
    const context = useContext(JourneyContext)

    if(!context){
        throw new Error('Journey context not found!')
    }

    return context
}