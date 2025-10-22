import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/styles', label: 'Направления' },
    { to: '/schedule', label: 'Расписание' },
    { to: '/pricing', label: 'Цены' },
    { to: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Music" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DanceFlow
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-semibold transition-colors hover:text-primary ${
                  isActive(link.to) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Записаться
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 font-semibold transition-colors hover:text-primary ${
                  isActive(link.to) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="lg" className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Записаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
