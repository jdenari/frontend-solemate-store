import React, { useState } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
    className?: string;
}

const Counter: React.FC<CounterProps> = ({ className }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    return (
        <div className={`${className} p-1`}>
            <div className="d-inline-flex align-items-center border shadow-sm p-1 bg-body-tertiary rounded">
                <div className="mx-3">{count}</div>
                <div>
                    <button
                        type="button"
                        className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 ms-3 fs-5 h100"`}
                        onClick={decrement}
                    >
                    -
                    </button>
                    <button
                        type="button"
                        className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 mx-1 fs-5`}
                        onClick={increment}
                    >
                    +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
