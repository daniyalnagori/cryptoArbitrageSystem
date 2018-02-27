// import React, { Component } from 'react';
// import ccxt from 'ccxt';
// import Chart from "frappe-charts/dist/frappe-charts.min.esm";
// // import LineChart from './charts/LineChart';

// import './index.css';
// import { Button, Table } from 'react-bootstrap';
// import { btcAction } from "../../store/actions/index";
// import { btcReducer } from "../../store";
// import { connect } from 'react-redux';
// import { Bar, BarChart, LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend } from 'recharts';
// class App extends Component {



//   btcDtaBinanceArr = [];
//   btcDtaBittrexArr = [];
//   btcDtaKrakenArr = [];
//   btcDtaBinanceArr1 = [];
//   constructor(props) {
//     super(props);
//     this.state = {
//       exchangeName: "",
//       BTCLastPriceBinance: "",
//       BTCLastPriceBittrex: "",
//       BTCLastPriceCryptoPia: "",
//       BTCLastPriceGDax: "",
//       BTCLastPriceBitfinex: "",
//       BTCLastPriceKraken: "",
//       BTCLastPricePoloniex: "",
//       BTCLastBidBinance: "",
//       BTCLastBidBittrex: "",
//       BTCLastBidCryptoPia: "",
//       BTCLastBidGDax: "",
//       BTCLastBidBitfinex: "",
//       BTCLastBidKraken: "",
//       BTCLastBidPoloniex: "",
//       btn1: false,
//       btn2: false,
//       btn3: false,
//       btn4: false,
//       btn5: false,
//     };
//   }


//   componentDidMount() {

//     // super(props);
//     // const exchangeBinance = new ccxt.binance();
//     // const symbolBinance = 'BTC/USDT'
//     // console.log(exchangeBinance)
//     // exchangeBinance.apiKey = '123';
//     // exchangeBinance.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangeBinance.fetchTicker(symbolBinance).then(ticker => {
//     //   console.log(ticker);
//     //   const text = [
//     //     exchangeBinance.id,
//     //     symbolBinance,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]
//     //   let data = JSON.parse(text[2]);
//     //   data['info']['lastPrice'];
//     //   this.setState({ BTCLastPriceBinance: data['info']['lastPrice'], BTCLastBidBinance: data['info']['bidPrice'] });
//     //   // document.getElementById('content').innerHTML = text.join(' ')
//     // })

//     // const exchangeBittrex = new ccxt.bittrex();
//     // const symbolBittrex = 'BTC/USDT'
//     // exchangeBittrex.apiKey = '123';
//     // exchangeBittrex.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangeBittrex.fetchTicker(symbolBittrex).then(ticker => {
//     //   const text = [
//     //     exchangeBittrex.id,
//     //     symbolBittrex,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]
//     //   let data = JSON.parse(text[2]);
//     //   this.setState({ BTCLastPriceBittrex: data['last'], BTCLastBidBittrex: data['bid'] });
//     //   // document.getElementById('content').innerHTML = text.join(' ')
//     // })


//     // const exchangeCryptopia = new ccxt.cryptopia();
//     // const symbolcryptopia = 'BTC/USDT';
//     // exchangeCryptopia.apiKey = '123';
//     // exchangeCryptopia.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangeCryptopia.fetchTicker(symbolcryptopia).then(ticker => {
//     //   const text = [
//     //     exchangeCryptopia.id,
//     //     symbolcryptopia,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]
//     //   let data = JSON.parse(text[2]);
//     //   data['info']['lastPrice']
//     //   this.setState({ BTCLastPriceCryptoPia: data['last'], BTCLastBidCryptoPia: data['bid'] });
//     //   // document.getElementById('content').innerHTML = text.join(' ')
//     // })


//     // const exchangDax = new ccxt.gdax();
//     // const symbolgDax = 'BTC/USD'
//     // exchangDax.apiKey = '123';
//     // exchangDax.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangDax.fetchTicker(symbolgDax).then(ticker => {
//     //   const text = [
//     //     exchangDax.id,
//     //     symbolgDax,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]

