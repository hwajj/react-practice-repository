import React from 'react';

const MyComponent = (props) => {
	return (
		<div>
			{' '}
			제이름은 {props.name || '무엇'}! app이 하는 말 "{props.children}"
		</div>
	);
};
MyComponent.defaultProps = {
	name: '홍길동',
};

export default MyComponent;
