import React from 'react'
import { useEffect, useState } from "react";
const Get = () => {
  const [state, setState] = useState([]);
  const [obj, setObj] = useState({
    from: "",
    to: "",
    amount: ""
  });
  let base_url = `${process.env.REACT_APP_MY_ENV_VARIABLE}?from=${obj.from}&to=${obj.to}`;
  console.log(base_url)
  useEffect(() => {
    fetch(base_url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setState(data);
      })
      .catch(error => {
        console.log(`Error occured: ${error.message}`);
      });

  }, [obj, base_url])
  return (
    <div className='mt-5'>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <div className="form-row row">
          <div className="col-md-6 mb-3">
            <label className='ps-3 pb-2'>From</label>
            <input type="text" className="form-control" placeholder="From..." value={obj.from} onChange={(e) => { setObj({ ...obj, from: e.target.value }) }} />
          </div>
          <div className="col-md-6 mb-3">
            <label className='ps-3 pb-2'>To</label>
            <input type="text" className="form-control" placeholder="To..." value={obj.to} onChange={(e) => { setObj({ ...obj, to: e.target.value }) }} />
          </div>

        </div>
        <button className="btn btn-primary" type="submit">TryitOut</button>
      </form>

      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((item, index) => {
            return (<tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.amount}</td>
            </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Get