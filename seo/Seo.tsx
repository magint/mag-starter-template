import { siteConfig } from "@/lib/config";
import { getMediaURL } from "@/lib/utils";
import Head from "next/head";
import Script from "next/script";


const Seo = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.site.name,
    url: siteConfig.site.url,
    description: siteConfig.site.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.site.name,
      logo: {
        "@type": "ImageObject",
        url: getMediaURL("<ROUTE TO THE WEBSITE LOGO>"), // TODO: set the website logo url
      },
    },
    image: {
      "@type": "ImageObject",
      url: getMediaURL("<ROUTE TO THE WEBSITE LOGO>"), // TODO: set the website logo url
      width: 1200,
      height: 630,
    },
  };

  return (
    <Head>
      {siteConfig.seo.yandex && (
        <meta name="yandex-verification" content={siteConfig.seo.yandex} />
      )}{" "}
      {/* Add yandex verification */}
      {siteConfig.seo.googleSiteVerification && (
        <meta
          name="google-site-verification"
          content={siteConfig.seo.googleSiteVerification}
        />
      )}
      <meta name="robots" content="max-image-preview:large" />
      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/brand/favicon/apple-touch-icon.png" // TODO: add the apple touch icon
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/brand/favicon/favicon-96x96.png" // TODO: add the 96x96 favicon
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/brand/favicon/favicon.ico" // TODO: add the favicon.ico file
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/images/brand/favicon/favicon.svg" // TODO: add the favicon.svg file
      />
      <link rel="manifest" href="/images/brand/favicon/site.webmanifest" />{" "}
      {/* TODO: add the site.webmanifest file */}
      <meta name="theme-color" content="#ffffff" />
      {/* Android specific */}
      <meta name="mobile-web-app-capable" content="yes" />
      <link
        rel="icon"
        sizes="192x192"
        href="/images/brand/favicon/web-app-manifest-192x192.png" // TODO: add the link to the 192x192 favicon for android devices
      />
      <link
        rel="icon"
        sizes="512x512"
        href="/images/brand/favicon/web-app-manifest-512x512.png" // TODO: add the link to the 512x512 favicon for android devices
      />
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      {/* Google Tag Manager & Consent */}
      {siteConfig.google.gtm && <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag("consent", "default", {
                ad_storage: "denied",
                analytics_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
              });

              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l !== "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "${siteConfig.google.gtm}");
            `,
        }}
      />}
    </Head>
  );
};
export default Seo;
