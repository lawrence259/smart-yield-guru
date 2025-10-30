import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sprout, Droplets, Sun, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CropAdvisory = () => {
  const { t } = useLanguage();

  const crops = [
    {
      name: 'Wheat',
      season: 'Rabi (Winter)',
      water: 'Moderate - 4-5 irrigations',
      soil: 'Loamy soil, pH 6.0-7.5',
      fertilizer: 'NPK 120:60:40 kg/ha',
    },
    {
      name: 'Rice',
      season: 'Kharif (Monsoon)',
      water: 'High - Standing water',
      soil: 'Clay loam, pH 5.5-6.5',
      fertilizer: 'NPK 120:60:40 kg/ha',
    },
    {
      name: 'Corn',
      season: 'Kharif & Rabi',
      water: 'Moderate - Regular irrigation',
      soil: 'Well-drained loam, pH 5.8-7.0',
      fertilizer: 'NPK 150:75:40 kg/ha',
    },
  ];

  return (
    <section id="advisory" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">{t('cropAdvisoryTitle')}</h2>
          <p className="text-muted-foreground">{t('cropAdvisoryDesc')}</p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('selectCrop')}</CardTitle>
              <CardDescription>Get detailed cultivation guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Choose crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="corn">Corn</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="soybean">Soybean</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-gradient-primary">
                  <Sprout className="mr-2 h-4 w-4" />
                  {t('getAdvice')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  {crop.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Growing Season</p>
                    <p className="text-sm text-muted-foreground">{crop.season}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="h-5 w-5 text-info mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Water Requirements</p>
                    <p className="text-sm text-muted-foreground">{crop.water}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Soil & pH</p>
                    <p className="text-sm text-muted-foreground">{crop.soil}</p>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium mb-1">Fertilizer</p>
                  <p className="text-sm text-muted-foreground">{crop.fertilizer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropAdvisory;
