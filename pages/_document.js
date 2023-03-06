import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='fa'>
			<Head>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<meta
					name='theme-color'
					content='#000b1f'
				/>
				<link
					rel='apple-touch-icon'
					href='icon.png'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
