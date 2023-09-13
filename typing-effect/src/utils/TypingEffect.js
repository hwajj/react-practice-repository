import React, { useEffect, useRef } from 'react'

const TypingEffectBad = ({ message = '' }) => {
	const paragraphRef = useRef(null)
	console.log(message)
	useEffect(() => {
		if (message === '') return
		const messageArr = message.split('')
		let currMsgIndex = 0
		const interval = setInterval(() => {
			if (messageArr[currMsgIndex] === '\uD83D') {
				++currMsgIndex
				if(paragraphRef.current)paragraphRef.current.innerHTML += `<span class="green-heart">💚</span>`
			} else {
				if(paragraphRef.current)paragraphRef.current.innerHTML += `${messageArr[currMsgIndex]}`
			}
			if (++currMsgIndex === message.length) clearInterval(interval)
		}, 50)

		return () => {
			clearInterval(interval)
			paragraphRef.current = ''
		}
	}, [message])

	return <p ref={paragraphRef} />
}

export default React.memo(TypingEffectBad)
