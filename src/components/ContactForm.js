'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Validation regex patterns
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PHONE_REGEX = /^\d{10}$/;

export default function ContactForm() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    contactNumber: ''
  });
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    nationality: '',
    contactNumber: '',
    email: '',
    idType: '',
    branch: '',
    academicProgramme: '',
    message: '',
    attachment_info: ''
  });

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone) return 'Contact number is required';
    if (!PHONE_REGEX.test(phone)) return 'Contact number must be exactly 10 digits';
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation errors when user starts typing
    if (name === 'email' || name === 'contactNumber') {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Real-time validation
    if (name === 'email') {
      const emailError = validateEmail(value);
      setValidationErrors(prev => ({
        ...prev,
        email: emailError
      }));
    }

    if (name === 'contactNumber') {
      // Remove any non-digit characters
      const cleanedValue = value.replace(/\D/g, '');
      
      // Update form with cleaned value
      setFormData(prev => ({
        ...prev,
        contactNumber: cleanedValue
      }));

      const phoneError = validatePhone(cleanedValue);
      setValidationErrors(prev => ({
        ...prev,
        contactNumber: phoneError
      }));
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Check file type and size
    const invalidFiles = selectedFiles.filter(
      file => file.type !== 'application/pdf' || file.size > 500 * 1024 // 500KB limit
    );

    if (invalidFiles.length > 0) {
      setError('Please upload only PDF files under 500KB');
      return;
    }

    // Only store one file
    setFiles(selectedFiles.slice(0, 1));
    setError('');
  };

  const removeFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const validateForm = () => {
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.contactNumber);

    setValidationErrors({
      email: emailError,
      contactNumber: phoneError
    });

    return !emailError && !phoneError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Basic form data
      const templateParams = {
        name: `${formData.fullName} ${formData.lastName}`.trim(),
        email: formData.email.trim(),
        contact_number: formData.contactNumber.trim(),
        nationality: formData.nationality.trim(),
        id_type: formData.idType || 'Not specified',
        branch: formData.branch || 'Not specified',
        academic_programme: formData.academicProgramme || 'Not specified',
        message: formData.message.trim(),
        attachment_info: files.length > 0 ? files[0].name : 'No attachment'
      };

      // Send email
      const response = await emailjs.send(
        'service_kp8ixmr',
        'template_ze4g22d',
        templateParams,
        '2y8GuRivO0pffb_Ie'
      );

      console.log('Success:', response);

      // Clear form after successful submission
      setFormData({
        fullName: '',
        lastName: '',
        nationality: '',
        contactNumber: '',
        email: '',
        idType: '',
        branch: '',
        academicProgramme: '',
        message: '',
        attachment_info: ''
      });
      setFiles([]);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      setError(error.text || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-white p-8 w-full">
        <h2 className="text-2xl font-semibold text-center mb-12">Get in Touch with us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name and Last Name */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Nationality and Contact Number */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <select
                required
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none [&>option]:bg-[#0F0B1F] appearance-none"
              >
                <option value="" disabled hidden className="text-gray-400">Nationality</option>
                <option value="sri_lankan" className="text-white">Sri Lankan</option>
                <option value="indian" className="text-white">Indian</option>
                <option value="american" className="text-white">American</option>
              </select>
            </div>
            <div>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Contact Number"
                required
                maxLength="10"
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none placeholder-gray-400"
              />
              {validationErrors.contactNumber && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.contactNumber}</p>
              )}
            </div>
          </div>

          {/* Email and NIC/Passport */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none placeholder-gray-400"
              />
              {validationErrors.email && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
              )}
            </div>
            <div>
              <select
                name="idType"
                value={formData.idType}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none [&>option]:bg-[#0F0B1F] appearance-none"
              >
                <option value="" disabled hidden className="text-gray-400">NIC / Passport</option>
                <option value="nic" className="text-white">NIC</option>
                <option value="passport" className="text-white">Passport</option>
              </select>
            </div>
          </div>

          {/* Branch and Academic Programme */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                placeholder="Branch"
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none placeholder-gray-400"
              />
            </div>
            <div>
              <select
                name="academicProgramme"
                value={formData.academicProgramme}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none [&>option]:bg-[#0F0B1F] appearance-none"
              >
                <option value="" disabled hidden className="text-gray-400">Academic Programme</option>
                <option value="bsc" className="text-white">BSc (Hons) Computing</option>
                <option value="diploma" className="text-white">Diploma in IT</option>
              </select>
            </div>
          </div>

          {/* Documents Upload */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Documents (PDF only, max 500KB)</p>
            <div className="border border-dashed border-gray-600 rounded-lg p-4 hover:border-[#00BFB3] transition-colors">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center cursor-pointer"
              >
                <span className="text-gray-400">+ Add Attachment</span>
                <span className="text-xs text-gray-500 ml-2">(500KB max, PDF only)</span>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {files.length > 0 && (
              <div className="mt-2 space-y-2">
                {files.map((file) => (
                  <div key={file.name} className="flex items-center justify-between text-sm">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="text-red-500 hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border-b border-gray-600 focus:border-[#00BFB3] text-white px-0 py-2 outline-none resize-none placeholder-gray-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#00BFB3] text-white px-12 py-3 rounded-full hover:bg-[#00a89d] transition-colors text-sm font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 