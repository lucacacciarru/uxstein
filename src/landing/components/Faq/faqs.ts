import { Faq, FaqButton, FaqCategories } from './types';

export const faqs: Faq[] = [
  {
    cat: 'auth',
    question: 'landing.faq.question1.question',
    answer: 'landing.faq.question1.answer',
    id: '1',
  },
  {
    cat: 'auth',
    question: 'landing.faq.question2.question',
    answer: 'landing.faq.question2.answer',
    id: '2',
  },
  {
    cat: 'builder',
    question: 'landing.faq.question3.question',
    answer: 'landing.faq.question3.answer',
    id: '3',
  },
  {
    cat: 'builder',
    question: 'landing.faq.question4.question',
    answer: 'landing.faq.question4.answer',
    id: '4',
  },
  {
    cat: 'template',
    question: 'landing.faq.question5.question',
    answer: 'landing.faq.question5.answer',
    id: '5',
  },
  {
    cat: 'template',
    question: 'landing.faq.question6.question',
    answer: 'landing.faq.question6.answer',
    id: '6',
  },
  {
    cat: 'share',
    question: 'landing.faq.question7.question',
    answer: 'landing.faq.question7.answer',
    id: '7',
  },
  {
    cat: 'share',
    question: 'landing.faq.question8.question',
    answer: 'landing.faq.question8.answer',
    id: '8',
  },
];

export const faqButtons: Record<FaqCategories, FaqButton> = {
  auth: {
    buttonLabel: 'landing.faqCatLabels.auth',
    icon: 'Add',
  },
  builder: {
    buttonLabel: 'landing.faqCatLabels.builder',
    icon: 'Add',
  },
  share: {
    buttonLabel: 'landing.faqCatLabels.share',
    icon: 'Add',
  },
  template: {
    buttonLabel: 'landing.faqCatLabels.template',
    icon: 'Add',
  },
};
