import React from 'react';
import './form.css';
import { InputCheckbox } from './components/input/checkbox/checkbox';
import { InputDate } from './components/input/date/date';
import { InputFile } from './components/input/file/file';
import { InputSelect } from './components/input/select/select';
import { InputText } from './components/input/text/text';
import { InputSwitcher } from './components/input/switcher/switcher';
import { useForm } from 'react-hook-form';

export interface MyInputTypes {
  Name: string;
  Date: string;
  File: FileList;
  Select: string;
  Switcher: boolean;
  Checkbox: boolean;
}

interface IProps {
  createCard: (data: MyInputTypes) => void;
}

export const Form: React.FC<IProps> = ({ createCard }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MyInputTypes>();
  const onSubmit = (data: MyInputTypes) => {
    createCard(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">
      <div className="form-input__wrapper">
        <InputText
          label="Name"
          errors={errors}
          register={register('Name', {
            required: 'Name cannot be empty',
            maxLength: { value: 15, message: 'The string length cannot be more than 15' },
            minLength: { value: 3, message: 'The string length cannot be less than 3' },
          })}
        />
        <InputDate
          label="Date"
          errors={errors}
          register={register('Date', { required: 'Date cannot be empty' })}
        />
        <InputFile
          label="File"
          errors={errors}
          register={register('File', { required: 'File cannot be empty' })}
        />
        <InputSelect
          label="Select"
          errors={errors}
          register={register('Select', { required: 'File cannot be empty' })}
          options={[
            { value: 'Minas Tirith', label: 'Minas Tirith' },
            { value: 'Minas Morgul', label: 'Minas Morgul' },
          ]}
        />
        <InputSwitcher label="Switcher" errors={errors} register={register('Switcher')} />
        <InputCheckbox
          label="Checkbox"
          errors={errors}
          register={register('Checkbox', { required: 'Checkbox must be checked' })}
        />
      </div>

      <input type="submit" className="form__submit" value="Submit" />
    </form>
  );
};
