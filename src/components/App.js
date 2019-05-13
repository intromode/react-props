import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
    <Header />,
    <Dog age={5} name="snuggles" weight="60 lbs" />
    </>
  );
}
