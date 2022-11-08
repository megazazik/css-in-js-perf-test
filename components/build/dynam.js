export const createMyDynam = (i, j) => {
	const color = `#${i}${i}${i}`;

	return () => {
		return (
			<>
				<div className="myClass">Контент компонента</div>
				<style jsx>{`
					.myClass {
						color: ${color};
						z-index: ${j};
					}
				`}</style>
			</>
		);
	};
};
