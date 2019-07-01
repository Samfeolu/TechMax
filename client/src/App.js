import React from 'react';
import './App.css';
import DetailBar from './DetailBar';
import Sidebar from './Sidebar';

export const myContext = React.createContext({
  name: 'Samfeolu',
  age: 22,
  company: 'Decagon',
});
export const MyContextProvider = myContext.Provider;
function App() {
  return (
    <MyContextProvider>
      <div className="flex">
        <Sidebar />
        <DetailBar />
      </div>
    </MyContextProvider>
  );
}
export default App;
