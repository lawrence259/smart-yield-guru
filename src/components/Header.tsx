import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
              <span className="text-xl font-bold text-primary-foreground">🌾</span>
            </div>
            <span className="text-xl font-bold text-foreground">CropAdvisor</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              {t('dashboard')}
            </a>
            <a href="#prices" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              {t('prices')}
            </a>
            <a href="#detection" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              {t('detection')}
            </a>
            <a href="#advisory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              {t('advisory')}
            </a>
            <a href="#weather" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              {t('weather')}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[130px] border-border">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="ta">தமிழ்</SelectItem>
                <SelectItem value="te">తెలుగు</SelectItem>
                <SelectItem value="bn">বাংলা</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {t('dashboard')}
              </a>
              <a href="#prices" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {t('prices')}
              </a>
              <a href="#detection" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {t('detection')}
              </a>
              <a href="#advisory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {t('advisory')}
              </a>
              <a href="#weather" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {t('weather')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
