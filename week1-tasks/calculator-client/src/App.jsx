import './App.css'
import { useState,useEffect } from 'react'
import SimpleCalculator from './components/SimpleCalculator'
import AdvCalculator from './components/AdvCalculator';
import evaluate from './utility/evaluate';
import History from './components/History';
import "./style/SimpleCalculator.css"
import { MDBFooter } from 'mdb-react-ui-kit';

function App() {
  const [view, setView] = useState("simple");
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('Ans= ');

  const [isRadians, setIsRadians] = useState(false);
  
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (result !== undefined) {
      setResult("Ans= "+evaluate(expression, isRadians));
      
      console.log("expression- "+expression+" result- "+result);
    }
  }, [expression, isRadians]);
  const createHistory = () => {
    console.log("expression- "+expression+" result- "+result);
    if(result !== undefined && result !== "Ans= " && result !== "Ans= undefined" && result !== "Ans= NaN" && result !== ""){
      setHistory([...history, { expression: expression, result: result }]);
    }
  }
  const getHistory = () => {
    setView("history");
  }
  return (
    <>
      <header>
        <h2 className='heading'>Calculator</h2>
      </header>
      <div className='simple-calculator'>
        <div className='navContainer'>
          <button onClick={() => setView("simple")}>Simple</button>
          <button onClick={() => setView("advanced")}>Advanced</button>
          <button onClick={()=>setView("history")}>History</button>
        </div>
        {
        (() => {
          switch (view) {
            case "simple":
              return <SimpleCalculator createHistory={createHistory}  setExpression={setExpression} expression={expression} isRadians={isRadians} result={result} setResult={setResult} />;
            case "advanced":
              return <AdvCalculator createHistory={createHistory} setExpression={setExpression} expression={expression} isRadians={isRadians} setIsRadians={setIsRadians} result={result} setResult={setResult} />;
            case "history":
              return <History  history={history} setView={setView} setResult={setResult} setExpression={setExpression}/>;
            default:
              return null;
          }
        })()
      }
      </div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 [Nitish Manral], licensed under the   
          <a className='text-reset fw-bold' href='https://opensource.org/licenses/MIT'>
            MIT License
          </a>
        </div>
      </MDBFooter>
      
    </>
  );
}

export default App