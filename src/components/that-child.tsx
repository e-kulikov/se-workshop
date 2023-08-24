import {Person} from "../App";
import {ErrorMessage} from "./error-message";

interface ThatChildProps {
    person: Person
}
export const ThatChild = ({ person: { age } }: ThatChildProps) => {
    return <div>
        <p>Your age is: {age}</p>
        <ErrorMessage age={age} />
    </div>
}
