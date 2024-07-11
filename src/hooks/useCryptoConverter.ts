import { useState, useEffect } from 'react';

const useCryptoConverter = () => {
  const [leftValue, setLeftValue] = useState(1);
  const [rightValue, setRightValue] = useState(0);
  const [leftCurrency, setLeftCurrency] = useState('USDT');
  const [rightCurrency, setRightCurrency] = useState('BTC');
  const [rates, setRates] = useState<{ [key: string]: number }>({
    USDT: 1,
    BTC: 0.000032,
    ETH: 0.00045,
  });
  const [lastChanged, setLastChanged] = useState<'left' | 'right'>('left');

  useEffect(() => {
    const fetchRates = async () => {
      setRates({
        USDT: 1,
        BTC: 0.000032,
        ETH: 0.00045,
      });
    };
    fetchRates();
  }, []);

  useEffect(() => {
    if (lastChanged === 'left') {
      const newRightValue = (leftValue * rates[rightCurrency]) / rates[leftCurrency];
      setRightValue(newRightValue);
    } else if (lastChanged === 'right') {
      const newLeftValue = (rightValue * rates[leftCurrency]) / rates[rightCurrency];
      setLeftValue(newLeftValue);
    }
  }, [leftValue, rightValue, leftCurrency, rightCurrency, rates, lastChanged]);

  const handleLeftValueChange = (value: number) => {
    setLeftValue(value);
    setLastChanged('left');
  };

  const handleRightValueChange = (value: number) => {
    setRightValue(value);
    setLastChanged('right');
  };

  return {
    leftValue,
    rightValue,
    leftCurrency,
    rightCurrency,
    setLeftValue: handleLeftValueChange,
    setRightValue: handleRightValueChange,
    setLeftCurrency,
    setRightCurrency,
  };
};

export default useCryptoConverter;