import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Users } from 'lucide-react';

export const TeachingPage = () => {
  const { t } = useLanguage();

  const teachingAreas = [
    'teaching.area1',
    'teaching.area2',
    'teaching.area3',
    'teaching.area4',
    'teaching.area5',
    'teaching.area6',
    'teaching.area7'
  ];

  const programs = [
    'Pharmaceutical Sciences',
    'Nursing',
    'Medicine',
    'Digital Health & Biomedical Innovation'
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="teaching-title">
            {t('teaching.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Teaching Experience */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <BookOpen className="mr-3 text-slate-700" size={28} />
              {t('teaching.experience')}
            </h2>
            
            <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-8">
              {t('teaching.expDesc')}
            </p>

            {/* Programs */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Users className="mr-2 text-slate-600" size={20} />
                Study Programs
              </h3>
              <div className="flex flex-wrap gap-3">
                {programs.map((program, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Areas */}
        <section>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              {t('teaching.areas')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teachingAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-base text-slate-700 font-medium">
                    {t(area)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
