import { useEffect , useState } from 'react';
import axios from 'axios';

const Useassessdata = () => {
    const[data , setData] = useState([])
    function getData (){
        return(
            axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response)=>{
                console.log (response.data.title);
                setData (response.data)
            }));
        }
       
  
    useEffect (() =>{
        getData();
    },[])

    return { data }
};

export default Useassessdata;