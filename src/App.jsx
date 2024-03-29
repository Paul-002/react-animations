import React, { useState } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";
import uuid from "uuid";
import PersonsList from "./components/PersonsList/PersonsList";

function App() {
  const [backdrop, setBackdrop] = useState(false);
  const [persons, setPersons] = useState([
    { id: "abc", name: "Adam", surname: "Moreno", birth: "6/5/1971" },
    { id: "def", name: "Czesłąw", surname: "Adamek", birth: "6/6/1972" },
    { id: "ghj", name: "Louella", surname: "Franc", birth: "3/6/1979" }
  ]);
  const [newPerson, setNewPerson] = useState("");

  const backdropHandler = () => {
    setBackdrop(!backdrop);
  };

  const personHandler = id => {
    setPersons([...persons].filter(person => person.id !== id));
  };

  const addPersonHandler = e => {
    e.preventDefault();
    if (newPerson.length <= 2) {
      backdropHandler();
    } else {
      const person = {
        id: `${uuid.v4()}`,
        name: `${newPerson}`,
        surname: "Moreno",
        birth: "6/5/1971"
      };
      setNewPerson("");
      setPersons([...persons].concat(person));
    }
  };

  return (
    <div className="app">
      <p>Enter name...</p>
      <Backdrop
        show={backdrop}
        clickedBackdrop={backdropHandler.bind("this")}
      />
      <Modal show={backdrop}>
        <div className="message-wrapper">
          <h3 className="modal-message">
            Name must be at least 3 characters...
          </h3>
          <button
            className="modal-button"
            onClick={backdropHandler.bind("this")}
          >
            Hide
          </button>
        </div>
      </Modal>
      <form>
        <input
          onChange={e => setNewPerson(e.target.value)}
          type="text"
          value={newPerson}
        />
        <input
          onClick={e => addPersonHandler(e)}
          type="submit"
          value="Add person!"
        />
      </form>
      <PersonsList persons={persons} onClickItem={personHandler} />
    </div>
  );
}

export default App;
