import { useState, UseContext, useContext } from "react";
const Tip = () => {
  const [cal, setCal] = useState("");

  const [bill, setBill] = useState("");
  const [per,setPer]= useState("1");

  const calculator = (sum) => {
    sum = (cal / 100) * bill;
    return sum;
  };
  const total = (sum) => {
    sum = (cal / 100) * bill * per;
    return sum;
  };
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./styles/styles.css" />
      <title>tip calculator </title>
      <div className="container">
        <div className="logo">
          <img src="../images/logo.svg" alt="logo" />
        </div>
        <div className="card">
          <div className="input">
            <div className="bill-container">
              <div className="label-wrapper">
                <label htmlFor="inp-bill">Bill</label>
              </div>
              <div className="inp-wrapper">
                <input
                  className="inp-text"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  type="text"
                  placeholder={0.0}
                />

                <img src="../images/icon-dollar.svg" alt="dollar.icon" />
              </div>
            </div>
            <div className="tip-container">
              <div className="label-wrapper">
                <label htmlFor="inp-tip">Select tip%</label>
              </div>
              <div className="btn-wrapper">
                <button
                  className="btn"
                  value={cal}
                  onClick={(e) => setCal(5)}
                  type="number"
                >
                  5%
                </button>
                <button
                  className="btn"
                  value={cal}
                  onClick={(e) => setCal(10)}
                  type="number"
                >
                  10%
                </button>
                <button
                  className="btn"
                  value={cal}
                  onClick={(e) => setCal(15)}
                  type="number"
                >
                  15%
                </button>
                <button
                  className="btn"
                  value={cal}
                  onClick={(e) => setCal(25)}
                  type="number"
                >
                  25%
                </button>
                <button
                  className="btn"
                  value={cal}
                  onClick={(e) => setCal(50)}
                  type="number"
                >
                  50%
                </button>
                <input
                  className="inp-text"
                  type="text"
                  name="inp-tip"
                  id="inp-tip"
                  placeholder="custom"
                />
              </div>
            </div>
            <div className="people-container">
              <div className="label-wrapper">
                <label htmlFor="inp-people">number of people</label>
                <div className="error-msg">can't be zero</div>
              </div>
              <div className="inp-wrapper">
              <input
                  className="inp-text"
                  value={per}
                  onChange={(e) => setPer(e.target.value)}
                  type="text"
                  placeholder={1}
                />

                <img src="../images/icon-person.svg" alt="icon-person.icon" />
              </div>
            </div>
          </div>
          <div className="output">
            <div className="line-wrapper">
              <div className="line-output">
                <div className="title-wrapper">
                  <div className="title">Tip amount </div>
                  <div className="decs">/person</div>
                </div>

                <div class="value"> {calculator()}</div>
              </div>
              <div className="line-output">
                <div className="title-wrapper">
                  <div className="title">Total</div>
                  <div className="decs">/person</div>
                </div>
                <div className="value"> {total()}</div>
              </div>
            </div>
            <div className="btn"
             className="btn"
             value={cal}
             onClick={(e) => setCal("")}
             type="number">Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tip;
