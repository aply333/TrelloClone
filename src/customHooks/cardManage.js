import {useState} from "react"

export function useCardState(cardgroup, update){
    const [result, setResult] = useState(cardgroup)

    function Test(){
        setResult(update)
    }

    return [result, Test]
}