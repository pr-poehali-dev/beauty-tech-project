import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: string, duration: string, delay: string, size: number}>>([]);
  const [iceParticles, setIceParticles] = useState<Array<{id: number, top: string, left: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
      size: 4 + Math.random() * 6
    }));
    setSnowflakes(flakes);

    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${20 + Math.random() * 30}%`,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`
    }));
    setIceParticles(particles);
  }, []);
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
            <Icon name="Snowflake" size={26} className="text-primary" />
            <span className="font-heading text-xl font-bold">Крио Плюс</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white/60 backdrop-blur-sm"
            style={{
              left: flake.left,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animation: `snowfall ${flake.duration} ${flake.delay} linear infinite`,
              boxShadow: '0 0 10px rgba(255,255,255,0.5)'
            }}
          />
        ))}
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-8 text-base px-5 py-2 shadow-lg" variant="secondary">
              ✨ Премиум студия коррекции фигуры
            </Badge>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary via-primary/50 to-primary/30 animate-glow" />
              
              {iceParticles.map((particle) => (
                <div
                  key={particle.id}
                  className="ice-particle animate-float"
                  style={{
                    top: particle.top,
                    left: particle.left,
                    animationDelay: particle.delay,
                    animationDuration: particle.duration
                  }}
                />
              ))}
              
              <h1 className="font-heading text-7xl md:text-9xl font-black mb-2 tracking-wider leading-none relative animate-scale-in">
                <span className="inline-block bg-gradient-to-br from-primary via-blue-400 to-primary/60 bg-clip-text text-transparent drop-shadow-2xl animate-float">
                  КРИО
                </span>
                <span className="inline-block bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent text-8xl md:text-[10rem] align-middle drop-shadow-2xl" style={{animationDelay: '0.2s'}}>
                  +
                </span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-fade-in" />
            </div>

            <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3 tracking-wide">
              Студия коррекции фигуры
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed italic">
              Преобразите своё тело с помощью передовых методик
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
              Криолиполиз • Обёртывания • РФ-лифтинг • Аппаратный массаж • Кавитация
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="btn-frost" onClick={() => scrollToSection('запись')}>
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="btn-frost" onClick={() => scrollToSection('услуги')}>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Snowflake',
                title: 'Криолиполиз',
                description: 'Безоперационное удаление жировых отложений методом контролируемого охлаждения',
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/2458eb8d-57fb-4648-9193-bf51b47fb86f.jpg',
                duration: '40-60 минут',
                result: 'Видимый эффект через 2-3 недели'
              },
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/7d89f7e7-6735-46db-9327-c6e3f8d003ca.jpg',
                service: 'Криолиполиз',
                description: 'Курс из 3 процедур',
                result: 'Уменьшение объёма на 4 см'
              },
              {
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/153457b7-9991-41fb-b795-5307644f4b52.jpg',
                service: 'Детокс обёртывания',
                description: 'Программа детокса, 5 процедур',
                result: 'Улучшение качества кожи, -3 см'
              },
              {
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/0a3830e9-a33e-425d-a08a-9be759556f20.jpg',
                service: 'РФ-лифтинг',
                description: 'Курс RF-лифтинга, 6 процедур',
                result: 'Подтяжка кожи, видимый лифтинг'
              },
              {
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/3212e747-c016-474d-8047-d78f3291236d.jpg',
                service: 'Ультразвуковая кавитация',
                description: 'Программа кавитации, 5 сеансов',
                result: 'Уменьшение объёма на 5 см'
              },
              {
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/af9f9170-5563-4459-abaf-2c7fb67a4fc9.jpg',
                service: 'Вибро- и вакуумный массаж',
                description: 'Антицеллюлитная программа, 8 сеансов',
                result: 'Сокращение целлюлита, подтяжка'
              },
              {
                image: 'https://cdn.poehali.dev/projects/1c3ec3aa-44cb-4eca-824d-76aa3ffab0b2/files/3d1e4f00-aaa4-49f1-a249-763d643500af.jpg',
                service: 'Лифтинг обёртывания',
                description: 'Комплекс лифтинг-процедур, 4 сеанса',
                result: 'Повышение тонуса кожи'
              }
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative bg-muted">
                  <img 
                    src={item.image}
                    alt={item.service}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">{item.service}</Badge>
                    <p className="text-sm font-medium">{item.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      <Icon name="TrendingUp" size={16} className="mr-2" />
                      {item.result}
                    </div>
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
              { service: 'Криолиполиз', zone: '1 зона', price: '15 000' },
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
          
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="default">
                Специальные предложения
              </Badge>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Выгодные пакеты процедур
              </h3>
              <p className="text-muted-foreground">
                Сэкономьте до 30% при покупке курса
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Стройность',
                  description: '5 процедур кавитации + 3 вибромассажа',
                  oldPrice: '45 000',
                  newPrice: '32 000',
                  discount: '-29%',
                  features: ['Ультразвуковая кавитация x5', 'Вибромассаж x3', 'Консультация специалиста', 'Индивидуальная программа']
                },
                {
                  title: 'Детокс',
                  description: '4 детокс обёртывания + 2 горячее-холодное',
                  oldPrice: '29 000',
                  newPrice: '20 500',
                  discount: '-29%',
                  features: ['Детокс обёртывания x4', 'Горячее-холодное обёртывание x2', 'Дренажный массаж', 'Рекомендации по питанию'],
                  popular: true
                },
                {
                  title: 'Лифтинг',
                  description: '6 РФ-лифтинг + 3 лифтинг обёртывания',
                  oldPrice: '51 000',
                  newPrice: '36 000',
                  discount: '-29%',
                  features: ['РФ-лифтинг x6', 'Лифтинг обёртывания x3', 'Консультация косметолога', 'Программа домашнего ухода']
                }
              ].map((pkg, i) => (
                <Card key={i} className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary">Хит продаж</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-end gap-2">
                      <span className="text-sm text-muted-foreground line-through">{pkg.oldPrice} ₽</span>
                      <span className="text-3xl font-bold text-primary">{pkg.newPrice} ₽</span>
                      <Badge variant="destructive" className="mb-1">{pkg.discount}</Badge>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-4" size="lg" variant={pkg.popular ? 'default' : 'outline'}>
                      Купить курс
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              <Icon name="Snowflake" size={24} className="text-primary" />
              <span className="font-heading text-lg font-bold">Крио Плюс</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 Крио Плюс. Все права защищены. Лицензия № ЛО-77-01-012345
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