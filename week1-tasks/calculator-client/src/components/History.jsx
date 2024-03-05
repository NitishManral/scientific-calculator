import React from 'react'
import '../style/History.css'
const History = (props) => {
    const handleClick = (e) => {
        props.setExpression(e.currentTarget.children[0].innerText.substring(12));
        console.log(props.setExpression(e.currentTarget.children[0].innerText.substring(12)));
        props.setView("advanced");
    }
  return (
    <>
      
      <div className='histories'>
        <h3>History</h3>
        {
          props.history.map((item, index) => {
            return (
              <div onClick={handleClick} className='history btn' key={index}>
                <p>Expression: {item.expression}</p>
                <p>Result: {item.result.substring(4)}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default History