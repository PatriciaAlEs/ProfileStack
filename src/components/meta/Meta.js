import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "https://github.com/";
    const logo = "/assets/logo.png";
    const favicon = "/assets/favicon.ico";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ProfileStack",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: homepage,
        image: logo,
        description,
        keywords,
        isBasedOn: "ATSResume by Saurav Hathi",
    };

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={favicon} />
            <title>{title}</title>
            <meta type="copyright" content="ProfileStack" />
            <meta type="author" content="ProfileStack contributors" />
            <meta name="credits" content="Forked from ATSResume by Saurav Hathi" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={logo} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                key="jsonLd"
            />
        </Head>
    );
}
