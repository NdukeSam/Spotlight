// import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

// type Props = {}

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        {/* <p className="text-sm text-gray-700 mb-6">Effective Date: [Insert Date]</p> */}

        <p className="text-lg mb-4">
            At <strong>Spotlight</strong>, your privacy is very important to us. This Privacy Policy outlines the types of
            personal information we may collect from you, how we use it, and how we protect it. Please read this policy carefully
            to understand our practices regarding your personal data.
        </p>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-2">a. Personal Information</h3>
            <ul className="list-disc ml-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            {/* <li>Phone number (if applicable)</li> */}
            <li>Any other information you provide directly to us</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">b. Non-Personal Information</h3>
            <ul className="list-disc ml-6 mb-4">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Cookies and similar technologies</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">
            We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc ml-6 mb-4">
            <li>To provide and improve our services</li>
            <li>To communicate with you, including sending updates and newsletters</li>
            <li>To respond to your inquiries</li>
            <li>To customize your experience on our platform</li>
            <li>To comply with legal obligations</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
            <p className="mb-4">
            We do not sell or share your personal information with third parties, except in the following situations:
            </p>
            <ul className="list-disc ml-6 mb-4">
            <li>When we have your explicit consent</li>
            <li>When required by law or to protect the rights, property, or safety of Spotlight</li>
            <li>With service providers who assist us in delivering our services (e.g., email service providers)</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
            We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc ml-6 mb-4">
            <li>Enhance your user experience</li>
            <li>Analyze traffic and usage patterns on our site</li>
            <li>Remember your preferences</li>
            </ul>
            <p className="mb-4">
            You can disable cookies through your browser settings, but doing so may affect the functionality of our platform.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However, please note that no method
            of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p className="mb-4">
            You have the following rights concerning your personal information:
            </p>
            <ul className="list-disc ml-6 mb-4">
            <li><strong>Access</strong>: You can request access to the personal data we hold about you.</li>
            <li><strong>Correction</strong>: You can request that we correct any inaccurate or incomplete information.</li>
            <li><strong>Deletion</strong>: You can request the deletion of your personal information.</li>
            <li><strong>Opt-Out</strong>: You can opt-out of receiving marketing communications from us at any time.</li>
            </ul>
        </section>

        {/* <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Changes to this Privacy Policy</h2>
            <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices. We will notify you of any
            significant changes by updating the "Effective Date" above. We encourage you to review this policy regularly.
            </p>
        </section> */}

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please
            contact us at:
            </p>
            <p className="mb-4">
            <strong>Email</strong>: support@spotlight.com<br />
            {/* <strong>Phone</strong>: [Insert Phone Number] */}
            </p>
        </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy;