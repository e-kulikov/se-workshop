import {Person} from "../App";
import {ThatChild} from "./that-child";

interface ComponentWithChildProps {
    person: Person;
    updatePersonAge: (age: number) => void;
}
export const ComponentWithChild = ({person, updatePersonAge}: ComponentWithChildProps) => <>
    <input type="text" placeholder="enter your age" onChange={e => updatePersonAge(+e.target.value)} />
    <ThatChild person={person} />
</>
