import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Пробное',
      price: '0',
      period: 'одно занятие',
      description: 'Идеально для знакомства с нашей школой',
      features: [
        'Одно занятие любого направления',
        'Консультация преподавателя',
        'Доступ ко всем залам',
        'Скидка 20% на первый абонемент',
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false,
    },
    {
      name: 'Базовый',
      price: '4 500',
      period: '4 занятия',
      description: 'Для начинающих танцоров',
      features: [
        '4 занятия в месяц',
        'Любые направления',
        'Действует 30 дней',
        'Заморозка абонемента 7 дней',
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Стандарт',
      price: '7 200',
      period: '8 занятий',
      description: 'Оптимальный выбор для прогресса',
      features: [
        '8 занятий в месяц',
        'Все направления без ограничений',
        'Действует 45 дней',
        'Заморозка абонемента 14 дней',
        'Скидка 10% на мерч',
      ],
      color: 'from-primary to-secondary',
      popular: true,
    },
    {
      name: 'Безлимит',
      price: '12 900',
      period: 'неограниченно',
      description: 'Для тех, кто живет танцами',
      features: [
        'Безлимитное посещение всех занятий',
        'Действует 30 дней',
        'Приоритетная запись',
        'Заморозка абонемента 21 день',
        'Бесплатные мастер-классы',
        'Скидка 20% на мерч',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: false,
    },
  ];

  const promotions = [
    {
      icon: 'Gift',
      title: 'Приведи друга',
      description: 'Получите скидку 15% на следующий абонемент за каждого приведенного друга',
    },
    {
      icon: 'GraduationCap',
      title: 'Скидка студентам',
      description: 'Студентам очной формы обучения — скидка 10% на все абонементы',
    },
    {
      icon: 'Users',
      title: 'Семейный тариф',
      description: 'При покупке 2+ абонементов членам одной семьи — скидка 15% на каждый',
    },
    {
      icon: 'Star',
      title: 'Бонусная программа',
      description: 'Накапливайте баллы за каждое занятие и обменивайте на абонементы',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-primary via-secondary to-accent py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Цены и акции</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Гибкие тарифы и специальные предложения для каждого
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-all hover:shadow-2xl ${
                  plan.popular ? 'border-primary scale-105' : 'hover:border-primary'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name="Ticket" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-xl ml-1">₽</span>
                    <p className="text-muted-foreground mt-1">{plan.period}</p>
                  </div>
                  <p className="text-center text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="CheckCircle2" className="text-primary mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и специальные предложения</h2>
            <p className="text-xl text-muted-foreground">
              Больше возможностей танцевать и экономить
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={promo.icon} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{promo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Дополнительные услуги</h2>
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="User" className="mr-2 text-primary" size={24} />
                    Индивидуальные занятия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">Персональная тренировка с преподавателем</p>
                    <span className="text-2xl font-bold">2 500 ₽</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" className="mr-2 text-primary" size={24} />
                    Постановка танца
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">Хореография для мероприятий (свадьба, корпоратив)</p>
                    <span className="text-2xl font-bold">от 15 000 ₽</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Video" className="mr-2 text-primary" size={24} />
                    Видеосъемка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">Профессиональная съемка вашего танца</p>
                    <span className="text-2xl font-bold">3 000 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
