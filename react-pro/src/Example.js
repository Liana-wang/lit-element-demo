import { useState, useRef, useEffect } from 'react'

function Example() {
  const checkRef = useRef(null)
  const btnRef = useRef(null)

  const [data, setData] = useState([{ id: '2232', name: 'asdasd' }])

  const check = ({ detail }) => {
    console.log('checked', detail.checked)
  }

  const handleClick = ({ detail: { count } }) => {
    setData(count % 2 === 0 ? [] : [{ id: '2232', name: 'asdasd' }])
    console.log('count', count)
  }

  useEffect(() => {
    checkRef.current.addEventListener('litClick', check)
    btnRef.current.addEventListener('litClick', handleClick)
    console.log(checkRef)

    return () => {
      checkRef.current.removeEventListener('litClick', check)
      btnRef.current.removeEventListener('litClick', handleClick)
    }
  }, [])

  return (
    <div className="item">
      <lit-button ref={btnRef} data={JSON.stringify(data)}>按钮</lit-button>
      <div>
        基本用法：
        <lit-checkbox ref={checkRef}>sdsdff</lit-checkbox>
      </div>
      <div>
        禁用：
        <lit-checkbox disabled={true}>sdsdff</lit-checkbox>
      </div>
    </div>
  );
}

export default Example;
