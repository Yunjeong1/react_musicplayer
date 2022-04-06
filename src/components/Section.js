import React, { useState } from 'react';
import Article from './Article';

//hook: 컴포넌트 안쪽에 다양한 기능을 도와주는 모듈
//useState: 컴포넌트의 랜더링에 관여하는 중요한 정보값을 관리해주는 훅

/*
구조분해 할당
비구조화 할당
destructuring assignment;

//각 배열의 데이터를 구조분해 할당을 이용해서 원하는 변수명으로 한번에 할당
const fruit = ['apple', 'pear', 'melon'];
const [a,b,c] = fruit;

const student = {
	name: '홍길동',
	age: 20,
	isFemale: false,
}
const {name, age, isFemale} = student;

*/

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
		'Vespers',
	];

	return (
		<section>
			{arr.map((data, idx) => {
				//부모요소에서 자식 컴포넌트로 prop(이라는 data를)을 통해서 특정 데이터 전달 가능
				return <Article key={idx} data={data} index={idx} />;
			})}
		</section>
	);
}

export default Section;
