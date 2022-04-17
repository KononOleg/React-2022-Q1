import { useEffect, useState } from 'react';
import { FormCard, IProps as Icard } from './components/card/card';
import { Form, MyInputTypes } from './components/form/form';
import './form-page.css';

export const FormPage = () => {
  const [cards, setCards] = useState<Icard[]>([]);

  const createCard = (data: MyInputTypes) => {
    const { Name, Date, File, Select, Switcher, Checkbox } = data;
    const fReader = new FileReader();
    fReader.readAsDataURL(File[0] as Blob);
    fReader.onloadend = (event) => {
      const img = event?.target?.result as string;
      const card = {
        name: Name,
        date: Date,
        city: Select,
        switcher: Switcher,
        agreement: Checkbox,
        img: img,
      };
      const updatedCards = [...cards, card];
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      setCards(updatedCards);
    };
  };
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cards') as string) || [];
    setCards(cards);
  }, []);

  return (
    <div className="form-page__wrapper">
      <Form createCard={createCard} />

      <div className="form-page-cards__wrapper">
        {cards.map((card: Icard, key: number) => (
          <FormCard {...card} key={key} />
        ))}
      </div>
    </div>
  );
};
