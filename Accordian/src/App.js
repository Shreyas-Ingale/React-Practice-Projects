import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  return <main>
    <div className='container'>
      <h3>Questions and Answers About Login</h3>
      <section className='info'>
        {data.map((data, i) =>
          <SingleQuestion key={i} question={data} />
        )}
      </section>
    </div>;
  </main>
}

export default App;
