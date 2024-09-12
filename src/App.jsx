import React from 'react';
import UseContext from './UseContext';
import {UserContext} from './UseContext';


const user = { name: "shehin" }

function App() {
    return (
        <>
            <UserContext.Provider value={user}>
                <UseContext />
            </UserContext.Provider>
        </>

    );
}

export default App;



