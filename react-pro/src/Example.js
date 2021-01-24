import { useState } from 'react'

function Example() {
  const [data, setData] = useState([{ id: '2232', name: 'asdasd' }])

  const handleClick = (event) => {
    console.log('aaa', event)
  }

  return (
    <div className="item">
      <lit-button data={JSON.stringify(data)} litClick={handleClick}>按钮</lit-button>
      <lit-checkbox>sdsdff</lit-checkbox>
    </div>
  );
}

export default Example;
