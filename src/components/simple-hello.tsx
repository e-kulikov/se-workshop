import {Person} from "../App";

interface SimpleHelloProps {
    person: Person
}

export const SimpleHello = ({ person: { name } }: SimpleHelloProps) =>
    name
        ? <p>Hello, { name }</p>
        : <p>Please, enter your name into the input</p>
