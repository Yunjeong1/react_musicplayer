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
전개 연산자 (Spread Operator)
- 참조형 자료를 완전복사 (deep copy)

변수에 배열이나 객체같은 참조형 자료를 할당하면
해당 변수에는 실제 값이 할당되는 것이 아닌 해당값이 위치해있는 주소값이 참조
//해당 배열의 값이 변수에 할당되는게 아닌 서로 다른 참조 주소가 할당되므로 
//아래 두값을 비교하면 다르다는 결과값이 출력
const arr1 = ['red', 'green', 'blue'];
const arr2 = ['red', 'green', 'blue'];
console.log(arr1 === arr2); //false

//원시형 자료는 실제 해당값이 변수에 할당되므로 같다고 출력
const a = 'apple';
const b = 'apple';
console.log(a === b); //true

//배열을 생성하고
let fruit = ['apple', 'mango', 'melon'];
//해당 배열을 새로운 배열로 옮겨담음 (복사)
let newfruit = fruit;
//복사된 배열의 첫번째값을 변경
newfruit[0] = 'orange';
//복사된 배열값 출력 (변경된 값으로 출력)
console.log(newfruit);
//변경하지 않은 원래 배열값도 같이 변경됨
console.log(fruit); //orange, mango, melon

//불변성 (immutable)
//참조형 자료를 복사할때는 원본 데이터와 비교할수 있도록 무조건 deep copy (원본파일 변경되는것을 방지하기 위함)
*/

/*
let fruit = ['apple', 'mango', 'melon'];
//전개연산자로 기존 참조값을 deep copy한 다음에 
let newfruit = [...fruit];
//완전복사된 값을 변경하면
newfruit[0] = 'orange';
console.log(newfruit);
//원본값에는 영향을 미치지 않음
console.log(fruit); //apple, mango, melon (원본 그대로 유지됨)
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

	//상태관리할 초기값을 useState함수에 인수로 전달하면
	//인수로 전달된 초기값을 state로 관리
	//배열을 리턴 - [state, state를 변경하는 함수]
	const [item, setItem] = useState(arr);

	return (
		<section>
			<button
				onClick={() => {
					//불변성을 유지하기 위해 기존 데이터를 deep copy한 다음에 데이터 수정
					let newItem = [...item];
					newItem[0] = 'Calm';
					//수정된 데이터는 무조건 state변경함수로만 변경 가능
					//해당 함수로 변경해야 변경된 부분이 재 렌더링된 후, 화면에 반영됨
					setItem(newItem);
				}}>
				이미지 변경
			</button>
			{/* item이라는 state에 옮겨담은 값으로 컴포넌트 반복 출력 */}
			{item.map((data, idx) => {
				//부모요소에서 자식 컴포넌트로 prop(이라는 data를)을 통해서 특정 데이터 전달 가능
				return <Article key={idx} data={data} index={idx} />;
			})}
		</section>
	);
}

export default Section;
