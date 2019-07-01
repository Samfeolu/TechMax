import React, { useContext } from 'react';
import myContext from './App';

function Trips({ trips }) {
  const age = useContext(myContext);
  console.log(age);
  return <p>This is Me</p>;
}
export default Trips;
