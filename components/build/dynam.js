export const createMyDynam = (i) => {
	const color = `#${i}${i}${i}`;

	return () => {
		return (
			<>
				<div className="myClass">Контент компонента</div>
				<style jsx>{`
					.myClass {
						color: ${color};
					}
				`}</style>
			</>
		);
	};
};
