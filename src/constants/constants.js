import progressImage from '../images/progress.png'
import book from '../images/book 2.png'
import headPhones from '../images/headphones 2.svg'
import edit from '../images/edit-2.svg'

export const skills = [
  {
    result: 45,
    text: 'Новых навыков изучено',
    textColor: '#46866B',
  },
  {
    result: 60,
    text: 'Часов проведено за изучением',
    textColor: '#FFB152',
  },
  {
    result: 12,
    text: 'Новых хард скиллов прокаченно',
    textColor: '#7F67D2',
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
