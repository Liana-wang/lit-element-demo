import { useState, useRef, useEffect } from 'react'


function BtnExample() {
	const btnRef = useRef(null)

	const [count, setCount] = useState(0)

	const handleClick = (event) => {
		setCount(count + 1)
		console.log(event)
	}

	// useEffect(() => {
	// 	btnRef.current.addEventListener('litClick', handleClick)
	// 	console.log(btnRef)

	// 	return () => {
	// 		btnRef.current.removeEventListener('litClick', handleClick)
	// 	}
	// }, [count])

	const renderData = () => {
		let data = []
		for (let i = 0; i < 500; i++) {
			const component = (
				<div key={`${i}-0`} className={"item"}>
					<lit-button key={`${i}-1`} class={"btn"}>按钮1</lit-button>
					<lit-button key={`${i}-2`} class={"btn"}>按钮2</lit-button>
					<lit-button key={`${i}-3`} class={"btn"}>按钮3</lit-button>
					<lit-button key={`${i}-4`} class={"btn"}>按钮4</lit-button>
					<lit-button key={`${i}-5`} class={"btn"}>按钮5</lit-button>
					{/* <button key={`${i}-1`} class={"btn-origin"}>按钮1</button>
					<button key={`${i}-2`} class={"btn-origin"}>按钮2</button>
					<button key={`${i}-3`} class={"btn-origin"}>按钮3</button>
					<button key={`${i}-4`} class={"btn-origin"}>按钮4</button>
					<button key={`${i}-5`} class={"btn-origin"}>按钮5</button> */}
				</div>
			)
			data = [...data, component]
		}

		return data
	}

	return (
		<div className="item">
			<div>
				<p>点击次数：{count}</p>
				{/* <lit-button ref={btnRef}>点击</lit-button> */}
				<lit-button onLitClick={() => console.log('aaaa')}>点击</lit-button>
				{renderData()}
			</div>
		</div>
	);
}

export default BtnExample;
