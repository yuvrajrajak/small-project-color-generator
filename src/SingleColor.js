import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import styled from 'styled-components'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <Wrapper>
      <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue)
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {
          alert && <p className="alert">copied to clipboard</p>
        }
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.color{
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
}
.percent-value {
  margin-bottom: 0;
  color: var(--clr-grey-1);
}
.color-value {
  color: var(--clr-grey-1);
  margin-bottom: 0;
}
.color-light .color-value {
  color: var(--clr-white);
}
.color-light .percent-value {
  color: var(--clr-white);
}

.alert {
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

`
export default SingleColor
