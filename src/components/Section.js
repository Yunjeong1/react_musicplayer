import React from 'react';
import Article from './Article';

//image import
import pic1 from '../img/Blizzards.jpg';
import pic2 from '../img/Calm.jpg';
import pic3 from '../img/Dusty_Road.jpg';
import pic4 from '../img/Escape.jpg';
import pic5 from '../img/Payday.jpg';
import pic6 from '../img/Retreat.jpg';
import pic7 from '../img/Seasonal.jpg';
import pic8 from '../img/Vespers.jpg';
const imgs = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

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
				return <Article key={idx} data={data} imgSrc={imgs[idx]} />;
			})}
		</section>
	);
}

export default Section;
