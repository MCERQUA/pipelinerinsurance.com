import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | PipelineInsurance.com",
  description:
    "Terms of service for PipelineInsurance.com — the terms and conditions governing your use of our website and insurance services.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950 text-gray-100">
        {/* Header */}
        <section className="bg-gray-900 border-b border-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 text-lg">
              Effective Date: June 1, 2025 &nbsp;|&nbsp; Last Updated: June 19, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Contractors
                Choice Agency (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the operator of PipelineInsurance.com. By accessing
                or using our website at https://pipelinerinsurance.com, you agree that you have read, understood, and
                agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                If you do not agree with any of these Terms, you are prohibited from using or accessing this site.
                We reserve the right to modify these Terms at any time. Continued use of the site after changes
                constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of the Website</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a manner that does not infringe the
                rights of others. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the site in any way that violates applicable federal, state, or local laws or regulations</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
                <li>Attempt to gain unauthorized access to any portion of the website or its related systems</li>
                <li>Use automated scripts, bots, or scrapers to collect information from the website without our consent</li>
                <li>Upload or transmit viruses, malware, or any other malicious code</li>
                <li>Use the website to solicit personal information from anyone under 18 years of age</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Insurance Services — Important Disclosures</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">No Coverage Until Bound:</strong> Information provided on this website,
                including quote estimates, does not constitute an offer of insurance coverage. No coverage is in force
                until an insurance policy has been formally issued and bound by an insurance carrier and confirmed in
                writing by Contractors Choice Agency.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Accuracy of Information:</strong> Insurance quotes are based on
                information you provide. Any inaccurate or incomplete information may result in incorrect quotes,
                policy changes, cancellation, or denial of claims. It is your responsibility to ensure all information
                submitted is accurate and complete.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">State Availability:</strong> While we are licensed in all 50 states,
                specific coverages, rates, and policy forms vary by state and carrier. Not all coverages described
                on this website may be available in your state.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">No Legal or Tax Advice:</strong> Content on this website is for general
                informational purposes only. Nothing on this site constitutes legal, financial, or tax advice. Consult
                qualified professionals for advice specific to your situation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                The content on this website — including text, graphics, logos, images, and software — is the property
                of Contractors Choice Agency or its content suppliers and is protected by United States and
                international copyright, trademark, and other intellectual property laws. You may not reproduce,
                distribute, modify, create derivative works from, publicly display, or commercially exploit any
                content from this site without our prior written consent.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                You are granted a limited, non-exclusive, non-transferable license to access and use this website
                for your personal, non-commercial use in connection with obtaining insurance services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. User-Submitted Information</h2>
              <p className="text-gray-300 leading-relaxed">
                By submitting information through our quote forms, contact forms, or other channels, you grant us the
                right to use that information to provide you with insurance quotes and services, to contact you
                regarding your inquiry, and as described in our Privacy Policy. You represent and warrant that any
                information you provide is accurate, current, and complete.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links and Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites, including insurance carrier websites, industry
                resources, and partner services. These links are provided for your convenience only. We have no control
                over, and assume no responsibility for, the content, privacy policies, or practices of any third-party
                sites or services. We do not warrant the offerings of any third-party entities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                THIS WEBSITE AND ITS CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, CONTRACTORS
                CHOICE AGENCY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
                SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE IS FREE
                OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CONTRACTORS CHOICE AGENCY AND ITS OFFICERS,
                DIRECTORS, EMPLOYEES, AGENTS, AND SUCCESSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA,
                OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THIS WEBSITE OR INABILITY TO USE
                THIS WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE
                TERMS OR YOUR USE OF THE SITE EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING THE SITE
                DURING THE TWELVE MONTHS PRIOR TO THE CLAIM.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Contractors Choice Agency and its officers,
                directors, employees, agents, and successors from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising
                out of or relating to your violation of these Terms or your use of the website, including but not
                limited to any information you submit, any content you post, and any breach of your representations
                and warranties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Arizona,
                without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms
                or your use of this website shall be subject to the exclusive jurisdiction of the state and federal
                courts located in Maricopa County, Arizona, and you consent to personal jurisdiction in those courts.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Before initiating any formal dispute, you agree to contact us and attempt to resolve the dispute
                informally by providing written notice of your claim. We will attempt to resolve the dispute within
                30 days of receiving your notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of this website is also governed by our Privacy Policy, which is incorporated into these
                Terms by reference. Please review our{" "}
                <a href="/privacy" className="text-orange-400 hover:text-orange-300 underline">
                  Privacy Policy
                </a>{" "}
                to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Severability</h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid under applicable law, that
                provision will be limited or eliminated to the minimum extent necessary so that the remaining
                provisions of these Terms will otherwise remain in full force and effect and enforceable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Entire Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                Contractors Choice Agency with respect to your use of this website and supersede all prior and
                contemporaneous agreements, understandings, and communications, whether written or oral.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
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
