import React from 'react';
import { Quote, Linkedin, Star, Verified } from 'lucide-react';

const recommendations = [
  {
    name: "Sarah Mitchell",
    role: "Engineering Director at Microsoft",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren is an exceptional technical leader who consistently delivers results. His ability to navigate complex challenges while maintaining team morale is remarkable. Under his leadership, our cloud infrastructure project was delivered ahead of schedule with outstanding quality.",
    company: "Microsoft",
    relation: "Worked directly with Hiren",
    endorsements: ["Technical Leadership", "Cloud Architecture", "Team Management"]
  },
  {
    name: "David Kumar",
    role: "CTO at TechVision",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "I had the pleasure of working with Hiren on multiple high-stakes projects. His technical expertise and strategic thinking transformed our development processes. He's not just a skilled engineer but a visionary who brings out the best in his team.",
    company: "TechVision",
    relation: "Senior to Hiren",
    endorsements: ["System Architecture", "Agile Leadership", "Innovation"]
  },
  {
    name: "Emily Zhang",
    role: "Product Director at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren's technical acumen and leadership skills are truly impressive. He successfully led our platform migration while ensuring zero downtime. His ability to balance technical excellence with business objectives makes him an invaluable asset.",
    company: "Amazon",
    relation: "Collaborated on projects",
    endorsements: ["Project Management", "Technical Strategy", "Leadership"]
  }
];

export default function Recommendations() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-4">
            <Linkedin className="h-6 w-6 text-[#0A66C2]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Endorsements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimonials from industry leaders and colleagues highlighting collaborative success and leadership impact
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                       border border-gray-100 hover:border-[#0A66C2] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="p-3 bg-[#0A66C2] rounded-xl shadow-lg shadow-blue-100">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-4">
                <p className="text-gray-600 mb-6 leading-relaxed">"{recommendation.content}"</p>

                {/* Profile */}
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={recommendation.image}
                    alt={recommendation.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{recommendation.name}</h3>
                      <Verified className="h-4 w-4 text-[#0A66C2]" />
                    </div>
                    <p className="text-sm text-gray-500">{recommendation.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#0A66C2]">{recommendation.relation}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{recommendation.company}</span>
                    </div>
                  </div>
                </div>

                {/* Endorsements */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Endorsed for
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.endorsements.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
                                text-xs font-medium bg-blue-50 text-[#0A66C2]"
                      >
                        <Star className="h-3 w-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/hiren-gohil-25880153/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white 
                     rounded-xl hover:bg-[#004182] transition-colors duration-300 
                     shadow-lg shadow-blue-100"
          >
            <Linkedin className="h-5 w-5" />
            <span>View LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}