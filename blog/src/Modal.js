import classes from './Modal.module.css';

function Modal(props) {
	return (
		<>
			<>
				<div className={classes.overlay} onClick={props.onCheck} />
				<div className={`${classes.modal} ${classes['h-100']}`}>
					<h4>{props.blogList[props.clickedIdx]}</h4>
					<p>날짜</p>
					<p>내용</p>
				</div>
			</>
		</>
	);
}

export default Modal;
