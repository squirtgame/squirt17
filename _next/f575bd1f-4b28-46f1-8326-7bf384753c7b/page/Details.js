module.exports=__NEXT_REGISTER_PAGE("/Details",function(){return{page:webpackJsonp([4],{798:function(e,t,a){e.exports=a(799)},799:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),l=a.n(n),r=a(77),o=a(261),s=a(264);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var a,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),a=t,(r=[{key:"render",value:function(){return l.a.createElement(o.a,{header:l.a.createElement(s.a,{danger:this.props.dangerMode}),contentClass:"full-width"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"HPB17 Smart Contract can be verified here: (URL to be updated for final release) ",l.a.createElement("a",{href:"https://hpbscan.org/tx/0x4aac7dbd444a84c485a531e0f30742791c832cd343bd7bbb45a6bc7d05dab910",target:"_blank"},l.a.createElement("b",null,"0x9accc0b9a45cd25d0c40559e60a8b6d410e07f1c"))),l.a.createElement("div",{align:"left"},l.a.createElement("p",null,"HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000"),l.a.createElement("p",null,"Ok we know, guessing a number in such a wide range may seem impossible, but don't worry, the first guess of every game is FREE, and better still, if you guess incorrectly, then providing nobody else makes a guess after you, then you will win all the HPB stored in the contract anyway!"),l.a.createElement("p",null,"Yep, you heard us right. Get it wrong, and you can still win all the HPB!"),l.a.createElement("p",null,"So what actually happens? Well as soon as you make a guess, a countdown timer starts. It begins counting down from 59m 59s, and if the timer reaches zero and nobody else makes a guess, then the last person who made a guess wins all the HPB in the contract!"),l.a.createElement("p",null,'But what happens if someone else makes a guess? Well that person immediately becomes the "last player to guess" and the countdown timer resets to 59m 59s - Once again, if the timer reaches zero then that "last player to guess" wins all the HPB!'),l.a.createElement("p",null,'After each subsequent guess, the contract will even tell you that you that you need to go higher or lower for the next guess and the "guessing range" shrinks after each subsequent guess.'),l.a.createElement("p",null,"The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases."),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 1 - FREE!"),"              "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 2 - 0.25 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 3 - 0.50 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 4 - 0.60 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 5 - 0.70 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 6 - 0.80 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 7 - 0.90 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 8 - 1.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 9 - 2.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 10 - 3.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 11 - 4.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 12 - 5.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 13 - 6.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 14 - 7.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 15 - 8.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 16 - 9.00 HPB"),"             "),l.a.createElement("li",null,"                ",l.a.createElement("p",null,"Guess 17 - 10.00 HPB - Automatically refunded if you don't win!"),"  ")),l.a.createElement("br",null),l.a.createElement("p",null,"If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!"),l.a.createElement("br",null),l.a.createElement("h3",null,"FAQ"),l.a.createElement("p",null,l.a.createElement("b",null,"How is the number to guess generated?")),l.a.createElement("p",null,"We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game.  - Please see ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.hpb.io/post-423",target:"_blank"},"HPB RNG Q&A"))," for more information"),l.a.createElement("p",null,l.a.createElement("b",null,"What do I need to be able to play?")),l.a.createElement("p",null,"All that is required is a ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.hpb.io/wallet",target:"_blank"},"HPB Wallet")),", some ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.gate.io/trade/HPB_USDT",target:"_blank"},"HPB Coin")),"and ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://metamask.io/",target:"_blank"},"Metamask"))),l.a.createElement("p",null,l.a.createElement("b",null,"What if I make a guess at the same time as someone else?")),l.a.createElement("p",null,"All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other guess will be rejected. Please check your transaction hash or click on the game number header on the home page, which will show you the game transactions. If you were unsuccessful, the will see the transaction will have been reverted."),l.a.createElement("p",null,l.a.createElement("b",null,"You said the first guess is free?")),l.a.createElement("p",null,"The first guess of every new game is free, however this involves sending your guess to the smart contract on the blockchain, which costs a very small amount of gas (0.02). This is less than $0.01 in value."),l.a.createElement("p",null,l.a.createElement("b",null,"How do I setup Metamask to work with the HPB blockchain?")),l.a.createElement("p",null,'When you open Metamask, you\'ll need to switch from the default "Ethereum Main-net" option, to the "Custom RPC" option. At this point, you\'ll need to supply the following information: "Network Name" = HPB Network | "New RPC URL" = https://node.hpb.io | "Chain ID" = 0x10D | "Currency Symbol" = HPB | "Block Explorer URL" = https://explorer.myhpbwallet.com/'),l.a.createElement("p",null,l.a.createElement("b",null,"I'm receiving a Metamask error?")),l.a.createElement("p",null,"Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend completely cancelling/rejecting the transaction in Metamask, and try guessing again."),l.a.createElement("p",null,l.a.createElement("b",null,"Can I alter the gas to make a saving?")),l.a.createElement("p",null,"Of course! We have injected a default fee of 0.02, however you can increase or decrease this value to your choosing. Increasing the value will cost more, however it will usually speed up the time taken to write your guess to the smart contract."),l.a.createElement("p",null,l.a.createElement("b",null,"Can I interact with the smart contract game directly?")),l.a.createElement("p",null,"YES! And that is the beauty of HPB and the decentralized blockchain!"),l.a.createElement("p",null,l.a.createElement("b",null,"Do you have real-time support?")),l.a.createElement("p",null,"Visit the community on the ",l.a.createElement("b",null,l.a.createElement("a",{href:" https://t.me/HPBglobal",target:"_blank"},"HPB Global Telegram Chat"))," and stay in touch with a great community!")))}}])&&c(a.prototype,r),u&&c(a,u),t}();Object.defineProperty(m,"mapStateToProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return{dangerMode:e.dangerMode}}}),t.default=Object(r.b)(m.mapStateToProps)(m)}},[798]).default}});