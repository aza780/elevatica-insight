import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, BarChart3 } from 'lucide-react';
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Market Research
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A research-based platform for market analysis and investment insights. 
              Empowering decisions through statistical precision and mathematical rigor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link to="/research">
                  <Button size="lg" className="bg-gradient-gold text-black hover:shadow-gold-lg font-semibold text-lg px-8">
                    Explore Research
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/research">
                    <Button size="lg" className="bg-gradient-gold text-black hover:shadow-gold-lg font-semibold text-lg px-8">
                      Explore Research
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8">
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
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center shadow-gold">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Statistical Analysis</h3>
              <p className="text-muted-foreground">
                In-depth mathematical models and statistical insights for forex market trends.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center shadow-gold">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Protected Content</h3>
              <p className="text-muted-foreground">
                Premium research papers accessible only to authenticated users.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center shadow-gold">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis with variance, standard deviation, and trend indicators.
              </p>
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
