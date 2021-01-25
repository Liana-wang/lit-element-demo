import { useState } from 'react'

function Example() {
  const [data, setData] = useState([{ id: '2232', name: 'asdasd' }])
  const [checked, setChecked] = useState(true)

  const handleClick = (event) => {
    setData([])
    console.log('aaa', event)
  }

  const check = (event) => {
    console.log(event)
  }

  return (
    <div className="item">
      <lit-button data={JSON.stringify(data)} litClick={handleClick}>按钮</lit-button>
      <div>
        基本用法：
        <lit-checkbox litClick={check}>sdsdff</lit-checkbox>
      </div>
      <div>
        禁用：
        <lit-checkbox disabled={true}>sdsdff</lit-checkbox>
      </div>
    </div>
  );
}

export default Example;
