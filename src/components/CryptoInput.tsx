import {FC} from 'react';

interface CryptoInputProps {
  value: number;
  onValueChange: (value: number) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  currencies: string[];
}

const CryptoInput: FC<CryptoInputProps> = ({
  value,
  onValueChange,
  currency,
  onCurrencyChange,
  currencies,
}) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => onValueChange(parseFloat(e.target.value))}
      />
      <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CryptoInput;
