import './scss/style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

// fragment: 복수개의 컴포넌트를 wrapping tag로 감싸지 않고 그룹화시켜서 내보낼때
//JSX는 한번에 하나의 컴포넌트만 return 가능
//복수개의 요소로 return하고싶을때는 fragment로 감싸줌
//JSX안쪽에는 일반 주석을 쓸수없고 주석을 {}로 감싸서 적용
//JSX안쪽에서 연산이 필요한 구문은 무조건{} 감싸서 표현
//JSX안쪽에서는 제한적인 연산만 가능 - 변수치환, 삼항연산, map반복처리, 이벤트 연결
//JSX로 반복적인 요소를 내보낼때는 고유값으로 key값 부여해야함

function App() {
	return (
		<>
			{/* header */}
			<Header />
			<Section />
			<Footer />
		</>
	);
}

export default App;
