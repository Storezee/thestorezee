export default function Refund() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Refund Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Eligibility</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer refunds based on the timing of your cancellation and specific circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li><strong>More than 2 hours before pickup:</strong> 100% refund</li>
                <li><strong>30 minutes to 2 hours before pickup:</strong> 75% refund (25% processing fee)</li>
                <li><strong>Less than 30 minutes before pickup:</strong> 50% refund</li>
                <li><strong>No-show or failure to be present:</strong> No refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Issues</h2>
              <p className="text-gray-600 leading-relaxed">
                If we fail to provide the service as promised, you may be eligible for a full refund:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Saathi partner fails to arrive for scheduled pickup</li>
                <li>Storage location is unavailable or inaccessible</li>
                <li>Significant delays beyond our estimated timeframes</li>
                <li>Technical issues preventing service completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Damage or Loss</h2>
              <p className="text-gray-600 leading-relaxed">
                In the rare event of damage or loss to your luggage:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Full service fee refund plus insurance claim processing</li>
                <li>Coverage up to ₹5,000 per bag for verified damage or loss</li>
                <li>Additional compensation may apply based on circumstances</li>
                <li>Immediate investigation and resolution process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Request a Refund</h2>
              <p className="text-gray-600 leading-relaxed">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-600 mt-4 space-y-2">
                <li>Cancel your booking through the Storezee app</li>
                <li>Contact our support team within 24 hours</li>
                <li>Provide your booking ID and reason for refund</li>
                <li>Submit any required documentation</li>
                <li>Await confirmation and processing</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Processing Time</h2>
              <p className="text-gray-600 leading-relaxed">
                Refund processing times vary by payment method:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li><strong>UPI/Digital wallets:</strong> 1-2 business days</li>
                <li><strong>Credit/Debit cards:</strong> 3-7 business days</li>
                <li><strong>Net banking:</strong> 2-5 business days</li>
                <li><strong>Bank transfers:</strong> 1-3 business days</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Note: Processing times may be longer during high-volume periods or bank holidays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partial Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                Partial refunds may apply in these situations:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Service partially completed before cancellation</li>
                <li>Late cancellations as per our policy</li>
                <li>Changes to service requirements mid-booking</li>
                <li>Third-party fees that cannot be recovered</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Non-Refundable Situations</h2>
              <p className="text-gray-600 leading-relaxed">
                Refunds will not be provided in these cases:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>No-show without prior cancellation</li>
                <li>Provision of incorrect pickup information</li>
                <li>Violation of terms of service</li>
                <li>Storage of prohibited items</li>
                <li>Completed services without valid complaint</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                If you disagree with our refund decision:
              </p>
              <ol className="list-decimal list-inside text-gray-600 mt-4 space-y-2">
                <li>Contact our customer support team to discuss</li>
                <li>Provide additional documentation if available</li>
                <li>Request escalation to management if needed</li>
                <li>Consider alternative resolution options</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Credits and Vouchers</h2>
              <p className="text-gray-600 leading-relaxed">
                In some cases, we may offer service credits or vouchers instead of cash refunds:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Credits for future bookings at full value</li>
                <li>Bonus credits for service inconveniences</li>
                <li>Vouchers valid for 12 months from issue date</li>
                <li>Transferable to friends and family</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact for Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                For refund requests or questions about this policy, contact us:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: info@thestorezee.com</p>
                <p>Phone: +91 70915 17586</p>
                <p>In-app support: Available 24/7</p>
                <p>Response time: Within 24 hours</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Updates</h2>
              <p className="text-gray-600 leading-relaxed">
                This refund policy may be updated periodically. Changes will be communicated through:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>App notifications for significant changes</li>
                <li>Email notifications to registered users</li>
                <li>Updates on our website and social media</li>
                <li>In-app announcements</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}