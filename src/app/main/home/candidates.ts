export const CANDIDATES = [
  {
    id: 1,
    name: 'Анна Смирнова',
    resumeScore: 94,
    hasAiInterview: true,
    aiInterviewScore: 89,
    aiDescription: 'Отличный кандидат с сильными техническими навыками в React и TypeScript. Демонстрирует глубокое понимание современных фреймворков и архитектурных принципов. Хорошие коммуникативные навыки, способность работать в команде. Опыт ментворинга джуниорских разработчиков. Рекомендую к собеседованию с техническим руководителем.',
    skills: ['React', 'TypeScript', 'Next.js', 'Node.js'],
    experience: '4 года',
    photo: 'https://images.unsplash.com/photo-1602796390662-2cbb0042cae8?w=48&h=48&fit=crop&crop=face',
    phone: '+7 999 123-45-67',
    email: 'anna.smirnova@email.com',
    interviewDate: '2025-09-01',
    readyForManager: true,
    transcript: `AI: Расскажите о вашем опыте с React.

Кандидат: Работаю с React уже 4 года. Начинала с классовых компонентов, сейчас использую функциональные с хуками. В текущем проекте мигрировали с Redux на Zustand для управления состоянием...

AI: Как вы подходите к оптимизации производительности?

Кандидат: Начинаю с анализа через React DevTools Profiler. Использую мемоизацию компонентов, lazy loading для больших компонентов, оптимизирую рендеринг списков через виртуализацию...`
  },
  {
    id: 2,
    name: 'Дмитрий Иванов',
    resumeScore: 87,
    hasAiInterview: true,
    aiInterviewScore: 82,
    aiDescription: 'Кандидат с хорошими базовыми знаниями, но недостаточный опыт с современными инструментами. Показал готовность к обучению и развитию. Понимает основные принципы, но требуется менторство для работы с более сложными задачами. Может подойти для middle позиции с поддержкой команды.',
    skills: ['JavaScript', 'Vue.js', 'CSS', 'Git'],
    experience: '2 года',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face',
    phone: '+7 999 234-56-78',
    email: 'dmitriy.ivanov@email.com',
    interviewDate: '2025-08-30',
    readyForManager: true,
    transcript: `AI: Какие фреймворки вы использовали?

Кандидат: Основной опыт с Vue.js, немного работал с React. В Vue создавал SPA приложения с Vuex для состояния...

AI: Опишите самую сложную задачу в вашей практике.

Кандидат: Нужно было интегрировать legacy систему с новым Vue приложением. Пришлось создать адаптеры для совместимости API...`
  },
  {
    id: 3,
    name: 'Елена Петрова',
    resumeScore: 91,
    hasAiInterview: true,
    aiInterviewScore: 88,
    aiDescription: 'Сильный кандидат с отличным пониманием современного фронтенда. Опыт работы с микрофронтендами и сложными SPA. Хорошие навыки архитектуры и code review. Способность к техническому лидерству. Отлично подходит для senior позиции.',
    skills: ['React', 'TypeScript', 'GraphQL', 'Webpack'],
    experience: '5 лет',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face',
    phone: '+7 999 345-67-89',
    email: 'elena.petrova@email.com',
    interviewDate: '2025-09-02',
    readyForManager: true,
    transcript: `AI: Расскажите о работе с микрофронтендами.

Кандидат: В последнем проекте архитектура была построена на Module Federation. Каждая команда разрабатывает свой домен независимо, интеграция через shared dependencies...

AI: Как организуете code review в команде?

Кандидат: Использую GitLab MR с обязательным review от двух коллег. Есть checklist по стандартам кода, автоматические проверки через ESLint и SonarQube...`
  },
  {
    id: 4,
    name: 'Михаил Козлов',
    resumeScore: 78,
    hasAiInterview: false,
    aiInterviewScore: null,
    aiDescription: null,
    skills: ['HTML', 'CSS', 'JavaScript'],
    experience: '1.5 года',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
    phone: '+7 999 456-78-90',
    email: 'mikhail.kozlov@email.com',
    readyForManager: false,
    transcript: null
  },
  {
    id: 5,
    name: 'Ольга Новикова',
    resumeScore: 85,
    hasAiInterview: false,
    aiInterviewScore: null,
    aiDescription: null,
    skills: ['React', 'JavaScript', 'SCSS'],
    experience: '2.5 года',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=48&h=48&fit=crop&crop=face',
    phone: '+7 999 567-89-01',
    email: 'olga.novikova@email.com',
    readyForManager: false,
    transcript: null
  }
];
