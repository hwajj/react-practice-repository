import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Modal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<>
					<div className={classes.overlay} onClick={props.onCheck} />
					<div className={`${classes.modal} ${classes['h-100']}`}>
						<h4>{props.blogList[props.clickedIdx]}</h4>
						<p>날짜</p>
						<p>내용</p>
					</div>
				</>,
				document.getElementById('modal-root')
			)}
		</>
	);
}

export default Modal;
