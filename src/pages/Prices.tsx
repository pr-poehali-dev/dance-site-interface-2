import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const pricingPlans = [
    {
      name: 'Пробное занятие',
      price: 'Бесплатно',
      period: 'одно занятие',
      description: 'Идеально для знакомства со школой',
      features: [
        'Любое направление на выбор',
        'Консультация с преподавателем',
        'Знакомство с залом и атмосферой',
        'Без обязательств',
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false,
      icon: 'Gift',
    },
    {
      name: 'Разовое занятие',
      price: '800',
      period: 'за занятие',
      description: 'Для тех, кто хочет гибкий график',
      features: [
        'Любое направление',
        'Без привязки к абонементу',
        'Действует 30 дней',
        'Можно приобрести в любое время',
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      icon: 'Ticket',
    },
    {
      name: 'Стандарт',
      price: '2 800',
      period: '4 занятия в месяц',
      description: 'Оптимальный вариант для начинающих',
      features: [
        'До 2 направлений на выбор',
        'Действует 30 дней',
        'Скидка 13% от разовой цены',
        'Заморозка до 7 дней',
      ],
      color: 'from-purple-500 to-indigo-500',
      popular: false,
      icon: 'Star',
    },
    {
      name: 'Оптимальный',
      price: '5 200',
      period: '8 занятий в месяц',
      description: 'Популярный выбор наших учеников',
      features: [
        'До 3 направлений на выбор',
        'Действует 45 дней',
        'Скидка 19% от разовой цены',
        'Заморозка до 14 дней',
        'Бонус: 1 занятие стретчингом',
      ],
      color: 'from-primary to-pink-500',
      popular: true,
      icon: 'Zap',
    },
    {
      name: 'Максимальный',
      price: '7 200',
      period: '12 занятий в месяц',
      description: 'Для тех, кто серьезно занимается',
      features: [
        'Все направления без ограничений',
        'Действует 60 дней',
        'Скидка 25% от разовой цены',
        'Заморозка до 21 дня',
        'Бонус: 2 занятия стретчингом',
        'Приоритетная запись на мастер-классы',
      ],
      color: 'from-secondary to-purple-600',
      popular: false,
      icon: 'Crown',
    },
    {
      name: 'Безлимит',
      price: '9 500',
      period: 'неограниченно',
      description: 'Максимум возможностей для вас',
      features: [
        'Все направления без ограничений',
        'Безлимитное посещение',
        'Действует 30 дней',
        'Заморозка до 14 дней',
        'Бесплатные стретчинг и йога',
        'Скидка 20% на мастер-классы',
        'Персональная консультация',
      ],
      color: 'from-accent to-orange-500',
      popular: false,
      icon: 'Sparkles',
    },
  ];

  const promotions = [
    {
      title: 'Приведи друга',
      description: 'Получи скидку 10% на следующий абонемент за каждого приведенного друга',
      icon: 'Users',
      color: 'from-primary to-pink-500',
    },
    {
      title: 'Семейная скидка',
      description: 'Скидка 15% при покупке абонементов для 2 и более членов семьи',
      icon: 'Heart',
      color: 'from-secondary to-purple-500',
    },
    {
      title: 'Студенческая скидка',
      description: 'Скидка 10% для студентов при предъявлении студенческого билета',
      icon: 'GraduationCap',
      color: 'from-accent to-yellow-500',
    },
    {
      title: 'Раннее бронирование',
      description: 'Продли абонемент за 7 дней до окончания и получи +1 занятие в подарок',
      icon: 'Calendar',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const additionalServices = [
    { name: 'Индивидуальное занятие (60 мин)', price: '2 500 ₽' },
    { name: 'Индивидуальное занятие (90 мин)', price: '3 500 ₽' },
    { name: 'Постановка свадебного танца (пакет из 8 занятий)', price: '18 000 ₽' },
    { name: 'Аренда зала (1 час)', price: '1 500 ₽' },
    { name: 'Персональная хореография', price: 'от 25 000 ₽' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Цены и абонементы</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите удобный формат занятий. Чем больше абонемент, тем выгоднее цена!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'border-primary border-4 scale-105' : 'border-2'
                } animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 text-sm font-bold">
                    Популярный
                  </div>
                )}

                <CardHeader className={`bg-gradient-to-br ${plan.color} text-white pb-8`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4">
                    <Icon name={plan.icon} size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    {plan.price !== 'Бесплатно' && <span className="text-xl"> ₽</span>}
                  </div>
                  <p className="text-white/90">{plan.period}</p>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <Icon name="Check" size={14} className="text-green-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                        : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90'
                    }`}
                  >
                    Выбрать абонемент
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-7xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Акции и скидки</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {promotions.map((promo, index) => (
                <Card key={index} className="hover:shadow-xl transition-all border-2 hover:border-primary">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${promo.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon name={promo.icon} className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{promo.title}</h3>
                    <p className="text-sm text-muted-foreground">{promo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Дополнительные услуги</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
              <CardContent className="p-8 md:p-12 text-center">
                <Icon name="HelpCircle" size={48} className="mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">Нужна помощь с выбором?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Наши администраторы помогут подобрать оптимальный абонемент с учетом ваших целей и графика
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить нам
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
