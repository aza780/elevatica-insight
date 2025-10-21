import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Crown, LogOut, BookOpen } from 'lucide-react';

const Navbar = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-gold rounded flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Elevatica
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/research">
                  <Button variant="ghost" className="hover:text-gold">
                    Research
                  </Button>
                </Link>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="ghost" className="hover:text-gold">
                      <Crown className="w-4 h-4 mr-2" />
                      Admin
                    </Button>
                  </Link>
                )}
                <Button
                  variant="outline"
                  onClick={signOut}
                  className="border-gold text-gold hover:bg-gold hover:text-black"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button className="bg-gradient-gold text-black hover:shadow-gold font-semibold">
                  Login / Register
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
