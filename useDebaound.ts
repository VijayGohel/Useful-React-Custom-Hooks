import {useState, useEffect} from 'react';

export const useDebounce = <T>(value: T, delay: number): T | null =>{
    const [debouncedVal, setDebouncedVal] = useState<T | null>(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedVal(value);
        }, delay)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debouncedVal;
}