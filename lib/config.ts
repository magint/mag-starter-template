export const siteConfig = {
    env: {
      isProd:
        process.env.NODE_ENV === 'production' &&
        !['preview', 'development'].includes(process.env.VERCEL_ENV || ''),
      isDev: process.env.NODE_ENV === 'development',
      isPreview: process.env.VERCEL_ENV === "preview"
    },
    site: {
      title: '<TITLE FOR THE HOME PAGE>', // TODO: set the title of the home page
      name: '<WEBSITE NAME>', // TODO: set the name of the website
      description: '<SHORT DESCRIPTION OF THE WEBSITE>', // TODO: set a short description of the website
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', // TODO: set the url of the website
      leadsource: '<WEBSITE_LEADSOURCE_NAME>', //  TODO: set the leadsource name of this website,
      ogImage: "" // TODO: set the OG image src
    },
    mag: {
      backend: {
        url: process.env.MAG_BACKEND_BASE_URL || 'https://www.mag-example.com', // TODO: set the the mag backend api url
        apiKey: process.env.MAG_BACKEND_API_KEY || 'xyz', // TODO: set the MAG BE API key
      },
    },
    google: {
      gtm: {
        id: process.env.NEXT_PUBLIC_GTM_KEY, // TODO: set the GTM KEY
      },
      reCaptcha: {
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'GTM-RXYZ', // TODO: set the recaptcha site key
        secretKey: process.env.RECAPTCHA_SECRET_KEY || 'GTM-SXYZ', // TODO: set the recaptcha secret key
      },
    },
    seo: {
        googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_KEY, // TODO: set the Google Site Verification Key
        yandex: process.env.NEXT_PUBLIC_YANDEX_KEY // TODO: set the YANDEX KEY
    },
    aws: {
      cdn: {
        url: process.env.NEXT_PUBLIC_AWS_CDN_DOMAIN + '/<WEBSITE_S3_SLUG>', // TODO: set the AWS S3 project folder
      },
    },
  } as const;