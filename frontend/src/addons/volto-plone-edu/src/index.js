const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: true,
    supportedLanguages: ['de', 'en'],
    defaultLanguage: 'de',
  };
  return config;
};

export default applyConfig;
