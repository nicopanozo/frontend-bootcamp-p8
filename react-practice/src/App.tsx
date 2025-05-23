import React from 'react';
import ControlledUncontrolledForm from './components/ControlledUncontrolledForm';
import UserCard from './components/UserCard';
import UserList from './components/UserList';
import KeyboardControlledCounter from './components/KeyboardControlledCounter';

const App: React.FC = () => {
  const sayHello = (name: string) => alert(`Hello, ${name}!`);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React Practice Exercises</h1>

      <section><ControlledUncontrolledForm /></section>

      <section>
        <h2>Props Example</h2>
        <UserCard name="Alice" age={30} onClick={sayHello} />
      </section>

      <section>
        <h2>Fetch & Hooks Example</h2>
        <UserList />
      </section>

      <section>
        <h2>Counter with Events</h2>
        <KeyboardControlledCounter />
      </section>
    </div>
  );
};

export default App;
