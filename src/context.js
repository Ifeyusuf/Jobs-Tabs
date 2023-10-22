import React, {useContext, useEffect, useState, useCallback} from 'react';

const url= "https://course-api.com/react-tabs-project";

const AppContext= React.createContext();

const AppProvider = ({children}) => {

    const [jobs, setJobs]= useState([]);
    const [values, setValues]= useState(0);
    const [loading, setLoading] = useState(true)

    const fetchJobs= useCallback( async ()=>{
        const resp = await fetch(url);
        const data= await resp.json()
        setJobs(data)
        setLoading(false)
        // console.log(data)
    },[]);

useEffect( ()=>{
    fetchJobs()
},[fetchJobs])


return (

<AppContext.Provider value={
    {
        jobs,
        values,
        setValues,
        loading
    }
}>

    {children}
</AppContext.Provider>
)
}

export const useGlobalContext= () =>{
    return useContext(AppContext)
}

export {AppProvider, AppContext}
