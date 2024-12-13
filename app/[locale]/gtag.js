import Script from 'next/script'

function Home() {
return (
	<div className="container">
		<Script
			src="https://www.googletagmanager.com/gtag/js?id=G-ZKDGGGZQGQ"
			strategy="afterInteractive"
		/>
		<Script id="google-analytics" strategy="afterInteractive">
			{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZKDGGGZQGQ');
        `}
		</Script>
	</div>
);
}

export default Home