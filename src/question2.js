import { useEffect, useState } from 'react';

const Question2 = () => {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    callService()
  }, [])

  const callService = async () => {
    try {
      const { categories } = await fetch('https://api.publicapis.org/categories').then((res) => res.json())
      setList(categories)
    } catch (error) {
      console.error(error)
    }
  }

  const onInputChange = (event) => {
    const str = event.target.value
    setValue(str)
  }


  return (
    <div>
      Search here: &nbsp;
      <input value={value} onChange={(event) => onInputChange(event)} />
      <table>
        <tbody>
          <tr style={{ backgroundColor: 'lightgray' }}>
            <td>Order</td>
            <td>Name</td>
          </tr>
          {list.filter(item => item.toLowerCase().includes(value.toLowerCase())).map((item, index) =>
            <tr key={item}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Question2