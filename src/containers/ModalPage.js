import React from 'react';
import CustomModal from "../components/CustomModal";
import {
	openModal,
	closeModal
} from '../actions/ModalActions';
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';

class ModalPage extends React.Component {



	getModalStyle() {
		const top = 50 + Math.round(Math.random() * 20) - 10;
		const left = 50 + Math.round(Math.random() * 20) - 10;
		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
		this.modalStyle = this.getModalStyle();
	}



	render() {
		return (
			<div>
	  	<CustomModal style={this.modalStyle} transitionIn={this.props.transitionIn} body="OH yea this is a modal body" title="shiit, this is the title" isActive={this.props.isActive} onClick={this.props.openModal} onClose={this.props.closeModal}/>
	  </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isActive: state.Modal.isActive,
		transitionIn: state.Modal.transitionIn
	};
};


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		openModal: openModal,
		closeModal: closeModal
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)