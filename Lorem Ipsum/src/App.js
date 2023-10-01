import React, { useState } from 'react';
import data from './data';
function App() {

  const [paras, setParas] = useState([]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setParas(data.slice(0,amount));
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum ?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" min={1} max={10} name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type="submit" className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {paras.map((para,index) => 
          <p key={index}>{para}</p>
        )}
      </article>
    </section>
  )
}

export default App;
