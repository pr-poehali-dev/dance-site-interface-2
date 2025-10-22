import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Music" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">DanceFlow</span>
            </div>
            <p className="text-gray-300 text-sm">
              Танцевальная школа для всех уровней подготовки
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/styles" className="text-gray-300 hover:text-primary transition-colors">
                  Направления
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-primary transition-colors">
                  Расписание
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-primary transition-colors">
                  Цены
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@danceflow.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Танцевальная, 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="VK"
              >
                <Icon name="Share2" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 DanceFlow. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
