import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, BarChart3, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Market Research
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              A research-based platform for market analysis and investment insights. 
              Empowering decisions through statistical precision and mathematical rigor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              {user ? (
                <Link to="/research" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-gold text-black hover:shadow-gold-lg font-semibold text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                    Explore Research
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/research" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-gradient-gold text-black hover:shadow-gold-lg font-semibold text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                      Explore Research
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/auth" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                      Login to Access
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center shadow-gold">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">Statistical Analysis</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                In-depth mathematical models and statistical insights for forex market trends.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center shadow-gold">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">Protected Content</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Premium research papers accessible only to authenticated users.
              </p>
            </div>

            <div className="text-center p-6 sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center shadow-gold">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">Data-Driven Insights</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Comprehensive analysis with variance, standard deviation, and trend indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Akses Elevatica di Mana Saja
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Install aplikasi Elevatica langsung ke perangkat mobile Anda. Akses riset forex kapan saja, 
              bahkan dalam mode offline. Aplikasi akan terinstal seperti aplikasi native di home screen Anda.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 md:p-8 border border-gold/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Progressive Web App</h3>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground mb-6">
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="text-gold mr-2">✓</span> Install langsung dari browser
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="text-gold mr-2">✓</span> Bekerja di iPhone & Android
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="text-gold mr-2">✓</span> Akses cepat dari home screen
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="text-gold mr-2">✓</span> Mode offline tersedia
                  </li>
                </ul>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="bg-gradient-gold text-black hover:shadow-gold-lg font-semibold w-full md:w-auto"
                    onClick={() => {
                      if ('serviceWorker' in navigator) {
                        window.alert('Untuk menginstall:\n\n📱 iPhone: Tap tombol Share, lalu "Add to Home Screen"\n\n🤖 Android: Tap menu browser (⋮), lalu "Install app" atau "Add to Home screen"');
                      }
                    }}
                  >
                    Install Aplikasi
                  </Button>
                  <p className="text-xs text-muted-foreground text-center md:text-left">
                    Gratis • Tidak perlu App Store atau Play Store
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-dark rounded-2xl flex items-center justify-center shadow-gold-lg border border-gold/30">
                  <BookOpen className="w-24 h-24 md:w-28 md:h-28 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Elevatica. Empowering Market Research Through Statistical Insight.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
