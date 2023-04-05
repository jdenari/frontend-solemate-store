import React from 'react';
import styles from './RadiosCategory.module.css';

const RadiosCategory = () => {
    return (
        <div className="d-inline-flex">
            <div className="form-check">
                <input className={`form-check-input ${styles.checkColor} mx-1`} type="radio" name="category" id="category1" value="option1"/>
                <label className="form-check-label mx-1" htmlFor="category1">
                    Todos
                </label>
            </div>
            <div className="form-check">
                <input className={`form-check-input ${styles.checkColor} mx-1`} type="radio" name="category" id="category2" value="option2" />
                <label className="form-check-label mx-1" htmlFor="category2">
                    Masculino
                </label>
            </div>
            <div className="form-check">
                <input className={`form-check-input ${styles.checkColor} mx-1`} type="radio" name="category" id="category3" value="option3" />
                <label className="form-check-label mx-1" htmlFor="category3">
                    Feminino
                </label>
            </div>
            <div className="form-check">
                <input className={`form-check-input ${styles.checkColor} mx-1`} type="radio" name="category" id="category4" value="option4" />
                <label className="form-check-label mx-1" htmlFor="category4">
                    Infantil
                </label>
            </div>
        </div>
    );
};

export default RadiosCategory;