//     //   this.setState({ BTCLastPriceGDax: ticker['last'], BTCLastBidGDax: ticker['bid'] });
//     // })

//     // const exchangBitfinex = new ccxt.bitfinex();
//     // const symbolBitfinex = 'BTC/USD'
//     // exchangBitfinex.apiKey = '123';
//     // exchangBitfinex.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangBitfinex.fetchTicker(symbolBitfinex).then(ticker => {
//     //   const text = [
//     //     exchangBitfinex.id,
//     //     symbolBitfinex,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]
//     //   this.setState({ BTCLastPriceBitfinex: ticker['last'], BTCLastBidBitfinex: ticker['bid'] });
//     // })

//     // const exchangKaraken = new ccxt.kraken();
//     // const symbolKaraken = 'BTC/USD'
//     // exchangKaraken.apiKey = '123';
//     // exchangKaraken.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangKaraken.fetchTicker(symbolKaraken).then(ticker => {
//     //   const text = [
//     //     exchangKaraken.id,
//     //     symbolKaraken,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]
//     //   this.setState({ BTCLastPriceKraken: ticker['last'], BTCLastBidKraken: ticker['bid'] });
//     // })

//     // const exchangPoloniex = new ccxt.poloniex();
//     // const symbolPoloniex = 'BTC/USD'
//     // exchangPoloniex.apiKey = '123';
//     // exchangPoloniex.secret = '123';
//     // this.setState({ exchangeName: "Binance" });
//     // exchangPoloniex.fetchTicker(symbolPoloniex).then(ticker => {
//     //   const text = [
//     //     exchangPoloniex.id,
//     //     symbolPoloniex,
//     //     JSON.stringify(ticker, undefined, '\n\t')
//     //   ]
//     //   this.setState({ BTCLastPricePoloniex: ticker['last'], BTCLastBidPoloniex: ticker['bid'] });
//     // })
//     // setInterval(() => {
//     //   this.props.btcData({ title: 'daniyal', isDone: false });
//     // }, 10000);
//   }

//   binances = (s) => {
//     let exchange;
//     let symbol;
//     s == "gDax" ? exchange = new ccxt.gdax() : s == "bitfinex" ? exchange = new ccxt.bitfinex() : s == "bittrex" ? exchange = new ccxt.bittrex() : s == "binance" ? exchange = new ccxt.binance() : s == "cryptoPia" ? exchange = new ccxt.cryptopia() : exchange = new ccxt.kraken()
//     exchange.apiKey = '123';
//     exchange.secret = '123';
//     this.setState({ exchangeName: s });
//     if (s == "kraken" || s == "bitfinex" || s == "gDax") {
//       symbol = 'BTC/USD'
//     }
//     else {
//       symbol = 'BTC/USDT'
//     }
//     exchange.fetchTicker(symbol).then(ticker => {
//       this.setState({
//         [`BTCLastPrice${s}`]: ticker['info']['lastPrice']
//       });
//       this.btcDtaBinanceArr1 = [];
//       if (this.props.btcReducer.authUser.length) {
//         this.props.btcReducer.authUser
//           .map((data) => {
//             this.btcDtaBinanceArr.push(data['BTCLastPriceBinance']);
//             this.btcDtaBittrexArr.push(data['BTCLastPriceBittrex']);
//             this.btcDtaKrakenArr.push(data['BTCLastPriceKraken']);
//             this.btcDtaBinanceArr1.push({ Binance: data['BTCLastPriceBinance'], CryptoPia: data['BTCLastPriceCryptoPia'],Bittrex: data['BTCLastPriceBittrex']});
//             console.log(this.btcDtaBinanceArr1);

//             if (this.props.btcReducer.authUser.length) {
//               let dataBinance = this.btcDtaBinanceArr.slice(52, 70);
//               let dataBittrex = this.btcDtaBittrexArr.slice(52, 70);
//               let dataKraken = this.btcDtaKrakenArr.slice(52, 70);
//               this.dataBittrexs = this.btcDtaBittrexArr.slice(52, 70);
//             }
//           })
//       }

//     })
//   }

