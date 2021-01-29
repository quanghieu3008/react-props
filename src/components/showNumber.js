import { useState } from 'react';
function useNumber(props) {
    const [number, setNumBer] = useState(0)
    const handleOnChangeInput = () => {
        setNumBer(number + 1)
    }
    const handleOnChange = () => {
        setNumBer(number - 1)
    }
    return [number, handleOnChangeInput, handleOnChange];
}

export default useNumber;