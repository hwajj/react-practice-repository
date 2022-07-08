import React, { useState } from 'react';
import './App.css';

function App() {
	let [clickedIdx, setClickedIdx] = useState(0);
	let [modal, setModal] = useState(false);
	let [blogList, setBlogList] = useState([
		'미디어쿼리를 배워보자',
		'Git revert로 커밋 되돌리기',
		'Git reset으로 커밋 삭제하기',
	]);
	let [likeArr, setLike] = useState([0, 0, 0]);

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
					{blogList.map((item, idx) => {
						return (
							<div className="list" key={idx}>
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
						);
					})}
				</div>
				{modal ? <Modal clickedIdx={clickedIdx} blogList={blogList} /> : null}
			</div>
		</>
	);
}

function Modal(props) {
	return (
		<div className="modal h-100">
			<h4>{props.blogList[props.clickedIdx]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