//   componentDidUpdate() {
//     if (this.state.btn1 === true) {
//       document.getElementById('a').style.backgroundColor = 'green';
//     }
//     else {
//       document.getElementById('a').style.backgroundColor = 'lightgray';
//     }
//     if (this.state.btn2 === true) {
//       document.getElementById('b').style.backgroundColor = 'green';
//     }
//     else {
//       document.getElementById('b').style.backgroundColor = 'lightgray';
//     }
//     if (this.state.btn3 === true) {
//       document.getElementById('c').style.backgroundColor = 'green';
//     }
//     else {
//       document.getElementById('c').style.backgroundColor = 'lightgray';
//     }
//     if (this.state.btn4 === true) {
//       document.getElementById('d').style.backgroundColor = 'green';
//     }
//     else {
//       document.getElementById('d').style.backgroundColor = 'lightgray';
//     }
//     if (this.state.btn5 === true) {
//       document.getElementById('e').style.backgroundColor = 'green';
//     }
//     else {
//       document.getElementById('e').style.backgroundColor = 'lightgray';
//     }
//   }

//   click(arg, e) {
//     e.preventDefault();
//     if (arg == 'btn1') {
//       this.setState({ btn1: true, btn2: false, btn3: false, btn4: false, btn5: false });
//       this.binances('gDax')
//     }
//     if (arg == 'btn2') {
//       this.setState({ btn1: false, btn2: true, btn3: false, btn4: false, btn5: false });
//       this.binances('kraken')
//     }
//     if (arg == 'btn3') {
//       this.setState({ btn1: false, btn2: false, btn3: true, btn4: false, btn5: false });
//       this.binances('cryptoPia')
//     }
//     if (arg == 'btn4') {
//       this.setState({ btn1: false, btn2: false, btn3: false, btn4: true, btn5: false });
//       this.binances('binance')
//     }
//     if (arg == 'btn5') {
//       this.setState({ btn1: false, btn2: false, btn3: false, btn4: false, btn5: true });
//       this.binances('bitfinex')
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1 className="mainHead">Arbitrage Trading System</h1>
//         <h3 className="subHead">BitCoin Exchanges Prices</h3>

//         {/* Dashboard UI */}
//         <div className="parent">

//           <div className='container_fluid'>
//             <div className="header">
//               {/* <h2>Arbitrage-Trade</h2> */}
//               <div className="headbtn">
//                 <button className="btn3">Dashboard</button>
//                 <button className="btn3">Arbitrage</button>
//                 <button className="btn3">Stream</button>
//                 <button className="btn3">Setting</button>
//               </div>
//               <div className="headtext">
//                 {/* <p>BOT RUNNING</p> */}
//               </div>
//             </div>
//             <br /><br />
//             <form className="arbform">
//               <h4><strong>Arbitrage opportunity</strong></h4><br />
//               <p> Bot Name:
//                     <input className="input1" type="text" placeholder="Bot Name" size='8' />
//               </p>
//               <p>What makes to use : </p>
//               <button className="btn1" id="a" onClick={this.click.bind(this, "btn1")}>Gdax</button>
//               <button className="btn1" id="b" onClick={this.click.bind(this, "btn2")}>Kraken</button>
//               <button className="btn1" id="c" onClick={this.click.bind(this, "btn3")}>CryptoPia</button>
//               <button className="btn1" id="d" onClick={this.click.bind(this, "btn4")}>Binance</button>
//               <button className="btn1" id="e" onClick={this.click.bind(this, "btn5")}>bitfinix</button>
//               <br /><br /><br /><br />
//               <div className="calender">
//                 <p>Run bot from
//                         <input className="input3" type="date" />
//                   To
//                         <input className="input3" type="date" />
//                   Every
//                         <input className="input2" type="number" placeholder="1" />
//                   Seconds</p>
//               </div>
//               <br />
//               <div className="footbtn">
//                 {/* <button className="btn4">Run Test</button>
//                         <button className="btn4">Run Bot</button> */}
//               </div>
//             </form>
//             {/* <h4>Live Data</h4> */}
//             <table className="table">
//               <tr>
//                 <td className="tabledate">Date</td>
//                 <td className="tablemax">MAX</td>
//                 <td className="tablemax">MIN</td>
//                 <td className="tablemax">delta</td>
//                 <td className="tablemax">Opportunity</td>
//                 <td className="tablemax">Opportunity with fee</td>
//                 <td className="tablemax">PROFIT</td>
//               </tr>
//               <tr>
//                 <td className="tabledata">Not Available</td>
//                 <td className="tabledata">Not Available</td>
//                 <td className="tabledata">Not Available</td>
//                 <td className="tabledata">Not Available</td>
//                 <td className="tabledata">Not Available</td>
//                 <td className="tabledata">Not Available</td>
//                 <td className="tabledata">Not Available</td>
//               </tr>
//             </table>
//           </div>


