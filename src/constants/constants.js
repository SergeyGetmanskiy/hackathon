import progressImage from '../images/Dashboard/Progress/progress.png'

import book from '../images/Dashboard/Recommendations/book 2.png'
import headPhones from '../images/Dashboard/Recommendations/headphones 2.svg'
import edit from '../images/Dashboard/Recommendations/edit-2.svg'

import logo from '../images/SideMenu/logo.svg'
import bookOpen from '../images/SideMenu/book-open.svg'
import briefcase from '../images/SideMenu/briefcase.svg'
import graduation from '../images/SideMenu/graduation.svg'
import home from '../images/SideMenu/home.svg'
import skillsImage from '../images/SideMenu/skills.svg'

import avatar from '../images/MainHeader/avatar.png'
import bell from '../images/MainHeader/notification.svg'

import board from '../images/TabsPanel/board.svg'
import dashboard from '../images/TabsPanel/dashboard.svg'
import library from '../images/TabsPanel/library.svg'

import arrow_back from '../images/NewSkill/arrow_back.svg'

import logo_small from '../images/Skill/logo_small.svg'
import external_link from '../images/Skill/external-link-alt 1.svg'

import logo_onboarding from '../images/Onboarding/logo 5.svg'
import welcome_image from '../images/Onboarding/image 36.svg'

export const user = {
  avatar: avatar,
  job: 'UX/UI Дизайнер',
};

export const notification = bell;

export const tabsPanelItems = [
  {
    icon: board,
    title: "Доска",
  },
  {
    icon: dashboard,
    title: "Дашборд",
  },
  {
    icon: library,
    title: "Библиотека",
  }
];

export const skills = [
  {
    id: 'figma-components',
    name: 'Компоненты в Figma',
    isHard: true,
  },
  {
    id: 'business-analysis',
    name: 'Бизнес аналитика',
    isHard: true,
  },
  {
    id: 'css',
    name: 'CSS',
    isHard: true,
  },
  {
    id: 'system-design',
    name: 'Дизайн системы',
    isHard: true,
  },
  {
    id: 'stackholders',
    name: 'Презентация стекхолдерам',
    isHard: false,
  },
  {
    id: 'metrics',
    name: 'Метрики',
    isHard: false,
  },
];

export const skillsForDashboard = [
  {
    result: 45,
    text: 'Новых навыков изучено',
    textColor: 'green.dark',
  },
  {
    result: 60,
    text: 'Часов за изучением',
    textColor: 'orange.main',
  },
  {
    result: 12,
    text: 'Хард скиллов прокаченно',
    textColor: 'purple.main',
  },
];

export const progress = {
  title: 'Твой прогресс',
  image: progressImage,
  slogan: 'Хорошая работа!',
  sloganColor: 'green.dark',
  percentage: 78,
  text: 'Ты уже близко к своей цели, осталось совсем немного',
}

export const recommendations = [
  {
    icon: book,
    title: 'Почитать',
    text: 'Дизайн Системы и их создание',
  },
  {
    icon: headPhones,
    title: 'Послушать',
    text: 'Подкаст "О развитии продукта"',
  },
  {
    icon: edit,
    title: 'Написать',
    text: 'Напиши статью на Medium',
  }  
]

export const sideMenuLogo = logo;

export const sideMenuItems = [
  {
    icon: home,
    title: 'Главная',
  },
  {
    icon: bookOpen,
    title: 'Дневник',
  },
  {
    icon: skillsImage,
    title: 'Навыки',
  },
  {
    icon: briefcase,
    title: 'Вакансии',
  },
  {
    icon: graduation,
    title: 'Мастерская',
  }    
]

export const arrowBack = arrow_back;

export const skill = {
  title: 'Подбор шрифтов для заголовков и текста',
  shortTitle: 'шрифты',
  description: `Умение выбирать и применять правильные шрифты - важный навык, который может
  значительно повысить качество дизайна и типографики. Ведь шрифт не только отображает текст,
   но и передает настроение, стиль и эстетику.`,
  articles: [
    {
      title: 'Кто лучше подбирает шрифтовые пары: AI или дизайнеры?',
      source: 'Medium',
      duration: 5,
    },
    {
      title: 'Типографика: последние тренды',
      source: 'Muzli',
      duration: 8,
    },
    {
      title: '8 хитростей, которые сделают вашу типографику более читаемой',
      source: 'LinkedIn',
      duration: 12,
    },
    {
      title: '2023 - год типографики, ориентированный на пользователей',
      source: 'LinkedIn',
      duration: 12,
    }
  ],
  yandexCourseTitle: 'типографике',
  status: 'Рекомендуемый',
}

