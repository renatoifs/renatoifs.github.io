import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Filter } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const PublicationsPage = () => {
  const { t } = useLanguage();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('year-desc');

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/publications`);
      setPublications(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching publications:', err);
      setError('Failed to load publications');
      setLoading(false);
    }
  };

  // Get unique years and types
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
  const types = [...new Set(publications.map(p => p.doc_type))].filter(Boolean);

  // Filter and sort publications
  const filteredPublications = publications
    .filter(pub => {
      if (selectedYear !== 'all' && pub.year !== selectedYear) return false;
      if (selectedType !== 'all' && pub.doc_type !== selectedType) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'year-desc':
          return b.year - a.year;
        case 'year-asc':
          return a.year - b.year;
        case 'citations':
          return (b.citations || 0) - (a.citations || 0);
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-slate-900 border-r-transparent"></div>
              <p className="mt-4 text-slate-600">Loading publications...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-28 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" data-testid="publications-title">
            {t('publications.title')}
          </h1>
          <div className="h-1 w-24 bg-slate-900 rounded"></div>
          <p className="mt-4 text-lg text-slate-600">
            {t('publications.total')}: <span className="font-bold text-slate-900">{publications.length}</span>
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
          <div className="flex items-center mb-4">
            <Filter size={20} className="mr-2 text-slate-700" />
            <h2 className="text-lg font-semibold text-slate-900">
              {t('publications.filters')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.year')}
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                data-testid="year-filter"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              >
                <option value="all">{t('publications.all')}</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.type')}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                data-testid="type-filter"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              >
                <option value="all">{t('publications.all')}</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.sortBy')}
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                data-testid="sort-by"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              >
                <option value="year-desc">{t('publications.yearDesc')}</option>
                <option value="year-asc">{t('publications.yearAsc')}</option>
                <option value="citations">{t('publications.citations')}</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold">{filteredPublications.length}</span> of <span className="font-semibold">{publications.length}</span> publications
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              data-testid={`publication-${index}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white">
                    {pub.year}
                  </span>
                  {pub.doc_type && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {pub.doc_type}
                    </span>
                  )}
                  {pub.citations > 0 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {t('publications.cited')} {pub.citations}x
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-3 leading-tight">
                {pub.title}
              </h3>

              <p className="text-sm text-slate-600 mb-3">
                {pub.authors}
              </p>

              <p className="text-sm text-slate-700 mb-4">
                <span className="font-semibold">{pub.journal}</span>
                {pub.volume && `, ${pub.volume}`}
                {pub.issue && `(${pub.issue})`}
              </p>

              <div className="flex flex-wrap gap-3">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    <span>{t('publications.viewDoi')}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    <span>{t('publications.viewPub')}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No publications found with the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};
