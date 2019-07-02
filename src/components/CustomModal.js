import React from "react";

import {
	withStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


class CustomModal extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<div>
      <Button color="primary" onClick={this.props.onClick}>Open Modal</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isActive}
        onClose={this.props.onClose}
      >
        <div style={this.props.style} className={this.props.classes.paper}>
          <Typography variant="h6" id="modal-title">
           {this.props.title}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
           {this.props.body}
          </Typography>
        </div>
      </Modal>
    </div>
		);
	}
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
}))(CustomModal);