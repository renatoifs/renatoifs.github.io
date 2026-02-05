import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase } from 'lucide-react';

export const ProjectsPage = () => {
  const { t } = useLanguage();

  const fundedProjects = [
    {
      nameEN: 'VIGIA Project',
      namePT: 'Projeto VIGIA',
      code: 'COMPETE2030-FEDER-02045600',
      period: '2025 - Ongoing',
      role: 'Principal Investigator (PI) at FMUP',
      rolePT: 'Investigador Principal (IP) na FMUP',
      funding: 'European Regional Development Fund (FEDER), COMPETE 2030 / Portugal 2030',
      fundingPT: 'Fundo Europeu de Desenvolvimento Regional (FEDER), COMPETE 2030 / Portugal 2030',
      budget: '1,477,779.86€ (FMUP: 474,215.14€)'
    },
    {
      nameEN: 'ONCATS - Federated Real-World Health Data Network for Health Technology Assessment and Oncology Medicines',
      namePT: 'ONCATS - Rede Federada de Dados de Saúde do Mundo Real para Avaliação de Tecnologias de Saúde e Medicamentos Oncológicos',
      code: 'COMPETE2030-FEDER-01453400',
      period: '2025 - Ongoing',
      role: 'Investigator (I)',
      rolePT: 'Investigador (I)',
      funding: 'European Regional Development Fund (FEDER), COMPETE 2030 / Portugal 2030',
      fundingPT: 'Fundo Europeu de Desenvolvimento Regional (FEDER), COMPETE 2030 / Portugal 2030',
      budget: '1,487,113.28€ (FMUP: 184,770.08€)'
    },
    {
      nameEN: 'CONTROL-EU – Implementation of controlled access to and distribution of medicinal products in the European Union',
      namePT: 'CONTROL-EU – Implementação de acesso controlado e distribuição de medicamentos na União Europeia',
      code: 'EMA/2020/46/TDAL4.02',
      period: '2024 - Ongoing',
      role: 'Investigator (I)',
      rolePT: 'Investigador (I)',
      funding: 'European Medicines Agency (EMA)',
      fundingPT: 'Agência Europeia de Medicamentos (EMA)',
      budget: '299,985€ (FMUP: 28,241€)'
    },
    {
      nameEN: 'VAC4EU : Covid-Vaccine-Monitor: Safety monitoring of SARS-CoV-2 vaccines in EU Member States',
      namePT: 'VAC4EU : Covid-Vaccine-Monitor: Monitorização de segurança de vacinas SARS-CoV-2 em Estados-Membros da UE',
      code: 'EMA/2017/09/PE /L3',
      period: '2021 - 2023 (Completed)',
      periodPT: '2021 - 2023 (Concluído)',
      role: 'Investigator (I)',
      rolePT: 'Investigador (I)',
      funding: 'European Medicines Agency (EMA)',
      fundingPT: 'Agência Europeia de Medicamentos (EMA)',
      budget: '5,948,549.00€ (FMUP: 20,000€)'
    },
    {
      nameEN: 'SHAPES – Smart and Healthy Ageing through People Engaging in Supportive Systems',
      namePT: 'SHAPES – Envelhecimento Inteligente e Saudável através de Sistemas de Apoio',
      code: '857159',
      period: '2019 - 2023 (Completed)',
      periodPT: '2019 - 2023 (Concluído)',
      role: 'Investigator (I)',
      rolePT: 'Investigador (I)',
      funding: 'ERASMUS+ Program of the European Union',
      fundingPT: 'Programa ERASMUS+ da União Europeia',
      budget: '20,944,996.75€ (ICBAS: 384,261.25€)'
    },
    {
      nameEN: 'Skills4Adherence - Increasing the capacity of medical professionals to manage patient adherence and polytherapy in elderly',
      namePT: 'Skills4Adherence - Aumentar a capacidade dos profissionais de saúde para gerir adesão e politerapia em idosos',
      code: '2017-1-PL01-KA202-038672',
      period: '2017 - 2020 (Completed)',
      periodPT: '2017 - 2020 (Concluído)',
      role: 'Investigator (I)',
      rolePT: 'Investigador (I)',
      funding: 'ERASMUS+ Program of the European Union',
      fundingPT: 'Programa ERASMUS+ da União Europeia',
      budget: '174,575.39€'
    }
  ];

  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="projects-title">
            {t('projects.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
        </div>

        {/* Funded Projects */}
        <section>
          <div className="mb-8 flex items-center">
            <Briefcase className="mr-3 text-slate-700" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">
              {language === 'en' ? 'Funded Projects' : 'Projetos Financiados'}
            </h2>
          </div>

          <div className="space-y-6">
            {fundedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language === 'en' ? project.nameEN : project.namePT}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white">
                        {project.code}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        {language === 'en' ? project.period : (project.periodPT || project.period)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">{language === 'en' ? 'Role:' : 'Função:'}</span>{' '}
                    {language === 'en' ? project.role : project.rolePT}
                  </p>
                  <p>
                    <span className="font-semibold">{language === 'en' ? 'Funding:' : 'Financiamento:'}</span>{' '}
                    {language === 'en' ? project.funding : project.fundingPT}
                  </p>
                  <p>
                    <span className="font-semibold">{language === 'en' ? 'Budget:' : 'Orçamento:'}</span>{' '}
                    {project.budget}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};