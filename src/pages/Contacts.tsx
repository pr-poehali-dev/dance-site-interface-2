import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом или приходите в студию!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите, какое направление вас интересует..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Адрес студии</h3>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Танцевальная, д. 15, стр. 1
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          3 минуты от метро "Площадь Революции"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ежедневно с 10:00 до 22:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@danceflow.ru</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ответим в течение 24 часов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Режим работы</h3>
                        <p className="text-muted-foreground">
                          Пн-Пт: 10:00 - 22:00<br />
                          Сб-Вс: 11:00 - 20:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="font-bold mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-muted hover:bg-primary/10 rounded-full transition-colors group"
                  >
                    <Icon name="Instagram" size={24} className="group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-muted hover:bg-primary/10 rounded-full transition-colors group"
                  >
                    <Icon name="Facebook" size={24} className="group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-muted hover:bg-primary/10 rounded-full transition-colors group"
                  >
                    <Icon name="Youtube" size={24} className="group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-muted hover:bg-primary/10 rounded-full transition-colors group"
                  >
                    <Icon name="Send" size={24} className="group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full h-[400px] bg-muted">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d4c76f6d8a7b7a0c7b0e7f1c7a0b7d&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            title="Карта"
            className="grayscale"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
