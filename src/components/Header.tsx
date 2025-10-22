import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Танцевальные направления', path: '/directions' },
    { name: 'Расписание', path: '/schedule' },
    { name: 'Цены и акции', path: '/pricing' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Icon name="Music" className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DanceFlow</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-foreground/60'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться на пробное занятие
          </Button>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Записаться на пробное занятие
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;