import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
	let [clickedIdx, setClickedIdx] = useState(0);
	let [modal, setModal] = useState(false);
	let [blogList, setBlogList] = useState([
		'미디어쿼리를 배워보자',
		'Git revert로 커밋 되돌리기',
		'Git reset으로 커밋 삭제하기',
	]);
	let [likeArr, setLike] = useState([0, 0, 0]);
	let [content, setContent] = useState('');

	let addPost = () => {
		let copy = [...blogList];
		copy.unshift(content);
		setBlogList(copy);
	};
	const modalCheck = () => {
		setModal(false);
	};

	return (
		<>
			<div className="blog">
				<div className="black-nav">
					<h4>My Blog</h4>
					<div></div>
				</div>

				<div className="lists">
					{blogList.map((item, idx) => {
						return (
							<div className="list" key={idx}>
								<div>
									<h4
										className="pointer"
										onClick={() => {
											setClickedIdx(idx);
											setModal(true);
										}}
									>
										{item}
										<span
											onClick={() => {
												let copyLike = [...likeArr];
												copyLike[idx]++;
												setLike(copyLike);
											}}
										>
											👍
										</span>
										{likeArr[idx]}
									</h4>

									<p>2022/06/01</p>
								</div>
								<button
									onClick={() => {
										let copyList = [...blogList];
										copyList.splice(idx, 1);
										setBlogList(copyList);
									}}
								>
									삭제
								</button>
							</div>
						);
					})}
				</div>
				<div className="input-container">
					<input
						onInput={(e) => {
							setContent(e.target.value);
						}}
						onKeyPress={(e) => {
							if (e.key === 'Enter') {
								addPost();
							}
						}}
					/>
					<button onClick={addPost}>글발행</button>
				</div>
			</div>

			{modal ? (
				<Modal
					clickedIdx={clickedIdx}
					blogList={blogList}
					onCheck={modalCheck}
				/>
			) : null}
		</>
	);
}

export default App;
