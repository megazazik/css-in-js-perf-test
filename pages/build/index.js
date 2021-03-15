import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { MyFileComponentForBuild } from '../../components/build/file';
import { MyInlineComponentForBuild } from '../../components/build/inline';
import { MyCssComponentForBuild } from '../../components/build/variable';
import { createMyDynamic } from '../../components/build/dynamic';
import { createMyDynam } from '../../components/oldJsx/dynam';

export default function Home() {
	const [hidden, setHidden] = React.useState(true);
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<MyFileComponentForBuild />
				<MyInlineComponentForBuild />
				<MyCssComponentForBuild />

				{Array(10)
					.fill(0)
					.map((_, i) => {
						const Component = createMyDynam(i);
						return <Component key={i} />;
					})}
				<div>
					<button onClick={() => setHidden(false)}>
						Show dynamic
					</button>
				</div>
				{!hidden &&
					Array(10)
						.fill(0)
						.map((_, i) => {
							const Component = createMyDynamic(i);
							return <Component key={i} />;
						})}
			</main>
		</div>
	);
}
