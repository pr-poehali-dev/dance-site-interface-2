import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Directions = () => {
  const directions = [
    {
      name: 'Hip-Hop',
      icon: 'Zap',
      description: 'Энергичный уличный стиль с элементами freestyle и грува',
      levels: ['Начинающие', 'Средний', 'Продвинутый'],
      schedule: 'ПН, СР, ПТ 18:00-19:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/2cfb26a9-607e-4325-b918-4300fceae5cd.jpg',
    },
    {
      name: 'Contemporary',
      icon: 'Heart',
      description: 'Современный танец, сочетающий технику и эмоциональную выразительность',
      levels: ['Начинающие', 'Средний', 'Продвинутый'],
      schedule: 'ВТ, ЧТ 19:00-20:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/9aab3570-8774-4f4b-8594-0f61254eef15.jpg',
    },
    {
      name: 'Брейк-данс',
      icon: 'Flame',
      description: 'Акробатический стиль с элементами силовых и вращательных трюков',
      levels: ['Средний', 'Продвинутый'],
      schedule: 'ВТ, ЧТ, СБ 20:00-21:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/2cfb26a9-607e-4325-b918-4300fceae5cd.jpg',
    },
    {
      name: 'Jazz-Funk',
      icon: 'Sparkles',
      description: 'Стильные комбинации под современную музыку с элементами джаза',
      levels: ['Начинающие', 'Средний'],
      schedule: 'ПН, СР 19:30-21:00',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/3ea578d4-fb53-4261-8dbe-98d407d0346c.jpg',
    },
    {
      name: 'Dancehall',
      icon: 'Music',
      description: 'Ямайские ритмы, энергия и драйв в каждом движении',
      levels: ['Начинающие', 'Средний'],
      schedule: 'СР, ПТ 19:30-21:00',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/3ea578d4-fb53-4261-8dbe-98d407d0346c.jpg',
    },
    {
      name: 'Vogue',
      icon: 'Star',
      description: 'Модельная пластика, самовыражение и уникальный стиль',
      levels: ['Все уровни'],
      schedule: 'ВТ, ЧТ 18:00-19:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/9aab3570-8774-4f4b-8594-0f61254eef15.jpg',
    },
    {
      name: 'Латина',
      icon: 'Flame',
      description: 'Страстные латиноамериканские танцы: сальса, бачата, меренге',
      levels: ['Начинающие', 'Средний'],
      schedule: 'ПН, ЧТ 18:00-19:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/3ea578d4-fb53-4261-8dbe-98d407d0346c.jpg',
    },
    {
      name: 'K-Pop',
      icon: 'Star',
      description: 'Хореография в стиле корейских айдолов с синхронными движениями',
      levels: ['Начинающие', 'Средний'],
      schedule: 'СР, ПТ 20:00-21:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/2cfb26a9-607e-4325-b918-4300fceae5cd.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Танцевальные направления</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выбирайте из широкого спектра танцевальных стилей. Каждое направление ведут опытные преподаватели с профессиональным танцевальным образованием.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${direction.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Icon name={direction.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{direction.name}</h3>
                  <p className="text-muted-foreground mb-4">{direction.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Уровни:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {direction.levels.map((level, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold"
                          >
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-foreground">Расписание:</p>
                      <p className="text-sm text-muted-foreground">{direction.schedule}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Записаться на занятие
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Не можете выбрать направление?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию, и наши преподаватели помогут подобрать оптимальный стиль танца под ваши цели и предпочтения.
          </p>
          <Button size="lg" className="text-lg px-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Directions;