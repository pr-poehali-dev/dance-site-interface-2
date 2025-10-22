import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Music" className="text-primary" size={32} />
              <span className="text-2xl font-bold">DanceFlow</span>
            </div>
            <p className="text-gray-300">
              Танцевальная школа для всех возрастов и уровней подготовки
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/directions" className="text-gray-300 hover:text-primary transition-colors">
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
                  Цены и акции
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={18} />
                <span>г. Москва, ул. Танцевальная, 15</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={18} />
                <span>info@danceflow.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 DanceFlow. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
