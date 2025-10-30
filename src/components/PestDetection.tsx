import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Camera, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const PestDetection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Your image has been analyzed for pests and diseases",
      });
    }, 2000);
  };

  return (
    <section id="detection" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">{t('pestDetectionTitle')}</h2>
          <p className="text-muted-foreground">{t('pestDetectionDesc')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t('uploadImage')}</CardTitle>
              <CardDescription>{t('analyzeImage')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <div className="space-y-4">
                    <img
                      src={selectedImage}
                      alt="Uploaded crop"
                      className="mx-auto max-h-64 rounded-lg object-cover"
                    />
                    <Button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full">
                      {isAnalyzing ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          Analyzing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Camera className="h-4 w-4" />
                          Analyze Image
                        </span>
                      )}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="text-muted-foreground">{t('dragDrop')}</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Detection Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary-foreground/10 p-4">
                  <h4 className="font-semibold mb-2">How it works:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Upload a clear photo of your crop or leaves</li>
                    <li>• AI analyzes for common pests and diseases</li>
                    <li>• Get instant identification and treatment advice</li>
                    <li>• Save results for future reference</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-primary-foreground/10 p-4">
                  <h4 className="font-semibold mb-2">Supported Detection:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Leaf spot diseases</li>
                    <li>• Fungal infections</li>
                    <li>• Pest infestations</li>
                    <li>• Nutrient deficiencies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PestDetection;
