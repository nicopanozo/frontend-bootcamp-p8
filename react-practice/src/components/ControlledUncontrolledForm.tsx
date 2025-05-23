import React, { useState, useRef } from 'react';

const ControlledUncontrolledForm: React.FC = () => {
  const [controlledValue, setControlledValue] = useState<string>('');
  const uncontrolledRef = useRef<HTMLInputElement>(null);

  const handleLogValues = () => {
    const uncontrolledValue = uncontrolledRef.current?.value ?? '';
    console.log('Controlled input value:', controlledValue);
    console.log('Uncontrolled input value:', uncontrolledValue);
  };

  return (
    <div className="card">
      <h2>Controlled vs. Uncontrolled Form</h2>

      <label>
        Controlled:
        <input
          className="input"
          type="text"
          value={controlledValue}
          onChange={e => setControlledValue(e.target.value)}
          placeholder="Type here..."
        />
      </label>

      <label>
        Uncontrolled:
        <input
          className="input"
          type="text"
          ref={uncontrolledRef}
          placeholder="Type here..."
        />
      </label>

      <button className="button" onClick={handleLogValues}>
        Log Both Values
      </button>
    </div>
  );
};

export default ControlledUncontrolledForm;
