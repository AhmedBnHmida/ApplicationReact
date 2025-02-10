import { useEffect, useState } from "react";

const CounterF = ({ initialCount = 0, step = 1 }) => {
    console.log("CounterF: Render");
    
    const [count, setCount] = useState(initialCount);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("Component Did Update");
    }, [count]);

    const handleIncrement = () => setCount((prev) => prev + step);
    const handleDecrement = () => setCount((prev) => prev - step);
    const handleReset = () => setCount(0);

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <p>Count = {count}</p>
                    <button onClick={handleDecrement}>Decrement</button>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleReset}>Reset</button>

                </>
            )}
        </>
    );
};

export default CounterF;
