import { useEffect , useState } from 'react';
import axios from 'axios';

const TrendingAPIdata = () => {
    const[data , setData] = useState([])
    function getData (){
        return(
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response)=>{
                console.log (response.data.id);
                console.log (response.data.url);
                setData (response.data)
            }));
        }
       
  
    useEffect (() =>{
        getData();
    },[])

    return { data}
};

export default TrendingAPIdata;




