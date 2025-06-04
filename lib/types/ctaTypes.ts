export type MAGPayload = {
    budget: string
    companyName: string
    consent: boolean
    dialCode: string
    email: string
    environment: string
    firstName: string
    ipAddress: string
    landingURL: string
    lastName: string
    message: string
    mobile: string
    role: string 
    submissionArea: string
    token: string
    website: string
    recaptchaSiteKey: string
    expectedRecaptchaAction: string
}

export type CTAFormInputs = {
    fullName: string;
    email: string;
    dialCode: string
    mobile: string;
    company: string;
    message: string | null;
    consent: boolean
  }

export type ContactFormPayload = CTAFormInputs & { landingUrl: string, queryParams: string, formSource: string, executeRecaptcha: (action: string) => Promise<string> }