"use client";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-fredoka">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 font-fredoka">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                By accessing and using STEMOrbit's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">2. Use License</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                Permission is granted to temporarily download one copy of the materials on STEMOrbit's 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">3. Course Enrollment and Payment</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                By enrolling in our courses, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Pay all applicable fees as specified at the time of enrollment</li>
                <li>Attend classes regularly and participate actively</li>
                <li>Follow all course guidelines and safety protocols</li>
                <li>Respect other students and instructors</li>
                <li>Complete assignments and assessments as required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">4. Refund Policy</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                Refunds are available under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Full refund if cancellation is made 7 days before course start date</li>
                <li>50% refund if cancellation is made within 48 hours of course start</li>
                <li>No refund after course has commenced</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                All content, materials, and intellectual property on this website, including but not 
                limited to text, graphics, logos, images, and software, are the property of STEMOrbit 
                and are protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">6. User Conduct</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Use the service for any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>Transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                <li>Impersonate or attempt to impersonate another person or entity</li>
                <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">7. Safety and Liability</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                STEMOrbit is committed to providing a safe learning environment. However, participation 
                in hands-on activities involves inherent risks. By enrolling in our programs, you acknowledge 
                these risks and agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Follow all safety instructions and guidelines</li>
                <li>Use provided safety equipment appropriately</li>
                <li>Report any unsafe conditions immediately</li>
                <li>Hold STEMOrbit harmless for any injuries resulting from failure to follow safety guidelines</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">8. Privacy</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the service, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">9. Termination</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">11. Contact Information</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                If you have any questions about these Terms and Conditions, please contact us:
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
