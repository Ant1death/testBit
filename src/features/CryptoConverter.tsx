import {FC} from 'react';
import CryptoInput from '../components/CryptoInput';
import useCryptoConverter from '../hooks/useCryptoConverter';

const CryptoConverter: FC = () => {
    const {
      leftValue,
      rightValue,
      leftCurrency,
      rightCurrency,
      setLeftValue,
      setRightValue,
      setLeftCurrency,
      setRightCurrency,
    } = useCryptoConverter();
  
    const currencies = ['USDT', 'BTC', 'ETH'];
  
    return (
      <div>
        <CryptoInput
          value={leftValue}
          onValueChange={setLeftValue}
          currency={leftCurrency}
          onCurrencyChange={setLeftCurrency}
          currencies={currencies}
        />
        <span> = </span>
        <CryptoInput
          value={rightValue}
          onValueChange={setRightValue}
          currency={rightCurrency}
          onCurrencyChange={setRightCurrency}
          currencies={currencies}
        />
      </div>
    );
  };
  
  export default CryptoConverter;