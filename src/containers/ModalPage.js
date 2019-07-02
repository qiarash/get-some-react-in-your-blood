import React from 'react';
import Form from '../components/Form';
import CustomModal from "../components/CustomModal";
import {
	Redirect
} from "react-router-dom";

export default class ModalPage extends React.Component {


	constructor(props) {
		super(props);	
	}

	render() {
	  return (
	  <div>
	  	<CustomModal />
	  </div>
	  
		);
	}
}