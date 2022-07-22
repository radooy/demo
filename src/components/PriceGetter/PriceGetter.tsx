import { useDispatch } from "react-redux";
import { showModal, setPrice } from "../../store/features/appSlice/";
import GetterButton from "./GetterButton/GetterButton";

const PriceGetter = () => {
    const dispatch = useDispatch();
    
    const getDailyPrice = () => {
        const url = 'https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD';
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'ba630d408fmsh0f2dbaac9a7087fp10fc21jsnff5386044b8e',
              'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
          };
          
          fetch(url, options)
            .then(response => response.json())
            .then(response => {
                dispatch(showModal())
                dispatch(setPrice(Number(response['Realtime Currency Exchange Rate']['8. Bid Price'])))
            })
            .catch(err => console.error(err));
    };
  return (
    <GetterButton onClick={getDailyPrice}>GET PRICE!</GetterButton>
  );
};

export default PriceGetter;
