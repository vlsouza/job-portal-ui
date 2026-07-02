const CookiePolicy = () => {
  const sections = [
    {
      title: 'What Are Cookies',
      body: 'Cookies are small text files stored on your device when you visit JobPortal. They help us remember your preferences, keep you signed in, and understand how you use our site.',
    },
    {
      title: 'How We Use Cookies',
      body: 'We use cookies to keep you logged in between visits, remember your theme preference (light or dark mode), and understand which jobs and companies you have saved or applied to.',
    },
    {
      title: 'Essential Cookies',
      body: 'Some cookies are required for the site to function, such as those that keep you authenticated and preserve your session while browsing jobs and submitting applications.',
    },
    {
      title: 'Managing Cookies',
      body: 'Most browsers let you control cookies through their settings, including blocking or deleting them. Disabling cookies may affect your ability to stay logged in or use certain features of JobPortal.',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-2">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            How JobPortal uses cookies to improve your experience.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 transition-colors duration-300 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
