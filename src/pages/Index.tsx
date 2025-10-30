import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import CropPrices from '@/components/CropPrices';
import PestDetection from '@/components/PestDetection';
import CropAdvisory from '@/components/CropAdvisory';
import WeatherWidget from '@/components/WeatherWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Dashboard />
        <CropPrices />
        <PestDetection />
        <CropAdvisory />
        <WeatherWidget />
      </main>
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 CropAdvisor. Smart farming solutions for better yields.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
