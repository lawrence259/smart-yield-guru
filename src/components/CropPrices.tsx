import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CropPrices = () => {
  const { t } = useLanguage();

  const crops = [
    { name: 'Wheat', price: 2150, change: 2.3, trend: 'up' },
    { name: 'Rice', price: 2800, change: -1.2, trend: 'down' },
    { name: 'Corn', price: 1850, change: 4.5, trend: 'up' },
    { name: 'Soybeans', price: 4200, change: 1.8, trend: 'up' },
    { name: 'Cotton', price: 6500, change: -0.5, trend: 'down' },
    { name: 'Sugarcane', price: 320, change: 3.2, trend: 'up' },
  ];

  return (
    <section id="prices" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">{t('cropPricesTitle')}</h2>
          <p className="text-muted-foreground">{t('cropPricesDesc')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-medium">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <span>{crop.name}</span>
                  {crop.trend === 'up' ? (
                    <TrendingUp className="h-5 w-5 text-success" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{t('currentPrice')}</p>
                    <p className="text-2xl font-bold text-foreground">
                      ₹{crop.price}
                      <span className="text-sm font-normal text-muted-foreground">{t('pricePerKg')}</span>
                    </p>
                  </div>
                  <div className={`text-right ${crop.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                    <p className="text-lg font-semibold">
                      {crop.trend === 'up' ? '+' : ''}{crop.change}%
                    </p>
                    <p className="text-xs">24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropPrices;
