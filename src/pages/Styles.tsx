import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Styles = () => {
  const styles = [
    {
      name: 'Hip-Hop',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/be7ef88b-6001-4075-a4b2-84f5b5c911a7.jpg',
      description: 'Энергичный стиль уличной культуры с динамичными движениями и мощными битами',
      levels: ['Начинающий', 'Средний', 'Продвинутый'],
      duration: '60 минут',
      icon: 'Zap',
      benefits: ['Развивает координацию', 'Улучшает чувство ритма', 'Повышает выносливость'],
    },
    {
      name: 'Contemporary',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/1e673a1e-3108-4716-9353-53c289d9283f.jpg',
      description: 'Современный танец, сочетающий элементы балета, джаза и модерна',
      levels: ['Средний', 'Продвинутый'],
      duration: '75 минут',
      icon: 'Heart',
      benefits: ['Развивает гибкость', 'Улучшает пластику', 'Раскрывает эмоциональность'],
    },
    {
      name: 'Латина',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/adbc56ea-2e0e-4287-be5c-453051c4e3b6.jpg',
      description: 'Страстные латиноамериканские танцы: сальса, бачата, реггетон',
      levels: ['Начинающий', 'Средний', 'Продвинутый'],
      duration: '60 минут',
      icon: 'Music',
      benefits: ['Улучшает осанку', 'Развивает грацию', 'Повышает уверенность'],
    },
    {
      name: 'Балет',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/1e673a1e-3108-4716-9353-53c289d9283f.jpg',
      description: 'Классическая хореография с акцентом на технику и грацию движений',
      levels: ['Начинающий', 'Средний'],
      duration: '90 минут',
      icon: 'Star',
      benefits: ['Формирует осанку', 'Развивает дисциплину', 'Улучшает баланс'],
    },
    {
      name: 'Jazz-Funk',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/be7ef88b-6001-4075-a4b2-84f5b5c911a7.jpg',
      description: 'Стильная смесь джаза, фанка и современной хореографии',
      levels: ['Начинающий', 'Средний', 'Продвинутый'],
      duration: '60 минут',
      icon: 'Sparkles',
      benefits: ['Развивает артистизм', 'Улучшает пластику', 'Повышает энергию'],
    },
    {
      name: 'Breakdance',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/adbc56ea-2e0e-4287-be5c-453051c4e3b6.jpg',
      description: 'Акробатический уличный танец с элементами силовых трюков',
      levels: ['Средний', 'Продвинутый'],
      duration: '75 минут',
      icon: 'Flame',
      benefits: ['Развивает силу', 'Улучшает акробатику', 'Повышает гибкость'],
    },
    {
      name: 'Vogue',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/1e673a1e-3108-4716-9353-53c289d9283f.jpg',
      description: 'Экспрессивный стиль с подиумными позами и плавными переходами',
      levels: ['Начинающий', 'Средний'],
      duration: '60 минут',
      icon: 'Crown',
      benefits: ['Развивает уверенность', 'Улучшает пластику', 'Раскрывает индивидуальность'],
    },
    {
      name: 'Dancehall',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/be7ef88b-6001-4075-a4b2-84f5b5c911a7.jpg',
      description: 'Ямайский танцевальный стиль с характерными изоляциями и грувом',
      levels: ['Начинающий', 'Средний', 'Продвинутый'],
      duration: '60 минут',
      icon: 'Sparkle',
      benefits: ['Развивает координацию', 'Улучшает ритмику', 'Повышает выносливость'],
    },
    {
      name: 'Стретчинг',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/adbc56ea-2e0e-4287-be5c-453051c4e3b6.jpg',
      description: 'Комплекс упражнений для развития гибкости и растяжки',
      levels: ['Все уровни'],
      duration: '60 минут',
      icon: 'Activity',
      benefits: ['Развивает гибкость', 'Снимает напряжение', 'Улучшает самочувствие'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Танцевальные направления
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Разнообразие стилей для любого уровня подготовки. Найдите свой танец и начните развиваться вместе с профессионалами
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="grid gap-8">
            {styles.map((style, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center backdrop-blur">
                        <Icon name={style.icon} className="text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-3xl mb-3">{style.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {style.levels.map((level, idx) => (
                            <Badge key={idx} variant="secondary">
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>

                      <p className="text-muted-foreground mb-6 text-lg">
                        {style.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={18} className="text-primary" />
                          <span>Длительность: {style.duration}</span>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Icon name="CheckCircle" size={18} className="text-primary" />
                            Преимущества:
                          </h4>
                          <ul className="space-y-1 ml-6">
                            {style.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">
                                • {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Записаться на занятие
                      </Button>
                      <Button variant="outline">
                        Узнать расписание
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Не можете выбрать направление?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Приходите на бесплатное пробное занятие и попробуйте разные стили под руководством наших преподавателей
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Записаться на пробное занятие
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Styles;
