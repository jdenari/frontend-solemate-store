// EditableCell.tsx
import React, { useState } from 'react';

interface EditableCellProps {
    value: string | number;
    onUpdate: (newValue: string) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({ value, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value.toString());

    // function to handle updating the cell value
    const handleUpdate = () => {
        setIsEditing(false);
        onUpdate(editedValue);
    };

    return isEditing ? (
        <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            onBlur={handleUpdate}
            autoFocus
        />
    ) : (
        <div onClick={() => setIsEditing(true)}>{value}</div>
    );
};

export default EditableCell;
