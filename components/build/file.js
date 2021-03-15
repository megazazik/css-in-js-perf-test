import styles from './build.jsx.module.css';

export const MyFileComponentForBuild = () => {
	return (
		<>
			<div className="myClass">Контент компонента</div>
			<style jsx>{styles}</style>
		</>
	);
};
