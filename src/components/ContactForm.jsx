import React, { useState } from 'react';
import { Send, Upload, CheckCircle2, AlertCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { serviceCategories, allServices } from '../data/services';
import CTAButton from './CTAButton';

export default function ContactForm({
  defaultCategory = '',
  defaultService = '',
  onSuccess,
  className = ''
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: defaultCategory || 'translation',
    serviceSlug: defaultService || '',
    sourceLanguage: 'English',
    targetLanguage: 'Arabic',
    urgency: 'standard',
    message: '',
    file: null
  });

  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Get available services for currently selected category
  const availableServices = allServices.filter(s => s.category === formData.category);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    const firstService = allServices.find(s => s.category === newCategory);
    setFormData(prev => ({
      ...prev,
      category: newCategory,
      serviceSlug: firstService ? firstService.slug : ''
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        setErrorMessage('File size exceeds 25MB limit. Please upload a smaller file or send via WhatsApp.');
        return;
      }
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required contact information fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-card text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Quote Request Received!</h3>
        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6">
          Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our documentation team in Dubai has received your request and will review your documents within 15–30 minutes during business hours.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-md mx-auto mb-6 text-xs text-slate-600 space-y-1.5">
          <p><span className="font-bold text-slate-800">Email:</span> {formData.email}</p>
          <p><span className="font-bold text-slate-800">Phone:</span> {formData.phone}</p>
          <p><span className="font-bold text-slate-800">Category:</span> {formData.category.toUpperCase()}</p>
          {fileName && <p><span className="font-bold text-slate-800">Uploaded File:</span> {fileName}</p>}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <CTAButton
            onClick={() => { setIsSuccess(false); setFileName(''); }}
            variant="secondary"
            size="md"
          >
            Submit Another Request
          </CTAButton>
          <CTAButton
            href={`https://wa.me/971522402909?text=Hello%20Smart%20Word,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.category)}.%20My%20name%20is%20${encodeURIComponent(formData.fullName)}`}
            variant="primary"
            size="md"
            icon={MessageSquare}
          >
            Connect on WhatsApp
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-card ${className}`}>
      
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Request a Free Instant Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Upload your documents or tell us what you need. 100% confidential & strict NDA.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        
        {/* Name & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Tariq Mansoor"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Phone & Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Turnaround Speed
            </label>
            <select
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            >
              <option value="standard">Standard (24 Hours)</option>
              <option value="express">Express Rush (3-6 Hours)</option>
              <option value="scheduled">Flexible / Within 2-3 Days</option>
            </select>
          </div>
        </div>

        {/* Service Category & Specific Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service Category
            </label>
            <select
              value={formData.category}
              onChange={handleCategoryChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            >
              {serviceCategories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Specific Service (Optional)
            </label>
            <select
              value={formData.serviceSlug}
              onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
            >
              <option value="">-- Select Specific Service --</option>
              {availableServices.map(s => (
                <option key={s.slug} value={s.slug}>{s.shortTitle || s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Language Selection if Translation */}
        {formData.category === 'translation' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-50/50 p-3.5 rounded-2xl border border-brand-100">
            <div>
              <label className="block text-[11px] font-bold text-brand-900 uppercase tracking-wider mb-1">
                From (Source Language)
              </label>
              <input
                type="text"
                placeholder="e.g. English, French, Russian..."
                value={formData.sourceLanguage}
                onChange={(e) => setFormData({ ...formData, sourceLanguage: e.target.value })}
                className="w-full bg-white border border-brand-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-brand-900 uppercase tracking-wider mb-1">
                To (Target Language)
              </label>
              <input
                type="text"
                placeholder="e.g. Arabic (Official Court Standard)"
                value={formData.targetLanguage}
                onChange={(e) => setFormData({ ...formData, targetLanguage: e.target.value })}
                className="w-full bg-white border border-brand-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        )}

        {/* File Upload Dropzone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Upload Document (Optional)
          </label>
          <label className="relative border-2 border-dashed border-slate-200 hover:border-brand-400 bg-slate-50/50 hover:bg-brand-50/30 rounded-2xl p-4 transition-all flex flex-col items-center justify-center cursor-pointer text-center">
            <Upload className="w-6 h-6 text-brand-600 mb-1.5" />
            <span className="text-xs font-bold text-slate-700">
              {fileName ? fileName : "Click to select or drag document here"}
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5">
              Supports PDF, DOCX, JPG, PNG (Max 25MB). Encrypted & Confidential.
            </span>
            <input
              type="file"
              onChange={handleFileChange}
              className="sr-only"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </label>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Additional Instructions / Note
          </label>
          <textarea
            rows={3}
            placeholder="Specify target ministry (MOFA, Dubai Courts, KHDA, etc.), number of pages, or any specific requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <CTAButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto flex-1"
            icon={isSubmitting ? null : Send}
          >
            {isSubmitting ? "Processing Request..." : "Submit Quote Request"}
          </CTAButton>

          <a
            href="https://wa.me/971522402909?text=Hello%20Smart%20Word,%20I%20would%20like%20a%20direct%20quote%20for%20translation%20and%20documentation%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-subtle transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Instant WhatsApp</span>
          </a>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-2">
          🔒 Your documents and personal information are protected under strict UAE privacy laws.
        </p>

      </div>
    </form>
  );
}
