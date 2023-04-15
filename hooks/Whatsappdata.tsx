import { useEffect, useState } from 'react';
import axios from 'axios';

const UsewhatsappAPIdata = () => {
    const [data, setData] = useState([])
    function getData() {

        axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
            console.log(response.data.email);
            setData(response.data)


        });

    };

    useEffect(() => {

        getData();
    }, [])

    return { data }
};

export default UsewhatsappAPIdata;