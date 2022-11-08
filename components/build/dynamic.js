import css from 'styled-jsx/css';

export const createMyDynamic = (i, j) => {
	var myClass = css`
		.myClass {
			color: brown;
			left: ${'0.' + i + j};
		}
	`;

	myClass = setHash(myClass);

	return () => {
		return (
			<>
				<div className="myClass">
					{j}. Item{i}
				</div>
				<style jsx>{myClass}</style>
			</>
		);
	};
};

function setHash(obj) {
	const hash = 'MyRandomHash' + String(Math.random()).slice(2);

	if (Array.isArray(obj)) {
		obj.__hash = hash;
		obj[0] = `.myClass.jsx-${obj.__hash}${obj[0].substring(
			obj[0].indexOf('{')
		)}`;
		return obj;
	}

	const newString = new String(
		`.myClass.jsx-${hash}${obj.substring(obj.indexOf('{'))}`
	);
	newString.__hash = hash;
	return newString;
	// console.log(obj, typeof obj);
}
