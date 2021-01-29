import React from 'react';
function ShowInput(props) {
    const { handleOnChangeInput, handleOnChange } = props
    return (
        <div>
            <button onClick={handleOnChange}>Trừ</button>
            <button onClick={handleOnChangeInput}>
                Cộng</button>
        </div>
    );
}

export default ShowInput;