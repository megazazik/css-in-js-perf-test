export const newWithOldJsx = (i, j) => {
	const margin = `1.${i}${j}px`;
	return () => {
		return (
			<div>
				{j}. Item{i}
				<style jsx>{`
					div {
						color: pink;
						margin-bottom: ${margin};
					}
				`}</style>
			</div>
		);
	};
};
