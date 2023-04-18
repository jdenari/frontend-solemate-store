import React from 'react';
import { Form } from 'react-bootstrap';

interface SelectFormProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const SelectForm: React.FC<SelectFormProps> = ({ onChange, value }) => {
    return (
      <div className='mt-3'>
          <Form.Select value={value} onChange={onChange}>
              <option>Select size</option>
              <option value='1'>Size 1</option>
              <option value='2'>Size 2</option>
              <option value='3'>Size 3</option>
          </Form.Select>
      </div>
    );
};

export default SelectForm;
