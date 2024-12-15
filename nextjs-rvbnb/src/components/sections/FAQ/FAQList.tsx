import { faqData } from '@/data/content';

export function FAQList() {
  return (
    <div className="space-y-6">
      {faqData.map((item) => (
        <div
          key={item.id}
          className="bg-gray-50 rounded-lg p-6 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
          <p className="text-gray-600">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}