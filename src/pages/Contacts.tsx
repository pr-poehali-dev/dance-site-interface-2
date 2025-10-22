import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (999) 123-45-67',
      description: 'Ежедневно с 9:00 до 22:00',
      color: 'from-primary to-pink-500',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@danceflow.ru',
      description: 'Ответим в течение 24 часов',
      color: 'from-secondary to-purple-500',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Танцевальная, 15',
      description: 'Рядом с метро Площадь Революции',
      color: 'from-accent to-orange-500',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Ежедневно 9:00 - 22:00',
      description: 'Без выходных и праздников',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const socialMedia = [
    { icon: 'Instagram', name: 'Instagram', handle: '@danceflow_studio', color: 'from-pink-500 to-rose-500' },
    { icon: 'Youtube', name: 'YouTube', handle: 'DanceFlow Studio', color: 'from-red-500 to-orange-500' },
    { icon: 'Facebook', name: 'Facebook', handle: 'DanceFlow', color: 'from-blue-600 to-blue-500' },
    { icon: 'MessageCircle', name: 'Telegram', handle: '@danceflow_bot', color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={info.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Введите ваше имя" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea placeholder="Расскажите, чем мы можем вам помочь..." rows={5} />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Как нас найти</h2>
              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                      <p>Карта загружается...</p>
                      <p className="text-sm mt-2">г. Москва, ул. Танцевальная, 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">На автомобиле</h4>
                    <p className="text-sm text-muted-foreground">Бесплатная парковка для учеников рядом со зданием</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Train" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">На метро</h4>
                    <p className="text-sm text-muted-foreground">Станция "Площадь Революции", выход 3, 5 минут пешком</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Bus" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">На автобусе</h4>
                    <p className="text-sm text-muted-foreground">Остановка "Театральная площадь", автобусы №12, 25, 101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Мы в социальных сетях</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialMedia.map((social, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={social.icon} className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold mb-1">{social.name}</h3>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Приходите к нам в гости!</h2>
                  <p className="text-muted-foreground mb-6">
                    Запишитесь на бесплатное пробное занятие или просто зайдите познакомиться со школой. 
                    Мы всегда рады новым ученикам!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Check" className="text-white" size={16} />
                      </div>
                      <span>Бесплатное пробное занятие</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Check" className="text-white" size={16} />
                      </div>
                      <span>Экскурсия по студии</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Check" className="text-white" size={16} />
                      </div>
                      <span>Консультация с преподавателем</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на пробное
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить нам
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
