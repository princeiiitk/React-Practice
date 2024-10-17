import {useEffect, useState} from 'react'
export default function ({currency}) {
    const [data, setdata] = useState();
    useEffect(() => {

        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_WnzVIJlnW3dHQ1PCwnBGE9ic0oJY3Mx5JD0HITTA`)
            .then((res) => res.json()).then(
                (res) =>
                    // console.log(res.data)
                setdata(res.data)
            )
                
   
       

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency])
     return data;

}