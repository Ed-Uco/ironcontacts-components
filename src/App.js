import React, { useState } from 'react';
import Contacts from './components/Contacts';
import contacts from './contacts.json';

function App() {
    /* const fiveContacts = contacts.slice(0, 5);

    const [addContact, setAddContact] = useState(fiveContacts);

    const randomContact = c => {
        const getRandomContact = c[Math.floor(Math.random() * c.length)];

        return setAddContact([...addContact, getRandomContact]);
    };

    const sortByName = c => {
        const sortedNames = c.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });
        return setAddContact([...addContact, sortedNames]);
    };

    const sortByPopularity = c => {
        const sortedPopular = c.sort((a, b) => {
            return b.popularity - a.popularity;
        });
        return setAddContact([...addContact, sortedPopular]);
    }; */
    return (
        <div className="App">
            <Contacts contacts={contacts} />
        </div>
    );
}

export default App;
