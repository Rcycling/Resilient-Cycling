export default function FAQPage() {
  const faqs = [
    { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide with reliable carriers.' },
    { q: 'What payment methods are accepted?', a: 'We accept major credit cards and PayPal.' },
    { q: 'How can I track my order?', a: 'Tracking information will be emailed once your order ships.' }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h1>
        {faqs.map((f, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-gray-800">{f.q}</h2>
            <p className="text-gray-600 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
