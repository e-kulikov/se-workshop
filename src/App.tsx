import React, {useState} from 'react';
import './App.css';

import { SimpleHello } from "./components/simple-hello";
import {ComponentWithChild} from "./components/component-with-child";

export interface Person {
    name?: string;
    age?: number;
}

function App() {
  const [ person, setPerson ] = useState<Person>({});
  const updatePersonAge = (age: number) => setPerson({ ...person, age })
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
                  <ComponentWithChild person={person} updatePersonAge={updatePersonAge} />
              </fieldset>
          </form>
      </main>
    </div>
  );
}

export default App;