//           {/* Line Chart */}
//           {this.btcDtaBinanceArr1.length ?

//             <LineChart width={1500} height={300} data={this.btcDtaBinanceArr1}
//               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <XAxis dataKey="name" />
//               <YAxis domain={[10000, 10700]} />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip />
//               <Legend />
//               <Line dataKey="Binance" fill="#8884d8" />
//               <Line dataKey="CryptoPia" fill="#82ca9d" />
//               <Line dataKey="Bittrex" fill="#92bs6a" />
//             </LineChart>
//             :
//             <div>Cant Load</div>};
//         </div>
//         <button type="button" onClick={this.props.btcData.bind(this, { title: 'daniyal', isDone: false })}>Click me</button>

//         <button type="button" onClick={this.props.btcGet.bind(this)}>Click messss</button>
//       </div>);
//   }

// }

// const mapStateToProps = (state) => {
//   return { userAuth: state.AuthReducer, btcReducer: state.btcReducer };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     btcData: (userObj) => dispatch(btcAction.btcData(userObj)),
//     btcGet: () => dispatch(btcAction.btcGet())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

























import React, { Component } from 'react';
import ccxt from 'ccxt';
import Chart from "frappe-charts/dist/frappe-charts.min.esm";
// import LineChart from './charts/LineChart';

import './index.css';
import { Button, Table } from 'react-bootstrap';
import { btcAction } from "../../store/actions/index";
import { btcReducer } from "../../store";
import { connect } from 'react-redux';
import { Bar, BarChart, LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend } from 'recharts';
class App extends Component {



  btcDtaBinanceArr = [];
  btcDtaBittrexArr = [];
  btcDtaKrakenArr = [];
  btcDtaBinanceArr1 = []
  constructor(props) {
    super(props);
    this.state = {
      exchangeName: "",
      BTCLastPriceBinance: "",
      BTCLastPriceBittrex: "",
      BTCLastPriceCryptoPia: "",
      BTCLastPriceGDax: "",
      BTCLastPriceBitfinex: "",
      BTCLastPriceKraken: "",
      BTCLastPricePoloniex: "",
      BTCLastBidBinance: "",
      BTCLastBidBittrex: "",
      BTCLastBidCryptoPia: "",
      BTCLastBidGDax: "",
      BTCLastBidBitfinex: "",
      BTCLastBidKraken: "",
      BTCLastBidPoloniex: "",
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
      btn5: false,
      btn6: false,
      array1: [],
      abc : []
    };


  }

  componentWillMount() {
    this.props.btcGet();
    console.log(this.props.btcReducer)
  }
componentWillReceiveProps(nextprops){
  console.log(nextprops.btcReducer)
  if(nextprops.btcReducer.authUser.length){
  let a = []
  nextprops.btcReducer.authUser.map((val, i) => {
    a.push({
      Binance : val["BTCLastPriceBinance"],
      Bitfinex : val["BTCLastPriceBitfinex"],
      Bittrex : val["BTCLastPriceBittrex"],
      CryptoPia : val["BTCLastPriceCryptoPia"],
      Kraken : val["BTCLastPriceKraken"],
      gDax : val["BTCLastPricegDax"],
    })
  })
  this.setState({
    abc : a
  })
}
}

