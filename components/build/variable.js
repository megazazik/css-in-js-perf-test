import css from 'styled-jsx/css';

const myClass = css`
	.myClass {
		color: blue;
	}
`;

export const MyCssComponentForBuild = () => {
	return (
		<>
			<div className="myClass">Контент компонента</div>
			<style jsx>{myClass}</style>
		</>
	);
};
