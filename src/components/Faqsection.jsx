import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/content";
import RevealSection from "../RevealSection";

function FaqSection() {
  return (
    <RevealSection className="faq section" id="faq">
      <div className="section-number">08</div>

      <div className="section-heading">
        <span className="small-label">QUESTIONS</span>
        <h2>
          BEFORE YOU
          <br />
          <span>ENTER.</span>
        </h2>
      </div>

      <div className="faq-list">
        {faqItems.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <ChevronDown size={20} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </RevealSection>
  );
}

export default FaqSection;
