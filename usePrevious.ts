import {useEffect, useRef} from 'react';

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
    const ref = useRef<T>();

    useEffect(()=>{
        console.log(value);
        console.log(ref.current);
        ref.current = value;
        console.log(ref.current);
        
    }, [value])

    return ref.current;
}