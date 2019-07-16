import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from './customHooks/useForm';

// Example #1
//---------------------------------------------------------
// function expensiveInitialState() {
//     let count;
//     // logic that is expensive such as
//     // running a bunch of for loops
//     return count;
// }
// const App = () => {
//     // expensiveInitialState will only be called the first time
//     // and not every single time the component renders
//     const [count, setSount] = useState(() => expensiveInitialState());
//   return <div  />;
// };

// export default App;
//---------------------------------------------------------
// Example #2
//---------------------------------------------------------
// const App = () => {
//   const [count, setCount] = useState(10);

//   return (
//     <div>
//       {/* <button onClick={() => setCount(count + 1)}>+</button> */}
//       {/*You can also pass an updater function into setCount.*/}
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
//       <div>{count}</div>
//     </div>
//   );
// };

// export default App;
//---------------------------------------------------------
//Example #3
//---------------------------------------------------------
// useState updater function does not merge objects like setState, it overwrites
// const App = () => {
//     // Use an object with two values as the initial state if both values are somehow synced or
//     // will be updated together (i.e. click event on the same btn ). Otherwise use two separate
//     // useState calls, one for each piece of state
//   const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

//   return (
//     <div>
//       {/* <button onClick={() => setCount(count + 1)}>+</button> */}
//       {/*You can also pass an updater function into setCount.*/}
//       <button
//         onClick={() =>
//           setCount(currentState => ({
//             // if only update count, then must add ...currentState. Otherwise count 2 will cease to exist
//             ...currentState,
//             count: currentState.count + 1
//           }))
//         }
//       >
//         +
//       </button>
//       <div>count 1: {count}</div>
//       <div>count 2: {count2}</div>
//     </div>
//   );
// };

// export default App;
//---------------------------------------------------------
// //Example #4
// //---------------------------------------------------------
// // Forms

// const App = () => {
//     // expensiveInitialState will only be called the first time
//     // and not every single time the component renders
//     const [email, setEmail] = useState("");
//     const [password, setPassword] =  useState("");
//   return(
//       <div>
//           <input name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
//           <input name="password" value={password} type="password" onChange={e => setPassword(e.target.value)}></input>
//       </div>
//   )
// };

// export default App;
// //---------------------------------------------------------
//Example #5
//---------------------------------------------------------
// Custom Form Hook

const App = () => {
  // expensiveInitialState will only be called the first time
  // and not every single time the component renders
  const [values, handleChange] = useForm({ email: '', password: '' });

  return (
    <div>
      <input name='email' value={values.email} onChange={handleChange} />
      <input
        name='password'
        value={values.password}
        type='password'
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
//---------------------------------------------------------
