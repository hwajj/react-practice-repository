import React, { useCallback, useEffect, useRef, useState } from 'react'


const useTypingEffect = ({ message = '', characterName = '', onClickNextButton }) => {
	const showingMessageRef = useRef('')
	/** 화면에 출력되는 메세지 **/
	const fullMessageRef = useRef('')
	/** 현재 출력해야할 총 메세지  **/
	const [, updateState] = useState()
	const forceUpdate = useCallback(() => updateState({}), [])
	
	useEffect(() => {
		fullMessageRef.current = message.replaceAll('xx', characterName)
		typeNext(fullMessageRef.current).then(() => {})
	}, [message])
	
	const typeNext = useCallback(
		async message => {
			showingMessageRef.current = ''
			
			if (message !== '') {
				let text;
				/** 일정 시간 간격으로 다음 텍스트를 보여주고 component 리렌더링 **/
				for (let i = 0; i < message.length; i++) {
					// if(message.charAt(i) === '\uD83D') {
					// 	text = `${showingMessageRef.current}<span class="green-heart">💚</span>`
					// 	i++;
					// }else {
					// 	text = `${showingMessageRef.current}${message.charAt(i)}`
					// }
					text = `${showingMessageRef.current}${message.charAt(i)}`
					await new Promise(r => setTimeout(r, 50))
					showingMessageRef.current = text
					forceUpdate()
				}
			} else {
				/** 메세지가 없을때 이전 문자를 보여주지 않기 위해 빈문자로 대체후 리렌더링 **/
				showingMessageRef.current = ''
				forceUpdate()
			}
		},
		[message],
	)
	const Content = () => (
		<>
			<p>{showingMessageRef.current}</p>
			

		</>
	)
	
	return Content
}

export default useTypingEffect
