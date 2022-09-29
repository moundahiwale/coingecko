import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ICryptocurrencyDetails from '../../interfaces/ICryptocurrencyDetails';
import { fetchCoin } from '../../services/coins-service';
import currencyNumberFormatter from '../../utils/currency-number-formatter';
import './Cryptocurrency.css';

const Cryptocurrency = () => {
  const { id } = useParams();
  const [coin, setCoins] = useState<ICryptocurrencyDetails>();

  useEffect(() => {
    const getCoin = async (id: string) => {
      const coin = await fetchCoin(id);
      setCoins(coin);
    };
    if (id) getCoin(id);
  }, [id]);

  return (
    <div>
      {coin ? (
        <div className='coin'>
          <div className='rank'>Rank #{coin.market_cap_rank}</div>
          <div className='name'>
            {coin.name} ({coin.symbol.toUpperCase()})
          </div>
          <hr />
          <div className='details'>
            <div className='children'>
              <span className='text'> Market Cap:</span>
              <span className='content'>
                {' '}
                {currencyNumberFormatter.format(
                  coin.market_data.market_cap.eur
                )}
              </span>
            </div>
            <div className='children'>
              <span className='text'> Hashing algorithm:</span>{' '}
              <span className='content'>{coin.hashing_algorithm}</span>
            </div>
            <div className='children'>
              <span className='text'>Genesis Date:</span>{' '}
              <span className='content'>
                {coin.genesis_date && coin.genesis_date.valueOf()}
              </span>
            </div>
            <div className='children'>
              <span className='text'>Homepage: </span>
              <span className='content'>
                <a
                  href={coin.links.homepage[0]}
                  target='_blank'
                  rel='noreferrer'
                >
                  {coin.links.homepage[0]}
                </a>{' '}
              </span>
            </div>
          </div>
          <hr />
          <div className='description'>{coin.description.en}</div>
        </div>
      ) : (
        'Sorry, an unexpected error has occurred and the requested coin cannot be found'
      )}
    </div>
  );
};

export default Cryptocurrency;
