import { useEffect , useState } from 'react';
import axios from 'axios';

const EmailAPIdata = () => {
    const[data1 , setData] = useState([])
    function getData (){
        return(
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                console.log (response.data.title);
                setData (response.data)
            }));
        }
       
  
    useEffect (() =>{
        getData();
    },[])

    return { data1 }
};

export default EmailAPIdata;