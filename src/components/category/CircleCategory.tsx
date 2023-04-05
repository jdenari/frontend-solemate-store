import React from 'react';
import styles from './CircleCategory.module.css';

interface CircleCategoryProps {
    imageUrl: string;
    text: string;
}

const CircleCategory: React.FC<CircleCategoryProps> = ({ imageUrl, text }) => {
    return (
        <div className={`${styles.circleContainer} ${styles.circle} rounded p-3`}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={`${styles.textContainer} d-flex align-items-center mt-3 mb-0`}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default CircleCategory;



