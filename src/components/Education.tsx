import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-xl mb-4">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic foundation in engineering excellence</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
                        hover:border-indigo-500 transition-all duration-300">
            <div className="absolute -left-3 top-10 w-6 h-6 bg-indigo-600 rounded-full 
                          group-hover:animate-ping opacity-0 group-hover:opacity-20"></div>
            <div className="absolute -left-3 top-10 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 
                          rounded-full shadow-lg shadow-indigo-200/50"></div>

            <div className="ml-4">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Computer Engineering</h3>
                <div className="px-4 py-1 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium">
                  BE Graduate
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <span>Gujarat University</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  <span>2007 - 2011</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Key Achievements</div>
                    <div className="text-gray-600">Specialized in Computer Architecture & Network Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}