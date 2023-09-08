import {ChangeEventHandler, memo, useEffect} from "react";
import {Person} from "../App";
import {ThatChild} from "./that-child";

interface ComponentWithChildProps {
    personAge: Person['age'];
    updatePersonAge?: ChangeEventHandler<HTMLInputElement>
}
export const ComponentWithChild = // memo(
    ({personAge, updatePersonAge}: ComponentWithChildProps) => {
        return <>
            <input type="text" placeholder="enter your age" onChange={updatePersonAge} />
            <p>Your age: {personAge}</p>
        </>
    } /* ,
    (
        prevProps,
        nextProps
    ) => prevProps.person.age === nextProps.person.age
);
*/
