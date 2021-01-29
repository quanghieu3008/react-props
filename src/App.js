import './App.css';
import React from 'react';
import useNumber from './components/showNumber';
import ShowInput from './components/ShowInput';

function App() {
    const [number, handleOnChangeInput, handleOnChange] = useNumber();
    console.log(number);
    return (
        <div style={{ display: 'flex', flexDirection: 'center', justifyContent: 'center', margin: "100px" }}>
            {number && number}
            <ShowInput
                handleOnChangeInput={handleOnChangeInput}
                handleOnChange={handleOnChange}
            />
        </div>
    );
}

export default App;
