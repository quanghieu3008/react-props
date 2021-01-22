import { useState } from 'react';

const useStatus = () => {
    const [status, setStatus] = useState(false);
    const [content, setContent] = useState("Show");
    const hanldeStatus = () => {

        setStatus(!status);
        setContent(status ? "Show" : "Hidden")
    }
    return [status, hanldeStatus, content];
};

export default useStatus;
