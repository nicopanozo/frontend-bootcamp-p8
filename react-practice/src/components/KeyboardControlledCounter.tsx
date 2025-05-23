import React, { useState, useEffect } from 'react';

const KeyboardControlledCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const inc = () => setCount(c => c + 1);
  const dec = () => setCount(c => (c > 0 ? c - 1 : 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') inc();
      if (e.key === 'ArrowDown') dec();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="card text-center">
      <h2>Count: {count}</h2>
      <button className="button" onClick={inc} style={{ marginRight: '0.5rem' }}>
        +
      </button>
      <button className="button" onClick={dec}>
        −
      </button>
      <p className="mt-1">You can also use ↑ and ↓ arrow keys.</p>
    </div>
  );
};

export default KeyboardControlledCounter;
