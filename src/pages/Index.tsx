import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <span className="font-heading text-xl font-bold">BeautyMed</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {['Услуги', 'Результаты', 'Цены', 'Отзывы', 'Специалисты', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollToSection('запись')}>Записаться</Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              Профессиональная коррекция фигуры
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Современные технологии для вашей красоты
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Экспертные процедуры по коррекции фигуры с применением инновационных методик: 
              криолиполиз, вибромассаж, липолитические программы
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('запись')}>
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('услуги')}>
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Используем только проверенные методики с доказанной эффективностью
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Activity',
                title: 'Вибромассаж',
                description: 'Глубокая проработка тканей для улучшения кровообращения и лимфодренажа',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/7e386a74-2d78-4e51-a840-62381550cc18.jpg',
                duration: '30-45 минут',
                result: 'Эффект после первой процедуры'
              },
              {
                icon: 'Droplets',
                title: 'Детокс обёртывания',
                description: 'Выведение токсинов и лишней жидкости из организма, улучшение состояния кожи',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/2458eb8d-57fb-4648-9193-bf51b47fb86f.jpg',
                duration: '60 минут',
                result: 'Видимый результат после курса'
              },
              {
                icon: 'Sparkles',
                title: 'Лифтинг обёртывания',
                description: 'Подтяжка кожи, повышение тонуса и эластичности тканей',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/7e386a74-2d78-4e51-a840-62381550cc18.jpg',
                duration: '60-90 минут',
                result: 'Эффект после 3-5 процедур'
              },
              {
                icon: 'Flame',
                title: 'Горячее-холодное обёртывание',
                description: 'Контрастная терапия для активизации обменных процессов и жиросжигания',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/2458eb8d-57fb-4648-9193-bf51b47fb86f.jpg',
                duration: '75 минут',
                result: 'Заметный эффект уже после первой процедуры'
              },
              {
                icon: 'Zap',
                title: 'РФ-лифтинг',
                description: 'Радиочастотная подтяжка кожи без операции, стимуляция выработки коллагена',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/7e386a74-2d78-4e51-a840-62381550cc18.jpg',
                duration: '30-40 минут',
                result: 'Результат через 2-3 недели'
              },
              {
                icon: 'Wind',
                title: 'Вибро- и вакуумный массаж',
                description: 'Комплексная аппаратная методика для борьбы с целлюлитом и коррекции фигуры',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/2458eb8d-57fb-4648-9193-bf51b47fb86f.jpg',
                duration: '40-50 минут',
                result: 'Видимый эффект после 5 процедур'
              },
              {
                icon: 'Radio',
                title: 'Ультразвуковая кавитация',
                description: 'Безоперационная липосакция с помощью ультразвука для удаления жировых отложений',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/7e386a74-2d78-4e51-a840-62381550cc18.jpg',
                duration: '30-60 минут',
                result: 'Результат через 1-2 недели'
              }
            ].map((service) => (
              <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={service.icon} className="text-primary" size={24} />
                    <CardTitle className="font-heading">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="TrendingUp" size={16} className="mr-2" />
                    {service.result}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="результаты" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Результаты До/После</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <img 
                    src="https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/80e7cbda-5315-4f48-87e8-652220ab976c.jpg"
                    alt={`Результат ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">Криолиполиз</Badge>
                    <p className="text-sm text-muted-foreground">
                      Программа коррекции, 4 процедуры
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Цены</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Прозрачная ценовая политика без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: 'Вибромассаж', zone: '1 сеанс', price: '3 500' },
              { service: 'Детокс обёртывания', zone: '1 процедура', price: '4 500' },
              { service: 'Лифтинг обёртывания', zone: '1 процедура', price: '5 000' },
              { service: 'Горячее-холодное обёртывание', zone: '1 процедура', price: '5 500' },
              { service: 'РФ-лифтинг', zone: '1 зона', price: '6 000' },
              { service: 'Вибро- и вакуумный массаж', zone: '1 сеанс', price: '4 000' },
              { service: 'Ультразвуковая кавитация', zone: '1 зона', price: '7 500' },
              { service: 'Консультация', zone: 'Первичная', price: 'Бесплатно' }
            ].map((item) => (
              <Card key={item.service} className="text-center">
                <CardHeader>
                  <CardTitle className="font-heading">{item.service}</CardTitle>
                  <CardDescription>{item.zone}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {item.price === 'Бесплатно' ? item.price : `${item.price} ₽`}
                  </div>
                  <Button variant="outline" className="w-full">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Более 500 довольных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Елена С.',
                service: 'Криолиполиз',
                text: 'Невероятный результат! После 3 процедур ушло 4 см в талии. Профессиональный подход и внимательное отношение.',
                rating: 5
              },
              {
                name: 'Анна М.',
                service: 'Вибромассаж',
                text: 'Отличная процедура для расслабления и коррекции. Заметила эффект уже после первого сеанса. Рекомендую!',
                rating: 5
              },
              {
                name: 'Ирина К.',
                service: 'Комплексная программа',
                text: 'Прошла полный курс коррекции фигуры. Результат превзошёл все ожидания. Спасибо команде специалистов!',
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-heading">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary">{review.service}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="специалисты" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Команда сертифицированных врачей-косметологов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Иванова Мария Сергеевна',
                position: 'Главный врач-косметолог',
                experience: '12 лет опыта',
                education: 'РНИМУ им. Пирогова'
              },
              {
                name: 'Петрова Анна Владимировна',
                position: 'Врач-косметолог',
                experience: '8 лет опыта',
                education: 'Первый МГМУ им. Сеченова'
              },
              {
                name: 'Сидорова Елена Игоревна',
                position: 'Врач-косметолог',
                experience: '10 лет опыта',
                education: 'РУДН'
              }
            ].map((specialist, i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="UserRound" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{specialist.name}</CardTitle>
                  <CardDescription>{specialist.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="Briefcase" size={16} className="mr-2" />
                    {specialist.experience}
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="GraduationCap" size={16} className="mr-2" />
                    {specialist.education}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="запись" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-3xl">Онлайн-запись</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для подтверждения записи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Интересующая услуга</label>
                    <Input
                      placeholder="Например: Криолиполиз"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea
                      placeholder="Дополнительная информация"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Адрес</h3>
                <p className="text-sm text-muted-foreground">
                  г. Москва, ул. Примерная, д. 10
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-muted-foreground">
                  +7 (495) 123-45-67
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Режим работы</h3>
                <p className="text-sm text-muted-foreground">
                  Пн-Пт: 9:00 - 21:00<br />
                  Сб-Вс: 10:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <span className="font-heading text-lg font-bold">BeautyMed</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 BeautyMed. Все права защищены. Лицензия № ЛО-77-01-012345
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}