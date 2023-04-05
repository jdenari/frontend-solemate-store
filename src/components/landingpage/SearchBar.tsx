import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
return (
    <div className="input-group rounded py-3 px-1">
        <input type="text" className="form-control rounded-4 shadow-sm bg-body-tertiary" placeholder={placeholder} />
        <span className={`${styles.inputGroupAddon} p-2 mx-1`}><img src="/icons/search.svg" /></span>
    </div>
    );
};

export default SearchBar;
