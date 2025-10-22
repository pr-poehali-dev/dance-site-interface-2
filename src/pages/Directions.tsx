import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Directions = () => {
  const directions = [
    {
      name: 'Hip-Hop',
      icon: '🎤',
      description: 'Энергичный уличный стиль с элементами freestyle и грува',
      levels: ['Начинающие', 'Средний', 'Продвинутый'],
      schedule: 'ПН, СР, ПТ 18:00-19:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/1a4f98d3-68cb-46f9-8e62-8d8d7c846331.jpg',
    },
    {
      name: 'Contemporary',
      icon: '💃',
      description: 'Современный танец, сочетающий технику и эмоциональную выразительность',
      levels: ['Начинающие', 'Средний', 'Продвинутый'],
      schedule: 'ВТ, ЧТ 19:00-20:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/bbff90ed-8d45-4522-974b-92638a3b9b32.jpg',
    },
    {
      name: 'Классическая хореография',
      icon: '🩰',
      description: 'Основа всех танцевальных стилей, развитие пластики и грации',
      levels: ['Начинающие', 'Средний', 'Продвинутый'],
      schedule: 'ПН, СР, ПТ 17:00-18:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/bbff90ed-8d45-4522-974b-92638a3b9b32.jpg',
    },
    {
      name: 'Латина',
      icon: '🔥',
      description: 'Страстные латиноамериканские танцы: сальса, бачата, меренге',
      levels: ['Начинающие', 'Средний'],
      schedule: 'ВТ, ЧТ 18:00-19:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/f12674f1-201a-45d4-a686-f4ff95fd8741.jpg',
    },
    {
      name: 'K-Pop',
      icon: '⭐',
      description: 'Хореография в стиле корейских айдолов с синхронными движениями',
      levels: ['Начинающие', 'Средний'],
      schedule: 'СР, ПТ 19:30-21:00',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/1a4f98d3-68cb-46f9-8e62-8d8d7c846331.jpg',
    },
    {
      name: 'Брейк-данс',
      icon: '🌀',
      description: 'Акробатический стиль с элементами силовых и вращательных трюков',
      levels: ['Средний', 'Продвинутый'],
      schedule: 'ВТ, ЧТ, СБ 20:00-21:30',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/1a4f98d3-68cb-46f9-8e62-8d8d7c846331.jpg',
    },
    {
      name: 'Джаз-фанк',
      icon: '✨',
      description: 'Стильные комбинации под современную музыку с элементами джаза',
      levels: ['Начинающие', 'Средний'],
      schedule: 'ПН, СР 19:30-21:00',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/f12674f1-201a-45d4-a686-f4ff95fd8741.jpg',
    },
    {
      name: 'Детская хореография',
      icon: '🎨',
      description: 'Развитие координации, ритма и творческих способностей для детей 4-10 лет',
      levels: ['4-6 лет', '7-10 лет'],
      schedule: 'СБ, ВС 11:00-12:00',
      image: 'https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/bbff90ed-8d45-4522-974b-92638a3b9b32.jpg',
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
                    <div className="text-5xl">{direction.icon}</div>
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

                  <Button className="w-full">Записаться на занятие</Button>
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
          <Button size="lg" className="text-lg px-10">
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Directions;
