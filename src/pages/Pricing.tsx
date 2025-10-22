import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Разовое занятие',
      price: '500',
      period: 'занятие',
      features: [
        'Доступ к одному занятию',
        'Любое направление',
        'Без ограничений по времени',
        'Идеально для пробы',
      ],
      icon: 'Ticket',
      popular: false,
    },
    {
      title: 'Абонемент 8 занятий',
      price: '3200',
      period: 'месяц',
      features: [
        '8 занятий в месяц',
        'Любые направления',
        'Экономия 20%',
        'Можно заморозить на 2 недели',
        'Срок действия: 30 дней',
      ],
      icon: 'Calendar',
      popular: true,
    },
    {
      title: 'Безлимит',
      price: '5500',
      period: 'месяц',
      features: [
        'Неограниченное количество занятий',
        'Все направления',
        'Максимальная выгода',
        'Приоритетная запись',
        'Бесплатная заморозка',
        'Скидка 10% на мастер-классы',
      ],
      icon: 'Infinity',
      popular: false,
    },
  ];

  const promotions = [
    {
      title: 'Пробное занятие',
      discount: '50%',
      description: 'Первое занятие со скидкой для новых учеников',
      validUntil: 'Постоянная акция',
      icon: 'Gift',
    },
    {
      title: 'Приведи друга',
      discount: '1 занятие',
      description: 'Получите бесплатное занятие за каждого приведенного друга',
      validUntil: 'Бессрочно',
      icon: 'Users',
    },
    {
      title: 'Семейная скидка',
      discount: '15%',
      description: 'Скидка при покупке 2+ абонементов для членов одной семьи',
      validUntil: 'Постоянная акция',
      icon: 'Heart',
    },
    {
      title: 'Студенческая скидка',
      discount: '10%',
      description: 'Скидка для студентов по предъявлению студенческого',
      validUntil: 'Постоянная акция',
      icon: 'GraduationCap',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Цены и акции</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выбирайте удобный формат занятий. Чем больше абонемент, тем выгоднее цена!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl transition-all ${
                  plan.popular ? 'border-primary border-2 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
                    Популярный
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                      <Icon name={plan.icon} size={40} className={plan.popular ? 'text-primary' : 'text-foreground'} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                    <p className="text-muted-foreground mt-1">/ {plan.period}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 pb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-primary' : ''}`} size="lg">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Акции и скидки</h2>
            <p className="text-lg text-muted-foreground">
              Дополнительные возможности сэкономить на занятиях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={promo.icon} size={28} className="text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{promo.title}</h3>
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                          {promo.discount}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{promo.description}</p>
                      <p className="text-xs text-primary font-semibold">
                        Действует: {promo.validUntil}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Дополнительные услуги</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="UserPlus" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Индивидуальные занятия</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Персональные тренировки с преподавателем
                  </p>
                  <p className="text-2xl font-bold">1500 ₽ <span className="text-base font-normal text-muted-foreground">/ час</span></p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Award" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Мастер-классы</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Специальные занятия от приглашенных хореографов
                  </p>
                  <p className="text-2xl font-bold">800 ₽ <span className="text-base font-normal text-muted-foreground">/ занятие</span></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(255,20,90,0.9), rgba(138,27,163,0.9)), url('https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/f12674f1-201a-45d4-a686-f4ff95fd8741.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать танцевать?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запишитесь на пробное занятие со скидкой 50% прямо сейчас!
          </p>
          <Button size="lg" className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90">
            Записаться на пробное занятие
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
