import React from "react";

import Input from "./Input";
import {
	withStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {openModal, closeModal} from '../actions/ModalActions';
class CustomModal extends React.Component {



	constructor(props) {
		super(props);
		this.modalStyle = this.getModalStyle();
		this.state = {
			open: false
		}
	}

	getModalStyle() {
		const top = 50 + Math.round(Math.random() * 20) - 10;
		const left = 50 + Math.round(Math.random() * 20) - 10;
		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	}

	render() {
		return (
			<div>
      <Button color="primary" onClick={this.props.openModal}>Open Modal</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.closeModal}
      >
        <div style={this.modalStyle} className={this.props.classes.paper}>
          <Typography variant="h6" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
      </Modal>
    </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		open: state.open
  };
};


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		openModal: openModal,
		closeModal: closeModal
	}, dispatch);
}

export default withStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4),
		outline: 'none',
	},
}))(connect(mapStateToProps, mapDispatchToProps)(CustomModal));