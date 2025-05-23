# React Practice Exercises

This project contains several React exercises focused on core concepts such as controlled vs uncontrolled components, props, hooks, and event handling. All components are written in TypeScript using functional components.

## Exercises

### 1. Controlled vs Uncontrolled Components

- **Description:**  
  A form with two input fields:
  - One controlled input (managed with `useState`)
  - One uncontrolled input (managed with `ref`)
- **Features:**
  - A button logs both input values to the console.
  - See [Research.md](../Research.md) for differences between controlled and uncontrolled components.

### 2. Props

- **Description:**  
  A `UserCard` component that accepts:
  - `name` (string)
  - `age` (number)
  - `onClick` (function)
- **Features:**
  - Displays the user's name and age.
  - When the card is clicked, triggers the `onClick` function and greets the user.

### 3. User List with Hooks

- **Description:**  
  The `UserList` component is implemented as a functional component using `useState` and `useEffect`.
- **Features:**
  - Fetches and displays a list of users from an API.
  - Uses async/await for data fetching.

### 4. Events: Keyboard-Controlled Counter

- **Description:**  
  A counter component that can be incremented or decremented by:
  - Clicking "+" and "−" buttons
  - Pressing the ArrowUp (increment) and ArrowDown (decrement) keys
- **Features:**
  - Uses `useState<number>` for state management.
  - Handles `onClick` and `keydown` events.
  - Prevents the counter from going below 0.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install

2. **Run the app:**
   ```bash
   npm start
   ```
## Research

See RESEARCH.md for a summary of controlled vs uncontrolled components and their use cases.