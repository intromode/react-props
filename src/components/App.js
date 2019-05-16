import React from 'react';
import ColorButtons from './ColorPicker';

export default function App() {
  const colors = ['red', 'yellow', 'blue'];
  return (
    <ColorButtons colors={colors}/>
  );
}

console.log('travis');
