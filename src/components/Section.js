import React from 'react';
import Article from './Article';

/*
  단방향 데이터 바인딩
  - 부모컴포넌트에서 자식 컴포넌트로 데이터를 전달 가능
  - 부모에서 자식요소로 데이터를 전달할때는 prop을 통해서 전달

*/

function Section() {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
	];

	return (
		<section>
			{arr.map((data, idx) => {
				//부모요소에서 자식 컴포넌트로 prop(이라는 data를)을 통해서 특정 데이터 전달 가능
				return <Article key={idx} data={data} />;
			})}
		</section>
	);
}

export default Section;
