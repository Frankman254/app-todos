// import React from 'react';
import { AppUI } from './AppUI';
import { TuduProvider } from '../TuduContex';

function App() {

  return (
    <TuduProvider>
      <AppUI/>
    </TuduProvider>
);
}
export default App;
