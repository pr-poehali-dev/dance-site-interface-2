import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const danceStyles = [
    {
      icon: 'Zap',
      title: 'Hip-Hop',
      description: 'Энергичные движения и уличная культура',
      levels: 'Все уровни',
    },
    {
      icon: 'Heart',
      title: 'Contemporary',
      description: 'Современный танец и свобода выражения',
      levels: 'Начинающие - Продвинутые',
    },
    {
      icon: 'Flame',
      title: 'Break Dance',
      description: 'Акробатика и экстремальные элементы',
      levels: 'Средний - Продвинутый',
    },
    {
      icon: 'Sparkles',
      title: 'Jazz-Funk',
      description: 'Стиль, грация и яркая хореография',
      levels: 'Все уровни',
    },
    {
      icon: 'Music',
      title: 'Dancehall',
      description: 'Ямайские ритмы и драйв',
      levels: 'Начинающие - Средний',
    },
    {
      icon: 'Star',
      title: 'Vogue',
      description: 'Модельная пластика и самовыражение',
      levels: 'Все уровни',
    },
  ];

  const features = [
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Профессионалы с международным опытом',
    },
    {
      icon: 'Trophy',
      title: 'Участие в конкурсах',
      description: 'Регулярные выступления и соревнования',
    },
    {
      icon: 'Calendar',
      title: 'Гибкое расписание',
      description: 'Занятия 7 дней в неделю',
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Документы о прохождении программ',
    },
  ];

  const faq = [
    {
      question: 'Нужна ли специальная подготовка?',
      answer: 'Нет, мы принимаем учеников любого уровня. У нас есть группы для начинающих, где вы освоите базовые движения с нуля.',
    },
    {
      question: 'Что нужно для первого занятия?',
      answer: 'Удобная одежда для движения и чистая сменная обувь. Воду и полотенце можно взять с собой.',
    },
    {
      question: 'Как часто нужно посещать занятия?',
      answer: 'Рекомендуем 2-3 раза в неделю для заметного прогресса. Но вы можете выбрать любой удобный график.',
    },
    {
      question: 'Можно ли попробовать разные направления?',
      answer: 'Да! Мы поощряем экспериментирование. Вы можете посещать пробные занятия разных направлений.',
    },
    {
      question: 'Есть ли возрастные ограничения?',
      answer: 'У нас есть группы для детей от 5 лет, подростков и взрослых. Танцевать никогда не поздно!',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/3ea578d4-fb53-4261-8dbe-98d407d0346c.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in drop-shadow-lg">
            Танцуй Свою Жизнь!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up drop-shadow">
            Раскройте свой потенциал в современной школе танцев с 15+ направлениями для всех уровней
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contacts">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-xl">
                Записаться на пробное
              </Button>
            </Link>
            <Link to="/directions">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 shadow-xl">
                Смотреть направления
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О нашей школе</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DanceFlow — это пространство, где каждый находит свой стиль и ритм. 
              Мы объединяем профессиональное обучение, творческую атмосферу и 
              сообщество единомышленников.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Танцевальные направления</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От классики до экспериментальных стилей — выбирайте то, что откликается вашей душе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {danceStyles.map((style, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer overflow-hidden">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={style.icon} className="text-white" size={40} />
                  </div>
                  <h3 className="font-bold text-2xl mb-2">{style.title}</h3>
                  <p className="text-muted-foreground mb-4">{style.description}</p>
                  <div className="flex items-center text-sm text-primary font-semibold">
                    <Icon name="Target" size={16} className="mr-1" />
                    {style.levels}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/directions">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                Посмотреть все направления
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/7d32826a-7447-47db-a8d1-4f6ae4afd4b4/files/2cfb26a9-607e-4325-b918-4300fceae5cd.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Icon name="Gift" size={48} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Специальное предложение!</h2>
            <p className="text-xl md:text-2xl mb-8 drop-shadow">
              Первое пробное занятие — бесплатно! Приходите и почувствуйте энергию танца.
            </p>
            <Link to="/contacts">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 shadow-2xl font-bold">
                Забронировать занятие
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Разнообразие стилей и уровней</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Независимо от вашего опыта и предпочтений, у нас найдется подходящее направление
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smile" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Начинающие</h3>
                <p className="text-muted-foreground">
                  Никогда не танцевали? Отлично! Начнем с основ и постепенно освоим все техники.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Средний уровень</h3>
                <p className="text-muted-foreground">
                  Есть базовый опыт? Развивайте технику и изучайте сложные комбинации.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Продвинутые</h3>
                <p className="text-muted-foreground">
                  Готовы к вызовам? Профессиональная хореография и подготовка к конкурсам.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о наших занятиях
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 hover:border-primary transition-colors">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;