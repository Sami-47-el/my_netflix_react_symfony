import {useParams} from "react-router-dom";

export function Show(){
    const params = useParams()
    return <h1>ceci est la page du show numéro : {params.id}</h1>
}