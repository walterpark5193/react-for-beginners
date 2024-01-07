//내꺼... 다시 해보자
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=5")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        console.log("json = ", json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading.valueOf.apply.</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

//2. 특정 값 이상인 코인만 출력
/* import { useEffect, useState } from "react";

function App() {
  const [money, setMoney] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <input
        onChange={onChange}
        type="number"
        value={money}
        placeholder="Write the money you have"
      />

      <h1>
        The Coins!(
        {
          coins.filter((coin) =>
            money === 0 ? true : coin.quotes.USD.price > money
          ).length
        }
        )
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins
            .filter((coin) =>
              money === 0 ? true : coin.quotes.USD.price > money
            )
            .map((coin) => (
              <option>
                {coin.name}({coin.symbol}): ${coin.quotes.USD.price} BTC
              </option>
            ))}
        </select>
      )}
    </div>
  );
}

export default App;
 */
/* 
//3. 남의꺼
//input으로 숫자값 받기(input의 )
//코인 api의 값을 받기(USD의 price를 집어넣기)
//환율?계산하기()
//div컨테이너로 보여주기

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState(0);
  const [dollar, setDollar] = useState(0);

  //코인 API불러오기
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  //지불할 달러 기입하기
  const setPay = (e) => setDollar(e.target.value);
  //선택한 값을 집어넣기
  const onChange = (
    e //코인값 저장
  ) => setCoinPrice(e.target.value);

  return (
    <div>
      <h1>The Coin!!({coins.length})</h1>
      <div>
        <span>구매할 달러를 입력해주세요. </span>
        <input onChange={setPay} type="number"></input>
      </div>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h1>{dollar > 0 ? <span>{dollar / coinPrice}</span> : null}</h1>
    </div>
  );
}

export default App;
 */
