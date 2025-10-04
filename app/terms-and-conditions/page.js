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
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">4. Electronics Components and In-Store Sales</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                When purchasing electronics components and materials from our physical retail store, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Provide accurate contact information for warranty and support purposes</li>
                <li>Pay all applicable taxes at the time of purchase</li>
                <li>Verify product specifications before purchase</li>
                <li>Use components according to manufacturer specifications and safety guidelines</li>
                <li>Follow proper handling and storage procedures for electronic components</li>
                <li>Report any defective products within the specified warranty period</li>
                <li>Comply with all applicable electronics and safety regulations</li>
                <li>Present valid identification when required for certain component purchases</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">5. Refund and Return Policy</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                <strong>Course Refunds:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Full refund if cancellation is made 7 days before course start date</li>
                <li>50% refund if cancellation is made within 48 hours of course start</li>
                <li>No refund after course has commenced</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ul>
              <p className="text-gray-700 mb-4 font-fredoka">
                <strong>Electronics Components Returns (In-Store):</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Returns accepted within 15 days of purchase for unused components</li>
                <li>Components must be in original packaging with all accessories</li>
                <li>Defective products covered under manufacturer warranty</li>
                <li>Custom or special order items are non-returnable</li>
                <li>Returns must be made in person at our physical store location</li>
                <li>Original receipt or proof of purchase required for all returns</li>
                <li>Refunds processed immediately for cash purchases, 3-5 business days for card purchases</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                All content, materials, and intellectual property on this website, including but not 
                limited to text, graphics, logos, images, and software, are the property of STEMOrbit 
                and are protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">7. User Conduct</h2>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">8. Safety and Liability</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                STEMOrbit is committed to providing a safe learning environment and quality electronics components 
                at our physical retail store. However, participation in hands-on activities and use of electronic 
                components involves inherent risks. By enrolling in our programs or purchasing components in-store, 
                you acknowledge these risks and agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Follow all safety instructions and guidelines for both courses and component usage</li>
                <li>Use provided safety equipment appropriately</li>
                <li>Handle electronic components according to manufacturer specifications</li>
                <li>Report any unsafe conditions or defective products immediately</li>
                <li>Ensure proper electrical safety practices when working with components</li>
                <li>Hold STEMOrbit harmless for any injuries resulting from failure to follow safety guidelines</li>
                <li>Use components only for their intended purpose and within specified parameters</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">9. Privacy</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the service, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">10. Termination</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">12. Electronics Components Warranty and Support</h2>
              <p className="text-gray-700 mb-4 font-fredoka">
                <strong>Warranty Coverage:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>All electronics components purchased in-store come with manufacturer warranty as specified</li>
                <li>Warranty periods vary by component type and manufacturer</li>
                <li>Warranty covers manufacturing defects under normal use conditions</li>
                <li>Physical damage, misuse, or modification voids warranty</li>
                <li>Warranty claims must be submitted in person at our store or via contact information provided</li>
                <li>Original receipt required for all warranty claims</li>
              </ul>
              <p className="text-gray-700 mb-4 font-fredoka">
                <strong>Technical Support:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 font-fredoka">
                <li>Basic technical support provided for in-store purchased components</li>
                <li>In-person consultation available at our retail store during business hours</li>
                <li>Support includes datasheet interpretation and basic troubleshooting</li>
                <li>Advanced project support available by appointment</li>
                <li>Complex project support may require additional consultation fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-fredoka">13. Contact Information</h2>
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

