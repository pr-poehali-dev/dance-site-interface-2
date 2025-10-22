import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const danceStyles = [
    {
      title: 'Хип-хоп',
      level: 'Для всех уровней',
      schedule: '3 раза в неделю',
      price: '₽200/занятие',
      description: 'Энергичный стиль с уличной культурой'
    },
    {
      title: 'Современный танец',
      level: 'Начинающие - Продвинутые',
      schedule: '2 раза в неделю',
      price: '₽250/занятие',
      description: 'Экспрессивные движения и свобода самовыражения'
    },
    {
      title: 'Балет',
      level: 'Все уровни',
      schedule: '4 раза в неделю',
      price: '₽300/занятие',
      description: 'Классическая техника и грация'
    },
    {
      title: 'Сальса',
      level: 'Начинающие - Средний',
      schedule: '2 раза в неделю',
      price: '₽220/занятие',
      description: 'Латиноамериканские ритмы и страсть'
    },
    {
      title: 'Брейк-данс',
      level: 'Средний - Продвинутый',
      schedule: '3 раза в неделю',
      price: '₽280/занятие',
      description: 'Акробатика и динамичные движения'
    },
    {
      title: 'Джаз-фанк',
      level: 'Для всех',
      schedule: '2 раза в неделю',
      price: '₽230/занятие',
      description: 'Стильные комбинации под современную музыку'
    }
  ];

  const scheduleData = [
    { day: 'Понедельник', time: '18:00-19:30', style: 'Хип-хоп', level: 'Начинающие' },
    { day: 'Понедельник', time: '19:45-21:15', style: 'Современный танец', level: 'Продвинутые' },
    { day: 'Вторник', time: '17:00-18:30', style: 'Балет', level: 'Все уровни' },
    { day: 'Вторник', time: '18:45-20:15', style: 'Сальса', level: 'Начинающие' },
    { day: 'Среда', time: '18:00-19:30', style: 'Брейк-данс', level: 'Средний' },
    { day: 'Среда', time: '19:45-21:15', style: 'Джаз-фанк', level: 'Все уровни' },
    { day: 'Четверг', time: '17:00-18:30', style: 'Балет', level: 'Продвинутые' },
    { day: 'Четверг', time: '18:45-20:15', style: 'Хип-хоп', level: 'Средний' },
    { day: 'Пятница', time: '18:00-19:30', style: 'Современный танец', level: 'Начинающие' },
    { day: 'Пятница', time: '19:45-21:15', style: 'Сальса', level: 'Средний' }
  ];

  const pricingOptions = [
    {
      title: 'Разовое занятие',
      price: '₽300',
      features: ['1 занятие', 'Любое направление', 'Пробный урок со скидкой 50%']
    },
    {
      title: 'Абонемент 8 занятий',
      price: '₽2000',
      features: ['8 занятий', 'Срок действия: 1 месяц', 'Экономия 25%', 'Можно заморозить']
    },
    {
      title: 'Безлимит',
      price: '₽3500',
      features: ['Неограниченно занятий', 'Все направления', 'Срок действия: 1 месяц', 'Максимальная выгода']
    }
  ];

  const faqs = [
    {
      question: 'Нужна ли специальная подготовка?',
      answer: 'Нет! У нас есть группы для всех уровней подготовки - от абсолютных новичков до продвинутых танцоров. Наши опытные преподаватели адаптируют программу под каждую группу.'
    },
    {
      question: 'Что нужно взять с собой на первое занятие?',
      answer: 'Удобную спортивную одежду, сменную обувь (кроссовки или специальную танцевальную обувь), бутылку воды и хорошее настроение! В студии есть раздевалки и душевые.'
    },
    {
      question: 'Можно ли заниматься в нескольких группах одновременно?',
      answer: 'Конечно! При покупке абонемента на 8 занятий или безлимита вы можете посещать любые направления по расписанию. Это отличная возможность попробовать разные стили танца.'
    },
    {
      question: 'Как проходит первое пробное занятие?',
      answer: 'Пробное занятие проходит со скидкой 50%. Вы присоединяетесь к группе своего уровня, знакомитесь с преподавателем и другими учениками, изучаете базовые движения. Без стресса и в комфортной атмосфере!'
    },
    {
      question: 'Есть ли возрастные ограничения?',
      answer: 'Мы принимаем учеников от 7 лет и старше. Для детей 7-12 лет есть отдельные детские группы. Взрослые могут начать заниматься в любом возрасте - танец не знает границ!'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Music" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">DanceFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-foreground'}`}>
                Главная
              </button>
              <button onClick={() => scrollToSection('styles')} className={`transition-colors hover:text-primary ${activeSection === 'styles' ? 'text-primary font-semibold' : 'text-foreground'}`}>
                Направления
              </button>
              <button onClick={() => scrollToSection('schedule')} className={`transition-colors hover:text-primary ${activeSection === 'schedule' ? 'text-primary font-semibold' : 'text-foreground'}`}>
                Расписание
              </button>
              <button onClick={() => scrollToSection('pricing')} className={`transition-colors hover:text-primary ${activeSection === 'pricing' ? 'text-primary font-semibold' : 'text-foreground'}`}>
                Цены
              </button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors hover:text-primary ${activeSection === 'contact' ? 'text-primary font-semibold' : 'text-foreground'}`}>
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="lg">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Танцуй свою <span className="text-primary">историю</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Откройте мир танца с профессиональными преподавателями. Для всех возрастов и уровней подготовки.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                  Пробное занятие -50%
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('styles')} className="text-lg px-8">
                  Посмотреть направления
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="https://v3b.fal.media/files/b/lion/OCljzWYU2zAXzoeG4bVFA_output.png" 
                alt="Dance" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашей школе</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DanceFlow — это пространство, где каждый находит свой стиль. Мы верим, что танец доступен всем, независимо от возраста и уровня подготовки. 
              Наши преподаватели — профессионалы с многолетним опытом, которые создают вдохновляющую атмосферу для развития.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle>500+ учеников</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Присоединяйтесь к нашему дружному танцевальному сообществу</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-secondary" />
                </div>
                <CardTitle>15+ направлений</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">От классики до современных уличных стилей</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Star" size={32} className="text-accent" />
                </div>
                <CardTitle>8 лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Профессиональные преподаватели с международными сертификатами</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="styles" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Танцевальные направления</h2>
            <p className="text-xl text-muted-foreground">Выберите свой стиль или попробуйте несколько!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceStyles.map((style, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl">{style.title}</CardTitle>
                  <CardDescription className="text-base">{style.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{style.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <span className="text-sm">{style.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Wallet" size={18} className="text-secondary" />
                    <span className="text-sm font-semibold">{style.price}</span>
                  </div>
                  <Button className="w-full" onClick={() => scrollToSection('contact')}>
                    Записаться на пробное
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-xl text-muted-foreground">Выберите удобное время для занятий</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-px bg-border">
                <div className="bg-primary text-primary-foreground font-semibold p-4">День</div>
                <div className="bg-primary text-primary-foreground font-semibold p-4">Время</div>
                <div className="bg-primary text-primary-foreground font-semibold p-4">Направление</div>
                <div className="bg-primary text-primary-foreground font-semibold p-4">Уровень</div>
                {scheduleData.map((item, index) => (
                  <>
                    <div key={`${index}-day`} className="bg-white p-4 font-medium">{item.day}</div>
                    <div key={`${index}-time`} className="bg-white p-4">{item.time}</div>
                    <div key={`${index}-style`} className="bg-white p-4">{item.style}</div>
                    <div key={`${index}-level`} className="bg-white p-4">{item.level}</div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены и акции</h2>
            <p className="text-xl text-muted-foreground">Выгодные условия для постоянных учеников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in ${index === 1 ? 'border-primary border-2 scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  {index === 1 && (
                    <div className="bg-primary text-primary-foreground text-sm font-semibold py-1 px-4 rounded-full inline-block mb-2 mx-auto">
                      Популярный
                    </div>
                  )}
                  <CardTitle className="text-2xl mb-2">{option.title}</CardTitle>
                  <div className="text-5xl font-bold text-primary">{option.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'} onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="inline-block bg-accent/20 border-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Sparkles" size={32} className="text-accent" />
                  <div className="text-left">
                    <p className="font-bold text-lg">Специальное предложение!</p>
                    <p className="text-muted-foreground">Приведи друга — получи 2 занятия в подарок</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы наших учеников</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Запишитесь на пробное занятие прямо сейчас!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в течение часа</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Выберите направление или напишите вопрос" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Танцевальная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@danceflow.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 09:00 - 22:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Music" size={28} className="text-primary" />
                <span className="text-xl font-bold">DanceFlow</span>
              </div>
              <p className="text-background/80">Танцевальная школа для всех возрастов и уровней</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('styles')} className="hover:text-primary transition-colors">Направления</button></li>
                <li><button onClick={() => scrollToSection('schedule')} className="hover:text-primary transition-colors">Расписание</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@danceflow.ru</li>
                <li>г. Москва, ул. Танцевальная, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Подписка</h4>
              <p className="text-background/80 mb-4">Получайте новости о мастер-классах и акциях</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-background/10 border-background/20 text-background placeholder:text-background/50" />
                <Button size="icon">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 DanceFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
