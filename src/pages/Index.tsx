import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState('main');

  const routes = [
    {
      id: 1,
      from: 'Москва',
      to: 'Санкт-Петербург',
      duration: '8ч 30м',
      price: 1500,
      times: ['08:00', '14:00', '20:00'],
      comfort: 'Премиум',
      available: 12
    },
    {
      id: 2,
      from: 'Москва',
      to: 'Казань',
      duration: '12ч',
      price: 2100,
      times: ['10:00', '22:00'],
      comfort: 'Комфорт',
      available: 8
    },
    {
      id: 3,
      from: 'Санкт-Петербург',
      to: 'Выборг',
      duration: '2ч 30м',
      price: 600,
      times: ['09:00', '12:00', '15:00', '18:00'],
      comfort: 'Стандарт',
      available: 20
    }
  ];

  const buses = [
    {
      id: 1,
      name: 'Mercedes-Benz Tourismo',
      seats: 49,
      features: ['Wi-Fi', 'USB-зарядка', 'Кондиционер', 'Туалет', 'TV'],
      image: 'https://cdn.poehali.dev/projects/58e7bdf5-4aa1-403c-a999-3fac4d472251/files/7903a394-a94c-4f9b-9003-3fb48cc75775.jpg'
    },
    {
      id: 2,
      name: 'Setra ComfortClass',
      seats: 45,
      features: ['Wi-Fi', 'USB-зарядка', 'Кондиционер', 'Туалет', 'Кофемашина'],
      image: 'https://cdn.poehali.dev/projects/58e7bdf5-4aa1-403c-a999-3fac4d472251/files/41844c39-22ab-43b6-b2db-2741f264b3b2.jpg'
    }
  ];

  const reviews = [
    { id: 1, name: 'Анна Смирнова', rating: 5, text: 'Отличный сервис! Автобусы комфортные, всегда вовремя. Поездка прошла замечательно.' },
    { id: 2, name: 'Дмитрий Иванов', rating: 5, text: 'Удобное бронирование онлайн. Водитель профессионал, ехали плавно и безопасно.' },
    { id: 3, name: 'Елена Петрова', rating: 4, text: 'Все понравилось, особенно чистота в салоне и вежливый персонал. Рекомендую!' }
  ];

  const toggleSeat = (seatNumber: number) => {
    setSelectedSeats(prev =>
      prev.includes(seatNumber)
        ? prev.filter(s => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const renderSeats = () => {
    const seats = [];
    const occupiedSeats = [3, 7, 12, 15, 23, 28];
    
    for (let i = 1; i <= 40; i++) {
      const isOccupied = occupiedSeats.includes(i);
      const isSelected = selectedSeats.includes(i);
      
      seats.push(
        <button
          key={i}
          onClick={() => !isOccupied && toggleSeat(i)}
          disabled={isOccupied}
          className={`
            w-10 h-10 rounded-lg border-2 font-medium text-sm transition-all duration-200
            ${isOccupied ? 'bg-gray-200 border-gray-300 cursor-not-allowed text-gray-400' : ''}
            ${isSelected ? 'bg-primary border-primary text-white scale-110' : ''}
            ${!isOccupied && !isSelected ? 'bg-white border-gray-300 hover:border-primary hover:scale-105' : ''}
          `}
        >
          {i}
        </button>
      );
    }
    return seats;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Bus" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                БыстроЕхали
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Маршруты', 'Автопарк', 'О нас', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (800) 555-35-35
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Путешествуйте с комфортом
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Современные автобусы • Онлайн-бронирование • Безопасные поездки
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Input placeholder="Откуда" className="h-14 text-lg" />
              <Input placeholder="Куда" className="h-14 text-lg" />
              <Button size="lg" className="h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Search" className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные маршруты</h2>
            <p className="text-lg text-muted-foreground">Выберите направление и забронируйте билет онлайн</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {routes.map((route, idx) => (
              <Card key={route.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">{route.comfort}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {route.duration}
                    </span>
                  </div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {route.from}
                    <Icon name="ArrowRight" size={20} className="text-primary" />
                    {route.to}
                  </CardTitle>
                  <CardDescription>Доступно мест: {route.available}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {route.times.map(time => (
                        <Badge key={time} variant="outline" className="font-medium">
                          {time}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-3xl font-bold text-primary">{route.price} ₽</span>
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Забронировать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Бронирование билета</h2>
            <p className="text-lg text-muted-foreground">Выберите свободное место в салоне автобуса</p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-center gap-8 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded"></div>
                    <span>Свободно</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary border-2 border-primary rounded"></div>
                    <span>Выбрано</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded"></div>
                    <span>Занято</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      <Icon name="Wheel" size={14} className="mr-1" />
                      Водитель
                    </Badge>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 pt-12">
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                      {renderSeats()}
                    </div>
                  </div>
                </div>
              </div>
              {selectedSeats.length > 0 && (
                <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/20 animate-scale-in">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Выбрано мест:</p>
                      <p className="text-2xl font-bold text-primary">
                        {selectedSeats.sort((a, b) => a - b).join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Итого:</p>
                      <p className="text-3xl font-bold text-primary">{selectedSeats.length * 1500} ₽</p>
                    </div>
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                    <Icon name="CreditCard" className="mr-2" />
                    Оплатить билеты
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-lg text-muted-foreground">Современные комфортабельные автобусы для ваших поездок</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {buses.map((bus, idx) => (
              <Card key={bus.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <img src={bus.image} alt={bus.name} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl">{bus.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    {bus.seats} мест
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {bus.features.map(feature => (
                      <Badge key={feature} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы предоставляем качественные услуги пассажирских перевозок более 15 лет. 
              Наша миссия — сделать путешествия комфортными, безопасными и доступными для каждого.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">15+ лет</h3>
                <p className="text-muted-foreground">на рынке перевозок</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500K+</h3>
                <p className="text-muted-foreground">довольных пассажиров</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">городов назначения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши пассажиры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={review.id} className="animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <Icon name="Phone" size={32} className="mb-4" />
                <p className="font-semibold mb-2">Телефон</p>
                <p>+7 (800) 555-35-35</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Mail" size={32} className="mb-4" />
                <p className="font-semibold mb-2">Email</p>
                <p>info@bistroehali.ru</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="MapPin" size={32} className="mb-4" />
                <p className="font-semibold mb-2">Офис</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 БыстроЕхали. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
