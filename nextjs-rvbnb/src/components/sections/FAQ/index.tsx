import { Section } from '@/components/ui/Section';
import { FAQList } from './FAQList';

export function FAQ() {
  return (
    <Section title="Frequently Asked Questions" className="bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <FAQList />
      </div>
    </Section>
  );
}