import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PipelineInsurance.com",
  description:
    "Privacy policy for PipelineInsurance.com — how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950 text-gray-100">
        {/* Header */}
        <section className="bg-gray-900 border-b border-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">
              Effective Date: June 1, 2025 &nbsp;|&nbsp; Last Updated: June 19, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                PipelineInsurance.com is operated by Contractors Choice Agency (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                We are committed to protecting your personal information and your right to privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                https://pipelinerinsurance.com or contact us for insurance quotes and services.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
                Questions or concerns? Contact us at josh@contractorschoiceagency.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when you request a quote, fill out a contact
                form, or otherwise interact with us. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Full name and business name</li>
                <li>Email address and phone number</li>
                <li>Business address and operating states</li>
                <li>Type of contracting work and number of employees</li>
                <li>Annual payroll, revenue, and project details</li>
                <li>Prior insurance history and claims history</li>
                <li>Equipment types and vehicle information</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We also automatically collect certain information when you visit our site, including IP address, browser
                type, operating system, referring URLs, pages viewed, and time spent on pages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Prepare and deliver insurance quotes for your review</li>
                <li>Communicate with you about your insurance needs and policy options</li>
                <li>Process insurance applications and bind coverage on your behalf</li>
                <li>Respond to your inquiries, questions, and customer service requests</li>
                <li>Send you administrative information such as policy updates and renewal notices</li>
                <li>Send marketing and promotional communications (you may opt out at any time)</li>
                <li>Improve and optimize our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Detect and prevent fraud or other illegal activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong className="text-white">Insurance Carriers:</strong> We share your information with insurance
                  companies for the purpose of obtaining quotes and binding coverage on your behalf.
                </li>
                <li>
                  <strong className="text-white">Service Providers:</strong> We may share your information with
                  third-party vendors who assist us in operating our website and conducting our business (e.g., CRM
                  software, email service providers, analytics platforms).
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong> We may disclose your information if
                  required by law, subpoena, court order, or other governmental authority.
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or
                  sale of assets, your information may be transferred as a business asset.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to collect and store information about your interactions
                with our website. Cookies help us understand how visitors use our site, remember your preferences, and
                improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie
                is being sent. However, some parts of our website may not function properly without cookies.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We may use Google Analytics and other analytics tools to track website usage. These tools may collect
                information about your use of our site and other websites. You can opt out of Google Analytics by
                installing the Google Analytics opt-out browser add-on.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate administrative, technical, and physical security measures to protect your
                personal information from unauthorized access, disclosure, alteration, or destruction. We use
                industry-standard SSL/TLS encryption for data transmission. However, no method of transmission over the
                internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. Insurance-related
                records may be retained for a minimum of 7 years in accordance with applicable insurance regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to data portability (where applicable)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at josh@contractorschoiceagency.com or by phone at
                844-967-5247. We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. California Privacy Rights (CCPA)</h2>
              <p className="text-gray-300 leading-relaxed">
                California residents have additional rights under the California Consumer Privacy Act (CCPA). You have
                the right to know what personal information we collect, the right to delete your personal information,
                and the right to opt out of the sale of personal information. We do not sell personal information. To
                submit a CCPA request, contact us at josh@contractorschoiceagency.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites and services. We are not responsible for the
                privacy practices or content of those sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have inadvertently collected information from a minor,
                please contact us immediately so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on this page with an updated effective date. Your continued use of our website
                after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-6 border border-gray-800">
                <p className="text-white font-semibold text-lg mb-2">Contractors Choice Agency</p>
                <p className="text-gray-300">12220 E Riggs Rd, Chandler, AZ 85249</p>
                <p className="text-gray-300">Phone: <a href="tel:8449675247" className="text-orange-400 hover:text-orange-300">844-967-5247</a></p>
                <p className="text-gray-300">Email: <a href="mailto:josh@contractorschoiceagency.com" className="text-orange-400 hover:text-orange-300">josh@contractorschoiceagency.com</a></p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
