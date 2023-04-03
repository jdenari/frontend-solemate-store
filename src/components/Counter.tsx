import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/actions';
import { RootState } from '../store/types';
import styles from './Counter.module.css';

interface CounterProps {
    className?: string;
}

const Counter: React.FC<CounterProps> = ({ className }) => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {dispatch(increment());};
    const handleDecrement = () => {dispatch(decrement());};

    return (
        <div className={`${className} p-1`}>
            <div className="d-inline-flex align-items-center border shadow-sm p-1 bg-body-tertiary rounded">
                <div className="mx-3">{count}</div>
                <button
                    type="button"
                    className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 ms-3 fs-5 h100"`}
                    onClick={handleDecrement}
                >
                    -
                </button>
                <button
                    type="button"
                    className={`${styles.buttonIncr} btn btn-outline-secondary btn-sm px-3 py-2 border-0 mx-1 fs-5`}
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
