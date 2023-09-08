import React, {useCallback, useState, ChangeEventHandler, useMemo} from 'react';
import './App.css';

import { SimpleHello } from "./components/simple-hello";
import {ComponentWithChild} from "./components/component-with-child";

export interface Person {
    name?: string;
    age?: number;
}

function App() {
  const [ person, setPerson ] = useState<Person>({name: '', age: 0});
    const updatePersonAge: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => setPerson((person) =>
            ({...person, age: +event.target.value})),
        []
    );
    const age = useMemo(() => person.age, [person.age]);
  return (
    <div className="App">
      <main>
          <form>
            <fieldset>
                <h2>Simple Hello example:</h2>
                <input
                    placeholder="enter your name"
                    value={person.name}
                    type="text"
                    onChange={
                        e => setPerson({ name: e.target.value })
                    }
                />
                <SimpleHello person={person} />
            </fieldset>
              <fieldset>
                  <ComponentWithChild personAge={age} updatePersonAge={updatePersonAge} />
              </fieldset>
          </form>
      </main>
    </div>
  );
}

export default App;
