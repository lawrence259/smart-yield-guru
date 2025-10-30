import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Bug, Sprout, CloudRain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: t('cropPricesTitle'),
      description: t('cropPricesDesc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      href: '#prices',
    },
    {
      icon: Bug,
      title: t('pestDetectionTitle'),
      description: t('pestDetectionDesc'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      href: '#detection',
    },
    {
      icon: Sprout,
      title: t('cropAdvisoryTitle'),
      description: t('cropAdvisoryDesc'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      href: '#advisory',
    },
    {
      icon: CloudRain,
      title: t('weatherTitle'),
      description: t('weatherDesc'),
      color: 'text-info',
      bgColor: 'bg-info/10',
      href: '#weather',
    },
  ];

  return (
    <section id="dashboard" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t('welcomeTitle')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('welcomeSubtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <a key={index} href={feature.href}>
              <Card className="group h-full cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                <CardHeader>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
