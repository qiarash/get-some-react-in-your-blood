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


	handleClick(e) {
		if (e.target.name === "forward") {
			this.props.goForward();

		} else {
			this.props.goBackwards();
		}
		this.props.history.push("" + this.props.id) // this actually does nothing afaik, but change URL.
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
	    <button name="backwards" onClick={(e) => this.handleClick(e)}> Back</button>
	    <button name="forward" onClick={(e) => this.handleClick(e)}> Forward </button>
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