import { FieldError } from 'react-hook-form';
import './wrapper.css';

interface IProps {
  label: string;
  error: FieldError | undefined;
}

export const InputWrapper: React.FC<IProps> = ({ label, error, children }) => {
  return (
    <div className={`${'input__wrapper'} ${error ? 'input__wrapper_error' : ''}`}>
      <p className="input__label">{label}</p>
      {children}
      {error ? <p className="input__error">{error.message}</p> : ''}
    </div>
  );
};
