import React from 'react';

function Article(props) {
	console.log(props);
	return <article>{props.data}</article>;
}

export default Article;
