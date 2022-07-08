import React, { useState } from 'react';
import './App.css';

function App() {
	let [modal, setModal] = useState(false);
	let [blogList, setBlogList] = useState([
		'미디어쿼리를 배워보자',
		'Git revert로 커밋 되돌리기',
		'Git reset으로 커밋 삭제하기',
	]);
	let [like, setLike] = useState(0);
	return (
		<>
			<div className="blog">
				<div className="black-nav">
					<h4>My Blog</h4>
					<div></div>
				</div>
				<div className="button-container">
					<button
						onClick={() => {
							let copy = [...blogList];

							copy.sort();
							setBlogList(copy);
						}}
					>
						가나다 순 정렬 버튼
					</button>

					<button
						onClick={() => {
							let copy = [...blogList];
							copy[0] = '부트스트랩으로 반응형 웹디자인만들기';
							setBlogList(copy);
						}}
					>
						버튼
					</button>
				</div>

				<div className="lists">
					<div className="list">
						<h4>
							{blogList[0]}
							<span
								onClick={() => {
									setLike(like + 1);
								}}
							>
								👍
							</span>{' '}
							{like}
						</h4>
						<p>2022/06/05</p>
					</div>

					<div className="list">
						<h4>{blogList[1]}</h4>
						<p>2022/06/03</p>
					</div>
					<div className="list ">
						<h4 className="pointer" onClick={() => setModal(!modal)}>
							{blogList[2]}
						</h4>
						<p>2022/06/01</p>
					</div>
				</div>
				{modal ? <Modal></Modal> : null}
			</div>
		</>
	);
}

function Modal() {
	return (
		<div className="modal h-100">
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
