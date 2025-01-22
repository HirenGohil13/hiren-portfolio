import { 
  Users, Server, Database, 
  Cloud, Code2, Brain, Lock
} from 'lucide-react';

const skillCategories = [
  {
    title: "Agile Leadership & Scrum",
    icon: <Users className="h-6 w-6" />,
    skills: ["Team Leadership", "Sprint Planning", "Resource Management", "Stakeholder Management"]
  },
  {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["React", "Vue", "HTML/CSS/SCSS", "Material UI", "Bootstrap"]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js (Express)", "PHP (Laravel)", "WordPress", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Database Design", "Query Optimization"]
  },
  {
    title: "Security",
    icon: <Lock className="h-6 w-6" />,
    skills: ["OWASP", "Application Security", "Data Encryption",  "GDPR compliance","Vulnerability Management", "Authentication & Authorization"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Docker", "GitHub", "GitLab","Github Action (CI/CD)", "NGINX"]
  },
  {
    title: "AWS Services",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["EC2", "Lambda", "S3", "DynamoDB", "CloudFront", "Route 53", "API Gateway", "IAM", "WAF", "Config", "Cloudwatch", "SQS", "SNS", "ECR"]
  },
  {
    title: "Project Management",
    icon: <Brain className="h-6 w-6" />,
    skills: ["JIRA", "Asana", "Risk Management", "Resource Planning"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600">Comprehensive skillset across development and leadership</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-indigo-500 
                         transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}