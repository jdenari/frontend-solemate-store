// patterns imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.css';

// actions imports
import { DECREMENT, INCREMENT } from '../store/actions';
import { RootState } from '../store/types';

interface CounterProps {
    className?: string;
    showExtraButton?: boolean;
}

const Counter: React.FC<CounterProps> = ({ className, showExtraButton = false }) => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {dispatch(INCREMENT());};
    const handleDecrement = () => {dispatch(DECREMENT());};
    const handleExtraButtonClick = () => {// handle extra button click event
    };

    return (
        <div className={`${className} p-1`}>
            <div className="d-inline-flex align-items-center border shadow-sm p-1 bg-body-tertiary rounded bg-light">
                <div className="mx-3">{count}</div>
                    <button
                        type="button"
                        className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 ms-3 fs-5 h100"`}
                        onClick={handleDecrement}
                        >
                        <img src="/icons/dash-lg.svg" alt="Decrement" />
                    </button>
                        <button
                        type="button"
                        className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 mx-1 fs-5`}
                        onClick={handleIncrement}
                        >
                        <img src="/icons/plus-lg.svg" alt="Increment" />
                    </button>
                    {showExtraButton && (
                    <button
                        type="button"
                        className={`${styles.buttonIncr} btn btn-outline-danger btn-sm px-3 py-2 border-0 mx-1 fs-5`}
                        onClick={handleExtraButtonClick}
                    >
                        <img src="/icons/x-lg.svg" alt="remove" />
                    </button>
                    )}
                </div>
            </div>
        );
    };

export default Counter;

