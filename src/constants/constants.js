import progressImage from '../images/Dashboard/progress.png'
import book from '../images/Dashboard/book 2.png'
import headPhones from '../images/Dashboard/headphones 2.svg'
import edit from '../images/Dashboard/edit-2.svg'

import logo from '../images/SideMenu/logo.svg'
import bookOpen from '../images/SideMenu/book-open.svg'
import briefcase from '../images/SideMenu/briefcase.svg'
import graduation from '../images/SideMenu/graduation.svg'
import home from '../images/SideMenu/home.svg'
import skillsImage from '../images/SideMenu/skills.svg'


export const skills = [
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
  sloganColor: '#46866B',
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


