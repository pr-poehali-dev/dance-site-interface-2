import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const weekSchedule = [
    {
      day: 'Понедельник',
      classes: [
        { time: '10:00-11:30', style: 'Классическая хореография', level: 'Начинающие', teacher: 'Анна Петрова' },
        { time: '17:00-18:30', style: 'Классическая хореография', level: 'Продвинутый', teacher: 'Анна Петрова' },
        { time: '18:00-19:30', style: 'Hip-Hop', level: 'Начинающие', teacher: 'Дмитрий Иванов' },
        { time: '19:30-21:00', style: 'Джаз-фанк', level: 'Средний', teacher: 'Елена Смирнова' },
      ],
    },
    {
      day: 'Вторник',
      classes: [
        { time: '18:00-19:30', style: 'Латина', level: 'Начинающие', teacher: 'Мария Гонсалес' },
        { time: '19:00-20:30', style: 'Contemporary', level: 'Начинающие', teacher: 'София Волкова' },
        { time: '20:00-21:30', style: 'Брейк-данс', level: 'Средний', teacher: 'Максим Королев' },
      ],
    },
    {
      day: 'Среда',
      classes: [
        { time: '10:00-11:30', style: 'Классическая хореография', level: 'Средний', teacher: 'Анна Петрова' },
        { time: '17:00-18:30', style: 'Классическая хореография', level: 'Начинающие', teacher: 'Анна Петрова' },
        { time: '18:00-19:30', style: 'Hip-Hop', level: 'Средний', teacher: 'Дмитрий Иванов' },
        { time: '19:30-21:00', style: 'K-Pop', level: 'Начинающие', teacher: 'Кристина Ли' },
      ],
    },
    {
      day: 'Четверг',
      classes: [
        { time: '18:00-19:30', style: 'Латина', level: 'Средний', teacher: 'Мария Гонсалес' },
        { time: '19:00-20:30', style: 'Contemporary', level: 'Продвинутый', teacher: 'София Волкова' },
        { time: '20:00-21:30', style: 'Брейк-данс', level: 'Продвинутый', teacher: 'Максим Королев' },
      ],
    },
    {
      day: 'Пятница',
      classes: [
        { time: '17:00-18:30', style: 'Классическая хореография', level: 'Средний', teacher: 'Анна Петрова' },
        { time: '18:00-19:30', style: 'Hip-Hop', level: 'Продвинутый', teacher: 'Дмитрий Иванов' },
        { time: '19:30-21:00', style: 'K-Pop', level: 'Средний', teacher: 'Кристина Ли' },
      ],
    },
    {
      day: 'Суббота',
      classes: [
        { time: '11:00-12:00', style: 'Детская хореография', level: '4-6 лет', teacher: 'Елена Смирнова' },
        { time: '12:30-13:30', style: 'Детская хореография', level: '7-10 лет', teacher: 'Елена Смирнова' },
        { time: '14:00-15:30', style: 'Hip-Hop', level: 'Открытая группа', teacher: 'Дмитрий Иванов' },
        { time: '20:00-21:30', style: 'Брейк-данс', level: 'Средний', teacher: 'Максим Королев' },
      ],
    },
    {
      day: 'Воскресенье',
      classes: [
        { time: '11:00-12:00', style: 'Детская хореография', level: '4-6 лет', teacher: 'Елена Смирнова' },
        { time: '12:30-13:30', style: 'Детская хореография', level: '7-10 лет', teacher: 'Елена Смирнова' },
        { time: '15:00-16:30', style: 'Contemporary', level: 'Открытая группа', teacher: 'София Волкова' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Расписание занятий</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выбирайте удобное время для занятий. Группы формируются по уровням подготовки.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Понедельник" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              {weekSchedule.map((day) => (
                <TabsTrigger key={day.day} value={day.day} className="text-xs md:text-sm">
                  {day.day.substring(0, 2)}
                </TabsTrigger>
              ))}
            </TabsList>

            {weekSchedule.map((day) => (
              <TabsContent key={day.day} value={day.day}>
                <div className="mb-4">
                  <h2 className="text-3xl font-bold">{day.day}</h2>
                  <p className="text-muted-foreground">
                    {day.classes.length} {day.classes.length === 1 ? 'занятие' : 'занятий'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {day.classes.map((classItem, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={20} className="text-primary" />
                            <span className="text-lg font-bold">{classItem.time}</span>
                          </div>
                          <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-semibold">
                            {classItem.level}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2">{classItem.style}</h3>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Icon name="User" size={16} />
                          <span className="text-sm">{classItem.teacher}</span>
                        </div>

                        <Button className="w-full">Записаться</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Гибкое расписание</h3>
              <p className="text-muted-foreground">
                Занятия 7 дней в неделю с утра до вечера
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Группы по уровням</h3>
              <p className="text-muted-foreground">
                От начинающих до профессионалов
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">90 минут</h3>
              <p className="text-muted-foreground">
                Оптимальная длительность занятия
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
