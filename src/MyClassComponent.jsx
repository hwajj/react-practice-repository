import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClassComponent extends Component {
	render() {
		const { name, children } = this.props;
		return (
			<div>
				제이름은 {name || '무엇'}! "{children}"
			</div>
		);
	}
}

MyClassComponent.defaultProps = {
	name: '클래스컴포넌트',
};

MyClassComponent.propTypes = {
	name: PropTypes.string.isRequired,
};

export default MyClassComponent;
