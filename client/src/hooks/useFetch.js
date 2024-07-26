import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/app";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res.data); // Assuming the API response has a 'data' field with the required information
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        makeApiCall();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
