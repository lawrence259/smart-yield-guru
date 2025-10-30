import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Droplets, Wind, Sun, CloudRain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WeatherWidget = () => {
  const { t } = useLanguage();

  const weatherData = {
    current: {
      temp: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      wind: 12,
      rainfall: 0,
    },
    forecast: [
      { day: 'Today', high: 32, low: 24, condition: 'Sunny', icon: Sun },
      { day: 'Tomorrow', high: 30, low: 23, condition: 'Cloudy', icon: Cloud },
      { day: 'Day 3', high: 28, low: 22, condition: 'Rain', icon: CloudRain },
      { day: 'Day 4', high: 29, low: 23, condition: 'Partly Cloudy', icon: Cloud },
    ],
  };

  return (
    <section id="weather" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">{t('weatherTitle')}</h2>
          <p className="text-muted-foreground">{t('weatherDesc')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Current Weather</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-5xl font-bold text-foreground">{weatherData.current.temp}°C</p>
                  <p className="text-xl text-muted-foreground mt-2">{weatherData.current.condition}</p>
                </div>
                <Cloud className="h-24 w-24 text-primary" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                  <Droplets className="h-5 w-5 text-info" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t('humidity')}</p>
                    <p className="text-lg font-semibold">{weatherData.current.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                  <Wind className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Wind</p>
                    <p className="text-lg font-semibold">{weatherData.current.wind} km/h</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                  <CloudRain className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t('rainfall')}</p>
                    <p className="text-lg font-semibold">{weatherData.current.rainfall} mm</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                    <div className="flex items-center gap-3">
                      <day.icon className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">{day.day}</p>
                        <p className="text-xs text-muted-foreground">{day.condition}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{day.high}°</p>
                      <p className="text-sm text-muted-foreground">{day.low}°</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
