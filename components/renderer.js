import * as React from 'react';

export const Renderer = ({ children, onRender }) => {
	React.useLayoutEffect(() => {
		onRender?.();
	}, []);
	return <div>{children()}</div>;
};
