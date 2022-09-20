"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},r="4.1 Intro",s={unversionedId:"04coin-set-model/intro",id:"04coin-set-model/intro",title:"4.1 Intro",description:"NOTE: This section will briefly discuss Chialisp and the coin set model. For a more in-depth tutorial, head over to chialisp.com.",source:"@site/docs/04coin-set-model/intro.md",sourceDirName:"04coin-set-model",slug:"/04coin-set-model/intro",permalink:"/zh/docs/04coin-set-model/intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/04coin-set-model/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.15 Analysis",permalink:"/zh/docs/03consensus/analysis"},next:{title:"4.2 Coins, Puzzles and Solutions",permalink:"/zh/docs/04coin-set-model/what-is-a-coin"}},l={},c=[{value:"Coin set summary",id:"coin-set-summary",level:2},{value:"Key features",id:"key-features",level:2},{value:"The standard transaction",id:"the-standard-transaction",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Value added and spent",id:"value-added-and-spent",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"41-intro"},"4.1 Intro"),(0,a.kt)("p",null,"NOTE: This section will briefly discuss Chialisp and the coin set model. For a more in-depth tutorial, head over to ",(0,a.kt)("a",{parentName:"p",href:"http://chialisp.com",title:"Chialisp's official website"},"chialisp.com"),"."),(0,a.kt)("h2",{id:"coin-set-summary"},"Coin set summary"),(0,a.kt)("p",null,'In any given blockchain, one of the most fundamental questions is, "How do we keep track of the state of the whole system?" Bitcoin uses the Unspent Transaction Output (UTXO) model. Ethereum, along with many other blockchains, use the account model. Chia uses the ',(0,a.kt)("em",{parentName:"p"},"coin set")," model, which is similar to UTXO."),(0,a.kt)("p",null,"The differences between the coin set, UTXO, and account models will be covered in sections ",(0,a.kt)("a",{parentName:"p",href:"/docs/04coin-set-model/coin_set_vs_utxo",title:"Section 4.6: Coin Set vs UTXO"},"Section 4.6")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/04coin-set-model/coin_set_vs_account",title:"Section 4.7: Coin Set vs Account"},"Section 4.7"),". For now, we'll start with a brief explanation of the coin set model."),(0,a.kt)("p",null,"The mantra ",(0,a.kt)("em",{parentName:"p"},"everything is a coin")," will go a long way in helping you to understand the coin set model. There are no accounts. There are only coins."),(0,a.kt)("p",null,"Coins may only be spent once and anyone can attempt to spend them. However coins are locked with specific rules. Coins are written in Chialisp, a Turing-complete language with no side effects, allowing for complex functionality, including composability and interoperability between coins."),(0,a.kt)("p",null,'The majority of Chia\'s coins have one simple rule \u2013 "Anyone with the right private key can spend me."'),(0,a.kt)("h2",{id:"key-features"},"Key features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As stated above, Chia's blockchain only understands coins. There are no accounts at the blockchain level."),(0,a.kt)("li",{parentName:"ul"},'Technically the coins do not have owners. Anyone can attempt to spend any coin. Most coins are secured such that only someone who possesses a certain public/private key pair may spend them. This person is the coin\'s de facto "owner."'),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"coin set")," is the total set of all coins on Chia's blockchain."),(0,a.kt)("li",{parentName:"ul"},"The minimum value of a coin is 0 mojos. The theoretical maximum value of a coin is around 18 million XCH (2^64-1 mojos). Each coin can be of any value within this range.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note 1: One use case for a zero-mojo coin is to convey information. For example, upon being spent, a zero-mojo coin could make an announcement for a singleton to recreate itself"),(0,a.kt)("li",{parentName:"ul"},"Note 2: ",(0,a.kt)("a",{parentName:"li",href:"https://chialisp.com/docs/puzzles/singletons"},"Singletons")," must have an odd-numbered value, so their minimum value is 1 mojo (1 trillionth of an XCH)"))),(0,a.kt)("li",{parentName:"ul"},"The first block of Chia's blockchain introduced four coins to the coin set, with a total value of 21 million XCH. This is the pre-farm, controlled by Chia Network Inc."),(0,a.kt)("li",{parentName:"ul"},"Each additional block introduces a reward of two coins to the coin set (see ",(0,a.kt)("a",{parentName:"li",href:"/docs/05block-validation/block_rewards#farmer-vs-pool-reward",title:"Section 5.3 Farmer vs Pool Reward"},"Section 5.3")," for more info). For the first three years of Chia's blockchain, the targeted daily average to be introduced is 9216 XCH. This amount will be cut in half in 2024, 2027, 2030, and 2033, after which the targeted daily average will always be 576 XCH. While the exact amount introduced on any given day will vary slightly, one can predict the total amount of XCH in the coin set at any given time, with a high degree of accuracy."),(0,a.kt)("li",{parentName:"ul"},"Each coin can only be spent once. Thus, a coin has only two states: unspent and spent. (Technically, there is a third state: not created. This happens when there is a re-org and the creation transaction gets reverted. Re-orgs in Chia are rare, though possible.)"),(0,a.kt)("li",{parentName:"ul"},"A coin's value cannot be destroyed. Instead, when a coin is spent, its value is released. One or more new coins will be created in the same block, the total value of which will equal the value of the spent coin."),(0,a.kt)("li",{parentName:"ul"},"The coins themselves are highly programmable, so a wide variety of behavior is possible when a coin is spent.")),(0,a.kt)("h2",{id:"the-standard-transaction"},"The standard transaction"),(0,a.kt)("p",null,"For the standard Chia transaction, one or more coins are spent. One or more new coins are also created \u2013 these could be either standard or non-standard Chia coins, such as multisig, smart coins, etc."),(0,a.kt)("p",null,'New standard coins are secured with a public/private key pair, and whoever possesses these keys is the new "owner." If any value remains, another coin of the remaining value will be created as "change." Typically, this coin will be secured with the original keys, though technically the "change" is just another standard transaction that could be secured by different keys.'),(0,a.kt)("p",null,"The following two examples illustrate the standard transaction:"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"Alice wants to send 1 XCH to Bob and she controls one coin worth 2 XCH. Her coin will be spent and two new coins will be created: one worth 1 XCH secured by Bob's keys, and one worth 1 XCH secured by Alice's keys."),(0,a.kt)("h3",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Alice wants to send 1 XCH to Bob and she controls two coins, each worth 0.9 XCH. Both of her coins will be spent and two new coins will be created: one worth 1 XCH secured by Bob's keys, and one worth 0.8 XCH secured by Alice's keys."),(0,a.kt)("p",null,'In both of these examples, the latter coin is Alice\'s "change." Notice that even though one or more coins was spent, the total value remained the same. Thus, the "transfer" of money occurred solely by spending and creating coins.'),(0,a.kt)("h2",{id:"value-added-and-spent"},"Value added and spent"),(0,a.kt)("p",null,'Value may only be added to the coin set via the pre-farm (a one-time occurrence) and block rewards (which occur with each transaction block). Value can never be destroyed, though it can be "bricked," for example by sending it to an address for which nobody possesses the private keys.'),(0,a.kt)("p",null,"Typically, in a block's combined spend bundle, value added will be equal to value spent, other than the block rewards. By definition, there are two possible exceptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Value added > value spent -- This is not allowed, so the transaction will be rejected. The rejection will usually happen at the mempool level, though a malicious actor could write their own mempool to accept the transaction, in which case the blockchain will reject it."),(0,a.kt)("li",{parentName:"ul"},"Value added < value spent -- This is allowed, so the transaction will succeed. If the value added is less than the value spent the remaining value will be rewarded to the farmer of the block containing the transaction awarded as a tip (you probably don't want to do that!).")))}d.isMDXComponent=!0}}]);