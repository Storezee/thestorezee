import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FAQ() {
  const faqData = [
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "How is the pricing calculated for luggage storage?",
          answer:
            "Our pricing is per bag, per time slot (e.g., per 4 hours or per day). Our Standard Trip is based on a 4-hour slot, and the Traveler Pro plan covers up to 24 hours. Long-term storage (30+ days) is available for custom quotes.",
        },
        {
          question: "What is the difference between Standard Trip and Traveler Pro?",
          answer:
            "Standard Trip is for self-service drop-off/pickup at a Rakshak location and covers short-term storage (0-4 hours). Traveler Pro includes Door-to-Door Saathi Pickup/Delivery, priority support, enhanced insurance, and covers up to 24 hours.",
        },
        {
          question: "Can I modify or cancel my booking?",
          answer:
            "Yes, you can modify your booking details (like location and time) up to one hour before your scheduled drop-off time through the app. Cancellations are free if made at least 24 hours in advance.",
        },
      ],
    },
    {
      category: "Safety & Security",
      questions: [
        {
          question: "How safe is my luggage?",
          answer:
            "All bags are secured with unique tamper-proof seals upon drop-off. Our Rakshak locations are vetted, and every booking includes basic insurance coverage. The Traveler Pro plan offers enhanced insurance for high-value items.",
        },
        {
          question: "What items are prohibited from storage?",
          answer:
            "We strictly prohibit the storage of illegal items, weapons, perishable food, hazardous materials, and items of extreme monetary or sentimental value that exceed the insurance coverage limits. Please refer to our Terms of Service for a full list.",
        },
      ],
    },
    {
      category: "The StoreZee Saathi (Delivery)",
      questions: [
        {
          question: "What is a 'Saathi' and how does the delivery work?",
          answer:
            "A 'Saathi' is our trusted, background-verified delivery partner. If you opt for the Traveler Pro plan, they will pick up your luggage from your chosen location (like your hotel or residence) and deliver it to your specified drop-off point.",
        },
        {
          question: "How do I track my delivery and pickup?",
          answer:
            "You receive real-time updates and notifications through the app. For Saathi deliveries, you can track the partner's progress on a map, similar to ride-sharing apps, ensuring transparency and security.",
        },
      ],
    },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need Answers? Find Them Here
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Get instant answers to our most common questions about booking, safety, and our delivery service.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search for a question..."
                className="w-full pl-12 pr-6 py-3 h-14 rounded-full text-lg shadow-lg border-primary/20 focus:border-primary transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqData.map((section, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-primary/20 pb-2">
                  {section.category}
                </h2>
                <Card className="border-0 shadow-xl rounded-3xl">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((item, qIndex) => (
                        <AccordionItem 
                          key={qIndex} 
                          value={`item-${index}-${qIndex}`}
                          className="p-4 last:border-b-0 border-b"
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-gray-600 pt-3 pr-8">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is ready to help you with any specific queries you may have.
          </p>
          
          <a href="/contact">
            <button className="bg-primary text-white text-lg px-8 py-4 rounded-2xl hover:bg-primary/90 transition shadow-lg">
              Contact Our Support Team
            </button>
          </a>
        </div>
      </section>
    </div>
  );
} 