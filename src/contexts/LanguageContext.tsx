import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'es' | 'bn' | 'te';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    dashboard: 'Dashboard',
    prices: 'Crop Prices',
    detection: 'Pest Detection',
    advisory: 'Crop Advisory',
    weather: 'Weather',
    welcomeTitle: 'Smart Crop Advisory System',
    welcomeSubtitle: 'Your intelligent farming companion for better yields',
    cropPricesTitle: 'Live Crop Prices',
    cropPricesDesc: 'Track real-time market prices',
    pestDetectionTitle: 'Pest & Disease Detection',
    pestDetectionDesc: 'AI-powered image analysis',
    cropAdvisoryTitle: 'Crop Advisory',
    cropAdvisoryDesc: 'Expert farming guidance',
    weatherTitle: 'Weather Updates',
    weatherDesc: 'Local weather forecasts',
    uploadImage: 'Upload Image',
    analyzeImage: 'Analyze for Pests & Diseases',
    dragDrop: 'Drag & drop or click to upload',
    currentPrice: 'Current Price',
    pricePerKg: '/kg',
    selectCrop: 'Select a crop',
    getAdvice: 'Get Expert Advice',
    temperature: 'Temperature',
    humidity: 'Humidity',
    rainfall: 'Rainfall',
    cropDetails: 'Crop Details',
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    prices: 'फसल की कीमतें',
    detection: 'कीट का पता लगाना',
    advisory: 'फसल सलाह',
    weather: 'मौसम',
    welcomeTitle: 'स्मार्ट फसल सलाहकार प्रणाली',
    welcomeSubtitle: 'बेहतर उपज के लिए आपका बुद्धिमान खेती साथी',
    cropPricesTitle: 'लाइव फसल की कीमतें',
    cropPricesDesc: 'वास्तविक समय बाजार मूल्य ट्रैक करें',
    pestDetectionTitle: 'कीट और रोग का पता लगाना',
    pestDetectionDesc: 'एआई-संचालित छवि विश्लेषण',
    cropAdvisoryTitle: 'फसल सलाह',
    cropAdvisoryDesc: 'विशेषज्ञ खेती मार्गदर्शन',
    weatherTitle: 'मौसम अपडेट',
    weatherDesc: 'स्थानीय मौसम पूर्वानुमान',
    uploadImage: 'छवि अपलोड करें',
    analyzeImage: 'कीट और रोगों के लिए विश्लेषण करें',
    dragDrop: 'खींचें और छोड़ें या अपलोड करने के लिए क्लिक करें',
    currentPrice: 'वर्तमान मूल्य',
    pricePerKg: '/किलो',
    selectCrop: 'एक फसल चुनें',
    getAdvice: 'विशेषज्ञ सलाह प्राप्त करें',
    temperature: 'तापमान',
    humidity: 'आर्द्रता',
    rainfall: 'वर्षा',
    cropDetails: 'फसल विवरण',
  },
  es: {
    dashboard: 'Panel',
    prices: 'Precios de Cultivos',
    detection: 'Detección de Plagas',
    advisory: 'Asesoría de Cultivos',
    weather: 'Clima',
    welcomeTitle: 'Sistema Inteligente de Asesoría de Cultivos',
    welcomeSubtitle: 'Tu compañero inteligente para mejores cosechas',
    cropPricesTitle: 'Precios de Cultivos en Vivo',
    cropPricesDesc: 'Seguimiento de precios de mercado en tiempo real',
    pestDetectionTitle: 'Detección de Plagas y Enfermedades',
    pestDetectionDesc: 'Análisis de imágenes con IA',
    cropAdvisoryTitle: 'Asesoría de Cultivos',
    cropAdvisoryDesc: 'Orientación agrícola experta',
    weatherTitle: 'Actualizaciones del Clima',
    weatherDesc: 'Pronósticos meteorológicos locales',
    uploadImage: 'Subir Imagen',
    analyzeImage: 'Analizar Plagas y Enfermedades',
    dragDrop: 'Arrastra y suelta o haz clic para subir',
    currentPrice: 'Precio Actual',
    pricePerKg: '/kg',
    selectCrop: 'Selecciona un cultivo',
    getAdvice: 'Obtener Asesoramiento Experto',
    temperature: 'Temperatura',
    humidity: 'Humedad',
    rainfall: 'Precipitación',
    cropDetails: 'Detalles del Cultivo',
  },
  bn: {
    dashboard: 'ড্যাশবোর্ড',
    prices: 'ফসলের দাম',
    detection: 'কীটপতঙ্গ সনাক্তকরণ',
    advisory: 'ফসল পরামর্শ',
    weather: 'আবহাওয়া',
    welcomeTitle: 'স্মার্ট ফসল পরামর্শ সিস্টেম',
    welcomeSubtitle: 'ভাল ফলনের জন্য আপনার বুদ্ধিমান কৃষি সঙ্গী',
    cropPricesTitle: 'লাইভ ফসলের দাম',
    cropPricesDesc: 'রিয়েল-টাইম বাজার মূল্য ট্র্যাক করুন',
    pestDetectionTitle: 'কীটপতঙ্গ ও রোগ সনাক্তকরণ',
    pestDetectionDesc: 'এআই-চালিত ছবি বিশ্লেষণ',
    cropAdvisoryTitle: 'ফসল পরামর্শ',
    cropAdvisoryDesc: 'বিশেষজ্ঞ কৃষি নির্দেশনা',
    weatherTitle: 'আবহাওয়া আপডেট',
    weatherDesc: 'স্থানীয় আবহাওয়ার পূর্বাভাস',
    uploadImage: 'ছবি আপলোড করুন',
    analyzeImage: 'কীটপতঙ্গ ও রোগের জন্য বিশ্লেষণ করুন',
    dragDrop: 'টেনে আনুন এবং ছেড়ে দিন বা আপলোড করতে ক্লিক করুন',
    currentPrice: 'বর্তমান মূল্য',
    pricePerKg: '/কেজি',
    selectCrop: 'একটি ফসল নির্বাচন করুন',
    getAdvice: 'বিশেষজ্ঞ পরামর্শ পান',
    temperature: 'তাপমাত্রা',
    humidity: 'আর্দ্রতা',
    rainfall: 'বৃষ্টিপাত',
    cropDetails: 'ফসলের বিবরণ',
  },
  te: {
    dashboard: 'డాష్‌బోర్డ్',
    prices: 'పంట ధరలు',
    detection: 'చీడపురుగుల గుర్తింపు',
    advisory: 'పంట సలహా',
    weather: 'వాతావరణం',
    welcomeTitle: 'స్మార్ట్ పంట సలహా వ్యవస్థ',
    welcomeSubtitle: 'మెరుగైన దిగుబడి కోసం మీ తెలివైన వ్యవసాయ సహాయకుడు',
    cropPricesTitle: 'లైవ్ పంట ధరలు',
    cropPricesDesc: 'రియల్-టైం మార్కెట్ ధరలను ట్రాక్ చేయండి',
    pestDetectionTitle: 'చీడపురుగులు మరియు వ్యాధుల గుర్తింపు',
    pestDetectionDesc: 'AI-శక్తితో కూడిన చిత్ర విశ్లేషణ',
    cropAdvisoryTitle: 'పంట సలహా',
    cropAdvisoryDesc: 'నిపుణుల వ్యవసాయ మార్గదర్శకత్వం',
    weatherTitle: 'వాతావరణ నవీకరణలు',
    weatherDesc: 'స్థానిక వాతావరణ అంచనాలు',
    uploadImage: 'చిత్రాన్ని అప్‌లోడ్ చేయండి',
    analyzeImage: 'చీడపురుగులు మరియు వ్యాధుల కోసం విశ్లేషించండి',
    dragDrop: 'లాగండి మరియు వదలండి లేదా అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి',
    currentPrice: 'ప్రస్తుత ధర',
    pricePerKg: '/కేజీ',
    selectCrop: 'పంటను ఎంచుకోండి',
    getAdvice: 'నిపుణుల సలహా పొందండి',
    temperature: 'ఉష్ణోగ్రత',
    humidity: 'తేమ',
    rainfall: 'వర్షపాతం',
    cropDetails: 'పంట వివరాలు',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
