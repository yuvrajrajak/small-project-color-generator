import React, { useState } from 'react'
import SingleColor from './SingleColor'
import styled from 'styled-components'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors);
    } catch (error) {
      setError(true)
      console.log(error)
    }

  }
  return (
    <Wrapper>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <h3>Color Generator</h3>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            console.log(color)
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          })
        }
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.container{
  form{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem;
    h3{
      margin-right: 2rem;
    }
    input{
      border-color: transparent;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }
    input.error{
     border: 2px solid var(--clr-red-dark);

    }
  }
}
.btn{
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background: var(--clr-primary-5);
  border-radius: var(--radius);
  border-color: transparent;
  color: var(--clr-white);
  cursor: pointer;
}
.colors {
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit,minmax(96px,1fr));
}


`
export default App
