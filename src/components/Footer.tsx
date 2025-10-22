import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Icon name="Music" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">DanceFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Танцевальная школа для всех уровней подготовки
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/directions" className="text-muted-foreground hover:text-primary transition-colors">
                  Направления
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Расписание
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@danceflow.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 DanceFlow. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
