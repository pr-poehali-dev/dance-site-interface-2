import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const schedule = {
    monday: [
      { time: '10:00', style: 'Contemporary', level: 'Начинающие', instructor: 'Анна Петрова', hall: 'Зал 1' },
      { time: '12:00', style: 'Hip-Hop', level: 'Средний', instructor: 'Дмитрий Козлов', hall: 'Зал 2' },
      { time: '18:00', style: 'Jazz-Funk', level: 'Все уровни', instructor: 'Мария Соколова', hall: 'Зал 1' },
      { time: '19:30', style: 'Break Dance', level: 'Продвинутый', instructor: 'Александр Волков', hall: 'Зал 3' },
      { time: '20:00', style: 'Vogue', level: 'Начинающие', instructor: 'Елена Смирнова', hall: 'Зал 2' },
    ],
    tuesday: [
      { time: '09:00', style: 'Dancehall', level: 'Начинающие', instructor: 'Карина Иванова', hall: 'Зал 1' },
      { time: '11:00', style: 'House Dance', level: 'Средний', instructor: 'Сергей Морозов', hall: 'Зал 2' },
      { time: '17:00', style: 'Afro Dance', level: 'Все уровни', instructor: 'Даниэль Нкуру', hall: 'Зал 1' },
      { time: '19:00', style: 'Hip-Hop', level: 'Продвинутый', instructor: 'Дмитрий Козлов', hall: 'Зал 3' },
      { time: '20:30', style: 'Contemporary', level: 'Средний', instructor: 'Анна Петрова', hall: 'Зал 2' },
    ],
    wednesday: [
      { time: '10:00', style: 'Vogue', level: 'Средний', instructor: 'Елена Смирнова', hall: 'Зал 1' },
      { time: '12:00', style: 'Waacking', level: 'Начинающие', instructor: 'Ольга Новикова', hall: 'Зал 2' },
      { time: '18:00', style: 'Break Dance', level: 'Начинающие', instructor: 'Александр Волков', hall: 'Зал 3' },
      { time: '19:00', style: 'Jazz-Funk', level: 'Продвинутый', instructor: 'Мария Соколова', hall: 'Зал 1' },
      { time: '20:00', style: 'Dancehall', level: 'Средний', instructor: 'Карина Иванова', hall: 'Зал 2' },
    ],
    thursday: [
      { time: '09:00', style: 'Contemporary', level: 'Продвинутый', instructor: 'Анна Петрова', hall: 'Зал 1' },
      { time: '11:00', style: 'Hip-Hop', level: 'Начинающие', instructor: 'Дмитрий Козлов', hall: 'Зал 2' },
      { time: '17:00', style: 'House Dance', level: 'Продвинутый', instructor: 'Сергей Морозов', hall: 'Зал 3' },
      { time: '19:00', style: 'Afro Dance', level: 'Начинающие', instructor: 'Даниэль Нкуру', hall: 'Зал 1' },
      { time: '20:30', style: 'Vogue', level: 'Все уровни', instructor: 'Елена Смирнова', hall: 'Зал 2' },
    ],
    friday: [
      { time: '10:00', style: 'Jazz-Funk', level: 'Начинающие', instructor: 'Мария Соколова', hall: 'Зал 1' },
      { time: '12:00', style: 'Waacking', level: 'Средний', instructor: 'Ольга Новикова', hall: 'Зал 2' },
      { time: '18:00', style: 'Hip-Hop', level: 'Все уровни', instructor: 'Дмитрий Козлов', hall: 'Зал 3' },
      { time: '19:30', style: 'Dancehall', level: 'Продвинутый', instructor: 'Карина Иванова', hall: 'Зал 1' },
      { time: '20:00', style: 'Break Dance', level: 'Средний', instructor: 'Александр Волков', hall: 'Зал 2' },
    ],
    saturday: [
      { time: '11:00', style: 'Contemporary', level: 'Все уровни', instructor: 'Анна Петрова', hall: 'Зал 1' },
      { time: '13:00', style: 'Afro Dance', level: 'Средний', instructor: 'Даниэль Нкуру', hall: 'Зал 2' },
      { time: '15:00', style: 'Vogue', level: 'Продвинутый', instructor: 'Елена Смирнова', hall: 'Зал 1' },
      { time: '17:00', style: 'House Dance', level: 'Начинающие', instructor: 'Сергей Морозов', hall: 'Зал 3' },
    ],
    sunday: [
      { time: '12:00', style: 'Jazz-Funk', level: 'Средний', instructor: 'Мария Соколова', hall: 'Зал 1' },
      { time: '14:00', style: 'Hip-Hop', level: 'Начинающие', instructor: 'Дмитрий Козлов', hall: 'Зал 2' },
      { time: '16:00', style: 'Waacking', level: 'Все уровни', instructor: 'Ольга Новикова', hall: 'Зал 1' },
    ],
  };

  const days = [
    { key: 'monday', label: 'Понедельник' },
    { key: 'tuesday', label: 'Вторник' },
    { key: 'wednesday', label: 'Среда' },
    { key: 'thursday', label: 'Четверг' },
    { key: 'friday', label: 'Пятница' },
    { key: 'saturday', label: 'Суббота' },
    { key: 'sunday', label: 'Воскресенье' },
  ];

  const getLevelColor = (level: string) => {
    if (level.includes('Начинающие')) return 'bg-green-100 text-green-800';
    if (level.includes('Средний')) return 'bg-yellow-100 text-yellow-800';
    if (level.includes('Продвинутый')) return 'bg-red-100 text-red-800';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-primary via-secondary to-accent py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Расписание занятий</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Выбирайте удобное время и направление. Занятия проходят 7 дней в неделю!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="monday" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 mb-8 h-auto">
              {days.map((day) => (
                <TabsTrigger key={day.key} value={day.key} className="text-sm md:text-base py-3">
                  {day.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day.key} value={day.key}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {schedule[day.key as keyof typeof schedule].map((lesson, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{lesson.style}</CardTitle>
                            <Badge className={getLevelColor(lesson.level)}>{lesson.level}</Badge>
                          </div>
                          <div className="flex items-center text-primary font-bold text-xl">
                            <Icon name="Clock" size={24} className="mr-2" />
                            {lesson.time}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center">
                            <Icon name="User" size={18} className="mr-2" />
                            <span>Преподаватель: <strong className="text-foreground">{lesson.instructor}</strong></span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="MapPin" size={18} className="mr-2" />
                            <span>Место: <strong className="text-foreground">{lesson.hall}</strong></span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Важная информация</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Clock" size={32} className="text-primary mb-2" />
                  <CardTitle>Длительность занятий</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Стандартное занятие длится 60 минут. Break Dance и Contemporary — 75-90 минут.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Users" size={32} className="text-primary mb-2" />
                  <CardTitle>Размер групп</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Группы от 10 до 15 человек для комфортного обучения и индивидуального подхода.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="CalendarCheck" size={32} className="text-primary mb-2" />
                  <CardTitle>Бронирование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Рекомендуем записываться заранее. Можно через сайт, по телефону или в мобильном приложении.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="AlertCircle" size={32} className="text-primary mb-2" />
                  <CardTitle>Отмена занятия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отменить запись можно за 2 часа до начала занятия. Занятие будет сохранено на вашем абонементе.
                  </p>
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

export default Schedule;
