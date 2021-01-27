import { useState, useRef, useEffect } from 'react'

function CheckExample() {
	const checkRef = useRef(null)

	const check = ({ detail }) => {
		console.log('checked', detail.checked)
	}

	useEffect(() => {
		checkRef.current.addEventListener('litClick', check)
		console.log(checkRef)

		return () => {
			checkRef.current.removeEventListener('litClick', check)
		}
	}, [])

	return (
		<div className="item">
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

export default CheckExample;
