import { useEffect, useState } from "react";

const useFetchXmltoJson = ( url ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
       
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
                setState({
                    data: data["actividad"],
                    loading: false
                });
            })
    }, [url])

    return state; // { data: ["actividad"], loading: true };

}

export default useFetchXmltoJson;