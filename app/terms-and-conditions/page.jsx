const SITE_URL = "https://www.courtnews.org";

export const metadata = {
  title: "Terms and Conditions | CourtNews",
  description:
    "Official Terms and Conditions for using CourtNews, including content usage rights, disclaimers, and limitations of liability.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms and Conditions | CourtNews",
    description:
      "Review the legal terms that govern access to and use of CourtNews — independent reporting on courts, justice, and legal accountability.",
    url: `${SITE_URL}/terms-and-conditions`,
    type: "website",
    siteName: "CourtNews",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - CourtNews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CourtNews Terms and Conditions",
    description:
      "The legal terms and conditions that apply when accessing or using CourtNews content and services.",
    images: [`${SITE_URL}/images/courtnews-logo.webp`],
  },
};

export default function TermsAndConditions() {
  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            url: `${SITE_URL}/terms-and-conditions`,
            description:
              "Terms and Conditions governing the use of CourtNews, an independent U.S. news platform focused on courts and justice.",
            publisher: {
              "@type": "NewsMediaOrganization",
              name: "CourtNews",
              url: SITE_URL,
            },
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        id="terms-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Terms and Conditions",
                item: `${SITE_URL}/terms-and-conditions`,
              },
            ],
          }),
        }}
      />

      <main className="mx-auto max-w-7xl  px-4 sm:px-6 py-16 md:py-15 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-lg prose-indigo">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: February 9, 2026
            </p>
          </div>

          <p>
            Welcome to <strong>CourtNews</strong>. These Terms and Conditions
            ("Terms") govern your access to and use of our website located at
            courtnews.org and any related services (collectively, the
            "Service").
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you do not agree with any part of these Terms, you must
            not use the Service.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            1. Use of the Service
          </h2>
          <p>
            You may use the Service only for lawful purposes and in accordance
            with these Terms. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Violate any applicable federal, state, or local law or regulation
            </li>
            <li>
              Infringe the intellectual property rights or other rights of
              others
            </li>
            <li>
              Transmit viruses, malware, worms, or any other harmful or
              disruptive code
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Service
            </li>
            <li>
              Use automated systems (bots, scrapers, crawlers) to access,
              monitor, or collect content without express written permission
            </li>
            <li>
              Engage in harassment, threats, impersonation, or any abusive
              behavior
            </li>
          </ul>

          <h2 className="font-semibold py-3 text-lg mt-10">
            2. Intellectual Property
          </h2>
          <p>
            All content published on CourtNews — including articles, analysis,
            headlines, photographs, graphics, and site design — is owned by
            CourtNews or its content licensors and is protected by United States
            and international copyright, trademark, and other intellectual
            property laws.
          </p>
          <p>
            You are permitted to view, access, and print individual articles for
            your personal, non-commercial use only. Any other use — including
            republication, redistribution, syndication, commercial use, or
            creation of derivative works — is strictly prohibited without our
            prior written consent.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            3. User-Generated Content (If Enabled)
          </h2>
          <p>
            At present, CourtNews does not enable public comments or user
            submissions. If we introduce such features in the future, you will
            retain ownership of any content you submit, but you grant CourtNews
            a worldwide, non-exclusive, royalty-free, perpetual, irrevocable
            license to use, reproduce, modify, adapt, publish, translate,
            distribute, and display that content in any form or medium.
          </p>
          <p>
            You agree that any content you submit will not violate any law or
            infringe third-party rights and will not be unlawful, defamatory,
            obscene, abusive, or otherwise inappropriate. We reserve the right
            to remove or refuse any content at our sole discretion.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            4. Accuracy and Reliability of Information
          </h2>
          <p>
            CourtNews strives to provide accurate, timely, and well-sourced
            reporting. However, we do not warrant or guarantee that all
            information is complete, correct, current, or free from error. The
            Service is provided for general informational purposes only and does
            not constitute legal, financial, professional, or other advice.
          </p>
          <p>You use and rely on the content at your own risk.</p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            5. Third-Party Links and Services
          </h2>
          <p>
            The Service may contain links to third-party websites, documents, or
            services. We do not endorse, control, or assume responsibility for
            the content, privacy practices, or availability of any third-party
            sites. Accessing them is at your own risk.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            6. Disclaimer of Warranties
          </h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
            WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT
            NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            7. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, COURTNEWS, ITS OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY
            DAMAGES ARISING FROM OR RELATING TO YOUR USE OF OR INABILITY TO USE
            THE SERVICE.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless CourtNews and its
            affiliates, officers, directors, employees, and agents from and
            against any claims, liabilities, damages, losses, costs, and
            expenses (including reasonable attorneys' fees) arising out of or
            related to your violation of these Terms or your use of the Service.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            9. Changes to These Terms
          </h2>
          <p>
            We may modify these Terms at any time. The updated version will be
            posted on this page with a revised "Last updated" date. Your
            continued use of the Service following any changes constitutes your
            acceptance of the revised Terms.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">
            10. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of
            Massachusetts, United States, without regard to its conflict of law
            principles. Any legal action or proceeding arising out of or
            relating to these Terms shall be brought exclusively in the state or
            federal courts located in Boston, Massachusetts.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">11. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms and Conditions,
            please contact us at:
          </p>
          <p className="font-medium text-indigo-700 mt-4">
            legal@courtnews.org
          </p>

          {/* <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CourtNews. All rights reserved.
          </div> */}
        </div>
      </main>
    </>
  );
}
