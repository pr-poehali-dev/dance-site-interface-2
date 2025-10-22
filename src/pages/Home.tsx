import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Home = () => {
  const danceStyles = [
    {
      icon: 'Zap',
      title: 'Хип-хоп',
      description: 'Энергичный и стильный танец с уникальными движениями',
      color: 'from-primary to-pink-500',
    },
    {
      icon: 'Heart',
      title: 'Современные танцы',
      description: 'Пластика и эмоции в каждом движении',
      color: 'from-secondary to-purple-500',
    },
    {
      icon: 'Sparkles',
      title: 'Бальные танцы',
      description: 'Элегантность и грация классического танца',
      color: 'from-accent to-yellow-500',
    },
    {
      icon: 'Music',
      title: 'Латина',
      description: 'Страстные и зажигательные латиноамериканские ритмы',
      color: 'from-red-500 to-orange-500',
    },
  ];

  const levels = [
    {
      icon: 'Star',
      title: 'Начинающие',
      description: 'Первые шаги в мире танца без опыта',
    },
    {
      icon: 'TrendingUp',
      title: 'Продолжающие',
      description: 'Развитие навыков и новые техники',
    },
    {
      icon: 'Award',
      title: 'Профессионалы',
      description: 'Совершенствование мастерства',
    },
  ];

  const faqs = [
    {
      question: 'Нужна ли специальная форма для занятий?',
      answer: 'Для первого занятия достаточно удобной спортивной одежды и чистой обуви. В дальнейшем преподаватель порекомендует оптимальную форму для вашего направления.',
    },
    {
      question: 'Можно ли начать заниматься без опыта?',
      answer: 'Конечно! У нас есть группы для начинающих по всем направлениям. Наши преподаватели помогут освоить базовые движения и чувствовать себя уверенно на паркете.',
    },
    {
      question: 'Как часто проходят занятия?',
      answer: 'Занятия проходят 2-3 раза в неделю в зависимости от выбранного направления и уровня группы. Вы можете выбрать удобное для вас расписание.',
    },
    {
      question: 'Есть ли пробное занятие?',
      answer: 'Да! Первое пробное занятие бесплатное. Это отличная возможность познакомиться с преподавателем, оценить атмосферу и понять, подходит ли вам направление.',
    },
    {
      question: 'Какие возрастные группы у вас есть?',
      answer: 'Мы принимаем всех от 4 до 99 лет! У нас есть детские группы, подростковые, взрослые и группы для людей старшего возраста.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI0OCwzMiwxMTQsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container relative z-10 text-center px-4 py-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Танцуй с нами!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Школа танцев для всех возрастов и уровней подготовки. 
            Найди свой стиль и раскрой свой потенциал!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/pricing">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Записаться на пробное занятие
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/styles">
                Выбрать направление
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О нас</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              DanceFlow — это современная танцевальная школа, где каждый найдет свое направление. 
              Мы объединяем профессионалов и новичков, создавая дружелюбную атмосферу для развития и самовыражения через танец.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <CardTitle>500+ учеников</CardTitle>
                <CardDescription>Доверяют нам свое развитие</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-purple-500 flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-white" size={32} />
                </div>
                <CardTitle>15+ направлений</CardTitle>
                <CardDescription>От классики до современных стилей</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-white" size={32} />
                </div>
                <CardTitle>10 лет опыта</CardTitle>
                <CardDescription>Профессиональные преподаватели</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные направления</h2>
            <p className="text-lg text-muted-foreground">
              Выбери свой стиль и начни танцевать уже сегодня
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceStyles.map((style, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${style.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={style.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle>{style.title}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/styles">
                Смотреть все направления
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Занятия для любого уровня</h2>
            <p className="text-lg text-muted-foreground">
              От первых шагов до профессионального мастерства
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {levels.map((level, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={level.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                  <CardDescription className="text-base">{level.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о наших занятиях
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готов начать танцевать?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Запишись на бесплатное пробное занятие и открой для себя мир танца
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/pricing">
              <Icon name="CalendarCheck" size={20} className="mr-2" />
              Записаться сейчас
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;