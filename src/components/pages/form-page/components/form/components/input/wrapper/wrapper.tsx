import './wrapper.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
}

export const InputWrapper: React.FC<IProps> = ({ label, errorMessage, children, isError }) => {
  return (
    <div className={`${'input__wrapper'} ${isError ? 'input__wrapper_error' : ''}`}>
      <p className="input__label">{label}</p>
      {children}
      {isError ? <p className="input__error">{errorMessage}</p> : ''}
    </div>
  );
};
