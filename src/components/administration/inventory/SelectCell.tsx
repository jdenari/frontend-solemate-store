import React from 'react';

interface SelectCellProps {
  value: string;
  options: string[];
  onUpdate: (newValue: string) => void;
}

const SelectCell: React.FC<SelectCellProps> = ({ value, options, onUpdate }) => {
  return (
    <select value={value} onChange={(e) => onUpdate(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectCell;