export const logoSmall = logo_small;

export const externalLink = external_link;

export const skillsDB = [
  {
    groupId: '123',
    groupName: 'Компоненты в Figma',
    skillId: '324',
    title: 'Подбор шрифтов для заголовков',
    shortTitle: 'шрифты',
    descriptionShort: `Умение выбирать и применять правильные шрифты - важный навык, который может
      значительно повысить качество дизайна и типографики.`,
    descriptionFull: `Умение выбирать и применять правильные шрифты - важный навык, который может
      значительно повысить качество дизайна и типографики. Ведь шрифт не только отображает текст,
      но и передает настроение, стиль и эстетику.`,
    status: 'Рекомендуемый',
    isSoft: false,
    isHard: true,
    resources: [
      {
        title: 'Кто лучше подбирает шрифтовые пары: AI или дизайнеры?',
        source: 'Medium',
        duration: 5,
        completed: false,
      },
      {
        title: 'Типографика: последние тренды',
        source: 'Muzli',
        duration: 8,
        completed: false,
      },
      {
        title: '8 хитростей, которые сделают вашу типографику более читаемой',
        source: 'LinkedIn',
        duration: 12,
        completed: false,
      },
      {
        title: '2023 - год типографики, ориентированный на пользователей',
        source: 'LinkedIn',
        duration: 12,
        completed: false,
      }
    ],
  },
  {
    groupId: '123',
    groupName: 'Компоненты в Figma',
    skillId: '326',
    title: 'Подбор шрифтов для заголовков и текста',
    shortTitle: 'шрифты',
    descriptionShort: `Умение выбирать и применять правильные шрифты - важный навык, который может
      значительно повысить качество дизайна и типографики.`,
    descriptionFull: `Умение выбирать и применять правильные шрифты - важный навык, который может
      значительно повысить качество дизайна и типографики. Ведь шрифт не только отображает текст,
      но и передает настроение, стиль и эстетику.`,
    status: 'Рекомендуемый',
    isSoft: false,
    isHard: true,
    resources: [
      {
        title: 'Кто лучше подбирает шрифтовые пары: AI или дизайнеры?',
        source: 'Medium',
        duration: 5,
        completed: false,
      },
      {
        title: 'Типографика: последние тренды',
        source: 'Muzli',
        duration: 8,
        completed: false,
      },
      {
        title: '8 хитростей, которые сделают вашу типографику более читаемой',
        source: 'LinkedIn',
        duration: 12,
        completed: false,
      },
      {
        title: '2023 - год типографики, ориентированный на пользователей',
        source: 'LinkedIn',
        duration: 12,
        completed: false,
      }
    ],
  }
];


export const libraryDB = [
  {
    groupTitle: 'Продуктовое мышление',
    titles: [ 'Как развивать продукт после релиза', 'Продукт и его процесы', 'Дизайн Системы для продукта' ],
  },
  {
    groupTitle: 'Шрифты',
    titles: [ 'Как развивать продукт после релиза', 'Дизайн Системы для продукта' ],
  },
  {
    groupTitle: 'Сетки',
    titles: [ 'Как развивать продукт после релиза', 'Продукт и его процесы', 'Дизайн Системы для продукта', 'Продукт и его процесы', 'Дизайн Системы для продукта', 'Как развивать продукт после релиза', 'Продукт и его процесы', 'Дизайн Системы для продукта', 'Как развивать продукт после релиза', 'Продукт и его процесы', 'Дизайн Системы для продукта', 'Продукт и его процесы', ],
  },
  {
    groupTitle: 'KPI',
    titles: [ 'Как развивать продукт после релиза', 'Продукт и его процесы', 'Дизайн Системы для продукта' ],
  },
  {
    groupTitle: 'Метрики',
    titles: [ 'Как развивать продукт после релиза', 'Продукт и его процесы', 'Дизайн Системы для продукта', 'Продукт и его процесы', ],
  },
]


export const logoOnboarding = logo_onboarding;

export const welcomeImage = welcome_image;

export const steps = [
  'Твой уровень',
  'Навыки которыми владеешь',
  'К чему стремишься',
  'Навыки на прокачку',
];


export const dataInitailLevelUser = [
  'Не знаю свой уровень',
  'Junior',
  'Middle',
  'Middle +',
];

export const dataGoalLevelUser = [
  'Junior',
  'Middle',
  'Middle +',
  'Senior'
];
