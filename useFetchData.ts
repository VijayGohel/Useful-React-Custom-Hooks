import {useState, useEffect} from 'react';

interface FetchDataResponse<T> {
    data: T | null;
    loading: boolean;
}

export const useFetchData = <T>(url: string, options?: RequestInit): FetchDataResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(url, {...options})
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [url, options])

    return {data, loading};
}