export const MyInlineComponentForBuild = () => {
	return (
		<>
			<div className="myClass">Контент компонента</div>
			<style jsx>{`
				.myClass {
					color: red;
				}
			`}</style>
		</>
	);
};
