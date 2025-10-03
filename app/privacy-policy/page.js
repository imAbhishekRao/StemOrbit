"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-fredoka">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 font-fredoka">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We collect information you provide directly to us, such as when you create an account, 
                register for courses, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Course preferences and educational background</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Personalize your learning experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">4. Data Security</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">5. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">6. Children's Privacy</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                Our services are designed for educational purposes and may be used by children under 
                parental supervision. We do not knowingly collect personal information from children 
                under 13 without parental consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">7. Your Rights</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">8. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">9. Contact Us</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg font-fredoka">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@stemorbit.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 7009594410</p>
                <p className="text-gray-700"><strong>Address:</strong> STEMOrbit Technologies, SCO-04, 1st Floor, Mehma Singh Complex, Opp. Jal Vayu Towers, Gate 3, New Sunny Enclave, Kharar, Sector-125, (Mohali) Punjab - 140301</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
