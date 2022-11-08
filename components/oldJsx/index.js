import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
	div {
		color: yellow;
		margin-bottom: 1px;
	}
`;

export const newWithOldJsx = (i, j) => {
	// const margin = `1.${i}${j}px`;

	return () => {
		return (
			<div>
				{j}. Item{i}
				<style jsx>{styles}</style>
				{/* <style jsx>{`
					div {
						color: pink;
						margin-bottom: ${margin};
					}
				`}</style> */}
			</div>
		);
	};
};
