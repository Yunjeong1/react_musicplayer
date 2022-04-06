import React from 'react';

function Article(props) {
	// console.log(props);
	return (
		<article>
			<h1>{props.data}</h1>
			<img src={props.imgSrc} />
		</article>
	);
}

export default Article;
