import React from 'react';
import { Quote, Linkedin, Star, Verified } from 'lucide-react';

const recommendations = [
  {
    name: "Vicky Fuller",
    role: "Co-Founder at Swoperz",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren has been an invaluable asset to our development team. As a highly skilled engineer and a dedicated technical lead, Hiren has consistently demonstrated an outstanding work ethic and a conscientious can-do attitude that sets him apart.His ability to navigate complex technical challenges showcases his depth of expertise and problem-solving skills. What truly stands out about Hiren is his conscientious attitude. Regardless of the task at hand, he approaches it with enthusiasm and a determination to exceed expectations. Hiren is not just a skilled engineer; he is a reliable and collaborative team player who consistently goes the extra mile to ensure the success of the entire development team. His positive and can-do mindset has had a positive impact on team morale and productivity",
    company: "Swoperz",
    relation: "Worked directly with Hiren",
    endorsements: ["Technical Leadership", "Cloud Architecture", "Team Management", "Postitive Attitude", "Can-do Mindset"]
  },
  {
    name: "Hasu Jadav",
    role: "Manager at IIH Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren proved to be one of the most dedicated professionals through his work at IIH Global. His hands-on approach to Laravel,php,wordpress,jquery,mysql and powerful personality gained him the respect of the staff. Thanks to interpersonal skills he has great relations with both company clients and potential customers. He is ready to deal with difficult situations and solve the problems on time. He always takes care of the job. For Hiren the job is always the most important thing to do. Very positive attitude towards work. He absolutely shines in a a busy environment. Definitely worth recommending.",
    company: "IIH Global",
    relation: "Worked directly with Hiren",
    endorsements: ["Fullstack Software Engineer", "Agile Leadership", "Dedication", "Problem Solver"]
  },
  {
    name: "Chetan Patel",
    role: "Lead Engineer at Eternal Web Limited",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren performed exceptionally on projects and did not fail a single time. Always on time and multi-skilled co-worker with excellent communication skills. Reliable and precise colleague - His ideas, skills, knowledge and understanding of dependencies made projects a great thing to work on. If you need a highly committed expert, he is the right person. Working with him is signature if success.",
    company: "Eternalweb Limited",
    relation: "Worked directly with Hiren",
    endorsements: ["Backend Software Engineer",  "Quick Learner", "Problem Solver"]
  },
  {
    name: "Charlene Hurlock",
    role: "Founder at Swoperz",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren is a capable technical leader who remains calm under pressure and is an excellent forward thinker and problem solver. Hiren has a wonderful passion for his clients and developing junior members of the team with exceptional achievements.",
    company: "Swoperz",
    relation: "Worked directly with Hiren",
    endorsements: ["Technical Leadership", "Team Management", ]
  },
  {
    name: "Naziya Shaikh",
    role: "QA Lead at Bain/SixBerries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren is not only lead with compassion, but also fully understands what it means to lead by example.He has a true ability to lead both through coaching/mentoring as well as leading by example.",
    company: "Bain & SixBerries",
    relation: "Worked directly with Hiren",
    endorsements: ["Tech Lead", "Agile Leadership", "Mentor"]
  },
  
  {
    name: "Utsav Gupta",
    role: "Senior Software Engineer at IIH Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren is very hardworking and always innovating. Always used to work out the solution with greater impact. He is an expert Laravel developer who possess best technological knowledge with great analytical skills. He is a detail oriented ,focused and intelligent professional. He is always there to give his best to deliver things in time. I would definitely recommend him to anyone who wants to hire an excellent coder.",
    company: "IIH Global",
    relation: "Worked directly with Hiren",
    endorsements: ["Fullstack Software Engineer", "Agile Leadership", "Dedication", "Problem Solver"]
  },
  {
    name: "Irsa Hadžiefendić",
    role: "Product Designer at HTEC Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Working with Hiren is always so easy. He has great management skills and is very knowledgeable in development. Always ready to help and explain.",
    company: "HTEC Group",
    relation: "Collaborated on projects",
    endorsements: ["Project Management", "Technical Strategy", "Leadership"]
  },
  {
    name: "Vicky Fuller",
    role: "Co-Founder at Swoperz",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Hiren seamlessly integrated into our team during the SixBerries web development deployment in a technical lead position. His problem-solving skills and innovative thinking were outstanding. A valuable addition to any project!",
    company: "Swoperz",
    relation: "Worked directly with Hiren",
    endorsements: ["Technical Leadership", "Cloud Architecture", "Team Management"]
  },
  {
    name: "Atef Rihane",
    role: "Software Engineer at SixBerries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "I worked with Hiren directly in different projects.He is humble,good communicator and very understanding.It was a pleasure collaborating with him",
    company: "SixBerries",
    relation: "Worked directly with Hiren",
    endorsements: ["Tech Lead", "Agile Leadership", "Mentor"]
  },
  
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