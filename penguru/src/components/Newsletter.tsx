import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-teal-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Penguru Community</h2>
          <p className="text-xl mb-8 text-teal-100">
            Get weekly Linux tips, command guides, and exclusive resources delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-green-300 animate-fadeIn">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          )}
          
          <p className="mt-6 text-sm text-teal-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;