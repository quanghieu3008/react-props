import './App.css';
import React, { useState } from 'react';
import MapData from './components/listMap';
import useStatus from './components/status'
function App() {
    const [data, setData] = useState(["ok", "no", "status"])
    const [status, hanldeStatus, content] = useStatus();

    return (
        <div className="App">
            <button onClick={hanldeStatus} >{content}</button>
            {(!status) ?
                <MapData
                    data={data}
                    mapData={(data, key) => (<div key={key}>
                        <p>{data}</p>
                    </div>)
                    }
                /> : null
            }

        </div>
    );
}

export default App;
