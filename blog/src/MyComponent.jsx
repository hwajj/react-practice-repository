import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
	const { name, children } = props;
	return (
		<div>
			제이름은 {name || '무엇'}! app이 하는 말 "{children}"
		</div>
	);
};

MyComponent.defaultProps = {
	name: '홍길동',
};

MyComponent.propTypes = {
	name: PropTypes.string.isRequired,
};

export default MyComponent;
