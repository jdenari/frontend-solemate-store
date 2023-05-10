// EditableCell.tsx
import React, { useState } from 'react';

interface EditableCellProps {
    value: string | number;
    onUpdate: (newValue: string) => void;
    inputStyle?: React.CSSProperties;
}

const EditableCell: React.FC<EditableCellProps> = ({ value, onUpdate, inputStyle }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value.toString());

    // function to handle updating the cell value
    const handleUpdate = () => {
        setIsEditing(false);
        onUpdate(editedValue);
    };

    return isEditing ? (
        <textarea
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            onBlur={handleUpdate}
            autoFocus
            style={{ ...inputStyle, whiteSpace: 'pre-wrap' }}
        />
    ) : (
        <div onClick={() => setIsEditing(true)}>{value}</div>
    );
};

export default EditableCell;
