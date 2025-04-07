import { useState } from 'react'

interface Options {
    initialValue?: number;
}

export const useCounter = ({ initialValue = 10}: Options) => {

    const [count, setCount] = useState<number>(initialValue);

    const increaseBy = (value: number) => {
        const newValue = Math.max(0, count + value);
        setCount(newValue);
    }

    return {
        count,
        increaseBy,
    }
}
