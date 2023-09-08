import {Person} from "../App";
import {ErrorMessage} from "./error-message";
import {useEffect} from "react";

interface ThatChildProps {
    personAge: Person['age']
}
export const ThatChild = ({ personAge }: ThatChildProps) => {
    useEffect(() => console.log('updating ThatChild'));
    return <div>
        {!personAge ? <p>Your age is: {personAge}</p> : <p>You didn't tell </p>}
    </div>
}
