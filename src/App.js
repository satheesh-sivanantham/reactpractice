import logo from './logo.svg';
import './App.css';
import PriceTag from './price-tag';

function App() {
  const freePlan = ["Single user", "50GB Storage","Unlimited public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
  return (
    <div className="App">
      <div className='price-container'>
       <PriceTag plan="FREE" cost="0" planList={freePlan} />
       <PriceTag plan="PLUS" cost="9" planList={freePlan} /> 
       <PriceTag plan="PRO" cost="49" planList={freePlan} />
       </div>
    </div>
  );
}

export default App;
