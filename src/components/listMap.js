import { React } from 'react';
const MapData = ({ data, mapData }) => {
    return <div>{data.map((item, key) => mapData(item, key))}</div>
}
export default MapData;