  componentDidMount() {

    // super(props);
    const exchangeBinance = new ccxt.binance();
    const symbolBinance = 'BTC/USDT'
    console.log(exchangeBinance)
    exchangeBinance.apiKey = '123';
    exchangeBinance.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeBinance.fetchTicker(symbolBinance).then(ticker => {
      console.log(ticker);
      const text = [
        exchangeBinance.id,
        symbolBinance,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      data['info']['lastPrice'];
      this.setState({ BTCLastPriceBinance: data['info']['lastPrice'], BTCLastBidBinance: data['info']['bidPrice'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })

    const exchangeBittrex = new ccxt.bittrex();
    const symbolBittrex = 'BTC/USDT'
    exchangeBittrex.apiKey = '123';
    exchangeBittrex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeBittrex.fetchTicker(symbolBittrex).then(ticker => {
      const text = [
        exchangeBittrex.id,
        symbolBittrex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      this.setState({ BTCLastPriceBittrex: data['last'], BTCLastBidBittrex: data['bid'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })


    const exchangeCryptopia = new ccxt.cryptopia();
    const symbolcryptopia = 'BTC/USDT';
    exchangeCryptopia.apiKey = '123';
    exchangeCryptopia.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeCryptopia.fetchTicker(symbolcryptopia).then(ticker => {
      const text = [
        exchangeCryptopia.id,
        symbolcryptopia,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      this.setState({ BTCLastPriceCryptoPia: data['last'], BTCLastBidCryptoPia: data['bid'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })


    const exchangDax = new ccxt.gdax();
    const symbolgDax = 'BTC/USD'
    exchangDax.apiKey = '123';
    exchangDax.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangDax.fetchTicker(symbolgDax).then(ticker => {
      const text = [
        exchangDax.id,
        symbolgDax,
        JSON.stringify(ticker, undefined, '\n\t')
      ]

      this.setState({ BTCLastPriceGDax: ticker['last'], BTCLastBidGDax: ticker['bid'] });
    })

    const exchangBitfinex = new ccxt.bitfinex();
    const symbolBitfinex = 'BTC/USD'
    exchangBitfinex.apiKey = '123';
    exchangBitfinex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangBitfinex.fetchTicker(symbolBitfinex).then(ticker => {
      const text = [
        exchangBitfinex.id,
        symbolBitfinex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPriceBitfinex: ticker['last'], BTCLastBidBitfinex: ticker['bid'] });
    })

    const exchangKaraken = new ccxt.kraken();
    const symbolKaraken = 'BTC/USD'
    exchangKaraken.apiKey = '123';
    exchangKaraken.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangKaraken.fetchTicker(symbolKaraken).then(ticker => {
      const text = [
        exchangKaraken.id,
        symbolKaraken,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPriceKraken: ticker['last'], BTCLastBidKraken: ticker['bid'] });
    })

    const exchangPoloniex = new ccxt.poloniex();
    const symbolPoloniex = 'BTC/USD'
    exchangPoloniex.apiKey = '123';
    exchangPoloniex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangPoloniex.fetchTicker(symbolPoloniex).then(ticker => {
      const text = [
        exchangPoloniex.id,
        symbolPoloniex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPricePoloniex: ticker['last'], BTCLastBidPoloniex: ticker['bid'] });
    })
    // setInterval(() => {
    //   this.props.btcData({ title: 'daniyal', isDone: false });
    // }, 10000);
  }

  binances = (s) => {
    let exchange;
    let symbol;
    s == "gDax" ? exchange = new ccxt.gdax() : s == "Bitfinex" ? exchange = new ccxt.bitfinex() : s == "Bittrex" ? exchange = new ccxt.bittrex() : s == "Binance" ? exchange = new ccxt.binance() : s == "CryptoPia" ? exchange = new ccxt.cryptopia() : s == "Kraken" ? exchange = new ccxt.kraken() : exchange = new ccxt.bittrex()
    exchange.apiKey = '123';
    exchange.secret = '123';
    this.setState({ exchangeName: s });
    if (s == "Kraken" || s == "Bitfinex" || s == "gDax") {
      symbol = 'BTC/USD'
    }
    else {
      symbol = 'BTC/USDT'
    }
    console.log(exchange);
    let that = this
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({
        [`BTCLastPrice${s}`]: ticker['info']['lastPrice'],
        info: ticker
      });
      // console.log(ticker.timestamp);
      this.btcDtaBinanceArr1 = []
      if (this.props.btcReducer.authUser.length) {
        // let tthat = that
        this.props.btcReducer.authUser
          .map((data) => {
            console.log(data[`BTCLastPrice${s}`])
            // this.btcDtaBinanceArr.push(data['BTCLastPriceBinance']);
            // this.btcDtaBittrexArr.push(data['BTCLastPriceBittrex']);
            // this.btcDtaKrakenArr.push(data['BTCLastPriceKraken']);
            this.btcDtaBinanceArr1.push({ uv: data[`BTCLastPrice${s}`] });
          
            console.log(this.btcDtaBinanceArr1);
            if (this.props.btcReducer.authUser.length) {
              let dataBinance = this.btcDtaBinanceArr.slice(52, 70);
              let dataBittrex = this.btcDtaBittrexArr.slice(52, 70);
              let dataKraken = this.btcDtaKrakenArr.slice(52, 70);
              this.dataBittrexs = this.btcDtaBittrexArr.slice(52, 70);
            }
          })
          this.setState({
            a:"a"
          })
      }

    })
  }

  componentDidUpdate() {
    if (this.state.btn1 === true) {
      document.getElementById('a').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('a').style.backgroundColor = 'lightgray';
    }
    if (this.state.btn2 === true) {
      document.getElementById('b').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('b').style.backgroundColor = 'lightgray';
    }
    if (this.state.btn3 === true) {
      document.getElementById('c').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('c').style.backgroundColor = 'lightgray';
    }
    if (this.state.btn4 === true) {
      document.getElementById('d').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('d').style.backgroundColor = 'lightgray';
    }
    if (this.state.btn5 === true) {
      document.getElementById('e').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('e').style.backgroundColor = 'lightgray';
    }
    if (this.state.btn6 === true) {
      document.getElementById('f').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('f').style.backgroundColor = 'lightgray';
    }
  }

  click(arg, e) {
    e.preventDefault();
    this.props.btcGet()
    if (arg == 'btn1') {
      this.setState({ btn1: true, btn2: false, btn3: false, btn4: false, btn5: false, btn6: false });
      this.binances('gDax')
      console.log("btn1");
    }
    if (arg == 'btn2') {
      this.setState({ btn1: false, btn2: true, btn3: false, btn4: false, btn5: false, btn6: false });
      this.binances('Kraken')
    }
    if (arg == 'btn3') {
      this.setState({ btn1: false, btn2: false, btn3: true, btn4: false, btn5: false, btn6: false });
      this.binances('CryptoPia')
    }
    if (arg == 'btn4') {
      this.setState({ btn1: false, btn2: false, btn3: false, btn4: true, btn5: false, btn6: false });
      this.binances('Binance')
    }
    if (arg == 'btn5') {
      this.setState({ btn1: false, btn2: false, btn3: false, btn4: false, btn5: true, btn6: false });
      this.binances('Bitfinex')
    }
    if (arg == 'btn6') {
      this.setState({ btn1: false, btn2: false, btn3: false, btn4: false, btn5: false, btn6: true });
      this.binances('Bittrex')
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="mainHead">Arbitrage Trading System</h1>
    {this.state.abc.length ?
        <LineChart width={1500} height={300} data={this.state.abc}>
          <XAxis dataKey="name" />
          <YAxis domain={[9700, 10200]} />
          <Tooltip/>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Line type="monotone" dataKey="Binance" stroke="#8884d8" />
          <Line type="monotone" dataKey="Bitfinex" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Bittrex" stroke="blue" />
          <Line type="monotone" dataKey="CryptoPia" stroke="red" />
          <Line type="monotone" dataKey="Kraken" stroke="yellow" />
          <Line type="monotone" dataKey="gDax" stroke="black" />
        </LineChart>
        :
        <div>
          Can't Load
        </div>
}
        <h3 className="subHead">BitCoin Exchanges Prices</h3>

        {/* {/ Dashboard UI /} */}
        <div className="parent">

          <div className='container_fluid'>
            <div className="header">
              {/* {/ <h2>Arbitrage-Trade</h2> /} */}
              <div className="headbtn">
                <button className="btn3">Dashboard</button>
                <button className="btn3">Arbitrage</button>
                <button className="btn3">Stream</button>
                <button className="btn3">Setting</button>
              </div>
              <div className="headtext">
                {/* {/ <p>BOT RUNNING</p> /} */}
              </div>
            </div>
            <br /><br />
            <form className="arbform">
              <h4><strong>Arbitrage opportunity</strong></h4><br />
              <p> Bot Name:
                    <input className="input1" type="text" placeholder="Bot Name" size='8' />
              </p>
              <p>What makes to use : </p>
              <button className="btn1" id="a" onClick={this.click.bind(this, "btn1")}>Gdax</button>
              <button className="btn1" id="b" onClick={this.click.bind(this, "btn2")}>Kraken</button>
              <button className="btn1" id="c" onClick={this.click.bind(this, "btn3")}>CryptoPia</button>
              <button className="btn1" id="d" onClick={this.click.bind(this, "btn4")}>Binance</button>
              <button className="btn1" id="e" onClick={this.click.bind(this, "btn5")}>Bitfinix</button>
              <button className="btn1" id="f" onClick={this.click.bind(this, "btn6")}>Bittrex</button>
              <br /><br /><br /><br />
              <div className="calender">
                <p>Run bot from
                        <input className="input3" type="date" />
                  To
                        <input className="input3" type="date" />
                  Every
                        <input className="input2" type="number" placeholder="1" />
                  Seconds</p>
              </div>
              <br />
              <div className="footbtn">
              </div>
            </form>
            <table className="table">
              <tr>
                <td className="tabledate">Date</td>
                <td className="tablemax">MAX</td>
                <td className="tablemax">MIN</td>
                <td className="tablemax">delta</td>
                <td className="tablemax">Opportunity</td>
                <td className="tablemax">Opportunity with fee</td>
                <td className="tablemax">PROFIT</td>
              </tr>
              {this.state.info ?
                <tr>
                  <td className="tabledata">{`${new Date(this.state.info.timestamp).getDate()}/
                ${new Date(this.state.info.timestamp).getMonth() + 1}/
                ${new Date(this.state.info.timestamp).getFullYear()}`}</td>

                  {this.state.info.high ?
                    <td className="tabledata">{this.state.info.high}</td> : <td className="tabledata">Not Available</td>}
                  {this.state.info.low ?
                    <td className="tabledata">{this.state.info.low}</td> : <td className="tabledata">Not Available</td>}
                  <td className="tabledata">Not Available</td>
                  <td className="tabledata">Not Available</td>
                  <td className="tabledata">Not Available</td>
                  <td className="tabledata">Not Available</td>
                </tr>
                :
                <tr>
                  {/* <td className="tabledata">Not Available</td>
                <td className="tabledata">Not Available</td>
                <td className="tabledata">Not Available</td>
                <td className="tabledata">Not Available</td>
                <td className="tabledata">Not Available</td>
                <td className="tabledata">Not Available</td>
                <td className="tabledata">Not Available</td> */}
                </tr>
              }
            </table>
          </div>

        </div>
        <br />
        {/* {/ Line Chart /} */}
        {this.btcDtaBinanceArr1.length ?
          <LineChart width={1500} height={300} data={this.btcDtaBinanceArr1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis domain={[9700, 10200]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line dataKey="pv" fill="#8884d8" />
            <Line dataKey="uv" fill="#82ca9d" />
          </LineChart>
          :
          <div>Cant Load</div>}
        <button type="button" onClick={this.props.btcData.bind(this, { title: 'daniyal', isDone: false })}>Click me</button>

        <button type="button" onClick={this.props.btcGet.bind(this)}>Click messss</button>
      </div>);
  }

}

const mapStateToProps = (state) => {
  return { userAuth: state.AuthReducer, btcReducer: state.btcReducer };
};
const mapDispatchToProps = (dispatch) => {
  return {
    btcData: (userObj) => dispatch(btcAction.btcData(userObj)),
    btcGet: () => dispatch(btcAction.btcGet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);









