import React from 'react';
import Form from '../components/Post.js';
import {
	Redirect,
	Link
} from "react-router-dom";

import {
	goForward,
	goBackwards,
	goForwardExact
} from '../actions/PostActions';
import {
	bindActionCreators
} from 'redux';
import Post from "../components/Post"
import {
	connect
} from 'react-redux';
import styled from 'styled-components'

const StyledButton = styled.button `
		  color: palevioletred;
		  font-weight: bold;
		`;

class PostPage extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			loaded: false, // move post to Reducer later??
			posts: []
		}
	}


	componentDidMount() {
		const idParam = this.props.match.params.id;
		this.props.goForwardExact(parseInt(idParam));
		fetch("http://www.mocky.io/v2/5d1db3d73000002a44d720f0") // could not get localhost json api calls to work with fetch. Maybe a directory issue.
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					posts: data,
					loaded: true
				})
			)
	}


	componentDidUpdate() {
		//console.log(this.props.match.params.id); // since using redux, match.params.id is already being tracked
	}


	handleClick(e) {
		if (e.target.name === "forward") {
			console.log("clicked forward");
			this.props.goForward(); // could just setState here but wanted to use redux
		} else {
			console.log("clicked backwards");
			this.props.goBackwards(); // could just use setState here but wanted to use redux
		}
		this.props.history.push("" + this.props.id)
	}


	render() {
		if (!this.state.loaded) {
			return (
				<div> 
			Data is loading 
			</div>
			);
		}
		const currentPost = <Post id={this.props.id} subject={this.state.posts[this.props.id].subject} post={this.state.posts[this.props.id].post} />
		return (
			<div>
	    <StyledButton name="backwards" onClick={(e) => this.handleClick(e)}> Back </StyledButton>
	    <StyledButton name="forward" onClick={(e) => this.handleClick(e)}> Forward </StyledButton>
		{currentPost}
	    </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		id: state.Post.id
	};
};


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		goForward,
		goForwardExact,
		goBackwards
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)