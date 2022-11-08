import * as React from 'react';
import { Renderer } from './renderer';
import styles from './styles.module.css';
import { createUseStyles } from 'react-jss';
// import { createMyDynamic } from '../components/build/dynamic';
import { createMyDynam } from '../components/build/dynam';
// import { newWithOldJsx } from './oldJsx';

export const Runner = () => {
	const [lastDuration, setDuration] = React.useState(0);

	const [runIndex, setIndex] = React.useState(0);

	const onClick = () => {
		performance.mark('rendering-start');
		setIndex((i) => i + 1);
	};

	const onRender = () => {
		performance.mark('rendering-stop');
		performance.measure('rendering', 'rendering-start', 'rendering-stop');

		const measure = performance.getEntriesByName('rendering')[0];

		performance.clearMarks();
		performance.clearMeasures();
		performance.clearResourceTimings();

		setDuration(measure.duration);
	};

	const [type, setType] = React.useState('CSS');

	const factories = {
		// JSX: newWithJsx,
		// JSX: newWithOldJsx,
		// JSX: createMyDynamic,
		JSX: createMyDynam,
		JSXCached: newWithJsxCached,
		JSS: newWithJss,
		CSS: newWithCssModules,
	};

	const newComponent = factories[type];

	return (
		<div>
			<h3>Performance test. Last duration: {lastDuration}</h3>
			<div>
				<label>
					<input
						type="radio"
						name="type"
						value="CSS"
						checked={type === 'CSS'}
						onChange={() => setType('CSS')}
					/>
					CSS
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="type"
						value="JSX"
						checked={type === 'JSX'}
						onChange={() => setType('JSX')}
					/>
					JSX
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="type"
						value="JSXCached"
						checked={type === 'JSXCached'}
						onChange={() => setType('JSXCached')}
					/>
					JSX Repeated
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="type"
						value="JSS"
						checked={type === 'JSS'}
						onChange={() => setType('JSS')}
					/>
					JSS
				</label>
			</div>
			<div>
				<button onClick={onClick}>Start</button>
			</div>
			{runIndex !== 0 && (
				<div>
					<Renderer key={`run${runIndex}`} onRender={onRender}>
						{() =>
							Array.from({
								length: 1000,
							}).map((_, i) => {
								const Component = newComponent(i, runIndex);
								return <Component key={i} />;
							})
						}
					</Renderer>
				</div>
			)}
		</div>
	);
};

const newWithCssModules = (i, j) => {
	const classes = { [`myClass${i}`]: styles.myClass };
	return () => (
		<div className={classes[`myClass${i}`]}>
			{j}. Item{i}
		</div>
	);
};

const newWithJsx = (i, j) => {
	const margin = `1.${i}${j}px`;
	return () => {
		return (
			<div>
				{j}. Item{i}
				<style jsx>{`
					div {
						color: blue;
						margin-bottom: ${margin};
					}
				`}</style>
			</div>
		);
	};
};

const newWithJsxCached = (i, j) => {
	const margin = `1.${i}px`;
	return () => {
		return (
			<div>
				{j}. Item{i}
				<style jsx>{`
					div {
						color: blue;
						margin-bottom: ${margin};
					}
				`}</style>
			</div>
		);
	};
};

const newWithJss = (i, j) => {
	const useStyles = createUseStyles({
		myClass: {
			color: 'green',
		},
	});

	return () => {
		const styles = useStyles();
		return (
			<div className={styles.myClass}>
				{j}. Item{i}
			</div>
		);
	};
};
