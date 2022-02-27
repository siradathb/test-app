import { useEffect, useState } from 'react';

const Question1 = () => {
  const [value, setValue] = useState('')
  const [dropdown, setDropdown] = useState('prime')
  const [result, setResult] = useState(undefined)

  useEffect(() => {
    if (!value || !dropdown || value < 0) return setResult(undefined)

    if (dropdown === 'prime') {
      setResult(isPrime(value))
    }

    if (dropdown === 'fibonacci') {
      setResult(isFibonacci(value))
    }
  }, [value, dropdown])

  const roundUp = () => {
    const num = parseFloat(value)
    if (!num) return
    if (num < 0) return setValue(1)
    setValue(Math.round(num))
  }

  const onInputChange = (event) => {
    const str = event.target.value
    setValue(str)
  }

  const isPrime = (num) => {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }

    return true
  }

  const isFibonacci = (num) => {
    return isPerfectSquareRoot(5 * num * num + 4) || isPerfectSquareRoot(5 * num * num - 4);
  }

  const isPerfectSquareRoot = (num) => {
    let sqrNum = parseInt(Math.sqrt(num));
    return (sqrNum * sqrNum == num);
  }

  return (
    <>
      <div style={{ minWidth: '200px', border: '1px solid' }}>
        <input type="number" value={value} onBlur={roundUp} onChange={(event) => onInputChange(event)} />
      </div>
      <div style={{ width: 'inherit', minWidth: '100px', border: '1px solid' }}>
        <select value={dropdown} onChange={event => setDropdown(event.target.value)}>
          <option value="prime">isPrime</option>
          <option value="fibonacci">isFibonacci</option>
        </select>
      </div>
      <div style={{ minWidth: '300px', border: '1px solid' }}>
        <label>{result !== undefined ? result.toString() : ''}</label>
      </div>
    </>
  )
}

export default Question1