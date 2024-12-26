import React from 'react';
import { TrendingUp, DollarSign, Server, Shield } from 'lucide-react';
import MetricCard from './MetricCard';

const metrics = [
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    value: "300%",
    label: "Performance",
    sublabel: "Improvement",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: <DollarSign className="h-6 w-6 text-white" />,
    value: "$2.5M",
    label: "Cost Savings",
    sublabel: "Annually",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: <Server className="h-6 w-6 text-white" />,
    value: "99.99%",
    label: "System",
    sublabel: "Uptime",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    value: "Zero",
    label: "Security",
    sublabel: "Breaches",
    color: "from-red-600 to-orange-600"
  }
];

export default function ImpactMetrics() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} index={index} />
      ))}
    </div>
  );
}