import { InputWrapper } from '../wrapper/wrapper';
import './text.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
}

export const InputText: React.FC<IProps> = ({ label, errorMessage, isError }) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <input type="text" className="input-text" />
    </InputWrapper>
  );
};
