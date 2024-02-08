import React, { useState, useEffect } from 'react';
function Rate() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
        const fetchedData = await fetchedData();
        setData(fetchedData);
    }
    getData();
}, []);
        return (
        <div>
        {data.map((item) => (
        <div key={item.id}>{item.name}</div>
        ))}
        </div>
        );
}

export default Rate;