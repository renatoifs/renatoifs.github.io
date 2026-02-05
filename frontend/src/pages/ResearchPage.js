import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const ResearchPage = () => {
  const { t } = useLanguage();

  const researchAreas = [
    'Drug safety',
    'Pharmacovigilance',
    'Pharmacoepidemiology',
    'Clinical research methodologies',
    'Health technology assessment',
    'Digital health',
    'Evidence synthesis (systematic reviews and meta-analyses)',
    'Clinical epidemiology',
    'Post-marketing surveillance studies'
  ];

  const researchAreasPT = [
    'Segurança de medicamentos',
    'Farmacovigilância',
    'Farmacoepidemiologia',
    'Metodologias de investigação clínica',
    'Avaliação de tecnologias de saúde',
    'Saúde digital',
    'Síntese de evidência (revisões sistemáticas e meta-análises)',
    'Epidemiologia clínica',
    'Estudos de vigilância pós-comercialização'
  ];

  const methodologies = [
    'PRISMA Guidelines',
    'Cochrane Methodology',
    'ICH-GCP Standards',
    'CIOMS Recommendations',
    'EMA Guidance',
    'WHO-UMC Criteria',
    'Bradford Hill Criteria',
    'Real-World Evidence Framework'
  ];

  const { language } = useLanguage();
  const areas = language === 'en' ? researchAreas : researchAreasPT;

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="research-title">
            {t('research.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Research Areas - Simple List */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {t('research.areasTitle')}
          </h2>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-slate-900 mt-2"></div>
                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    {area}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Methodological Toolkit */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-2xl font-bold mb-6">
              {t('research.methodsTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {methodologies.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
