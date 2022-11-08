import styles from './styles.module.less'

export const WithStylesComponent = () => (
	<>
		<div className="myBlock">
			Это мой компонент со стилями
		</div>
		<style jsx>{styles}</style>
	</>
)