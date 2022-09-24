/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./client.ts":
/*!*******************!*\
  !*** ./client.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://graph.holaplex.com/v1\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n        resultCaching: false\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBRWpFLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Ysd0RBQVksQ0FBQyxDQUFDO0lBQzdCRyxHQUFHLEVBQUUsQ0FBK0I7SUFDcENDLEtBQUssRUFBRSxHQUFHLENBQUNILHlEQUFhLENBQUMsQ0FBQ0k7UUFBQUEsYUFBYSxFQUFFLEtBQUs7SUFBQSxDQUFDO0FBQ25ELENBQUM7QUFFRCxpRUFBZUgsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYWRpZXN0b29scy8uL2NsaWVudC50cz81YjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogXCJodHRwczovL2dyYXBoLmhvbGFwbGV4LmNvbS92MVwiLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtyZXN1bHRDYWNoaW5nOiBmYWxzZX0pXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsInVyaSIsImNhY2hlIiwicmVzdWx0Q2FjaGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client.ts\n");

/***/ }),

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\n// log the pageview with their URL\nconst pageview = (url)=>{\n    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n        page_path: url\n    });\n};\n// log specific events happening.\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2EvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxFQUFrQztBQUMzQixLQUFLLENBQUNBLFFBQVEsSUFBSUMsR0FBRyxHQUFLLENBQUM7SUFDOUJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQVEsU0FBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLDRCQUE0QixFQUFFLENBQUM7UUFDL0RDLFNBQVMsRUFBRU4sR0FBRztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQWlDO0FBQzFCLEtBQUssQ0FBQ08sS0FBSyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDNUNSLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQU8sUUFBRU0sTUFBTSxFQUFFQyxNQUFNO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFkaWVzdG9vbHMvLi9saWIvZ2EvaW5kZXguanM/OWE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2cgdGhlIHBhZ2V2aWV3IHdpdGggdGhlaXIgVVJMXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcclxuICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTLCB7XHJcbiAgICAgIHBhZ2VfcGF0aDogdXJsLFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXHJcbiAgZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xyXG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwYXJhbXMpXHJcbiAgfSJdLCJuYW1lcyI6WyJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/ga/index.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client */ \"./client.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/ga */ \"./lib/ga/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_13__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__]);\n([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n// import '../styles/tailwind.css'\n\n\n\n\n\n\n\n\n\n\n\n\n// Default styles that can be overridden by your app\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__.WalletAdapterNetwork.Mainnet;\n    // You can also provide a custom RPC endpoint.\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded.\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.TorusWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SolletWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SolletExtensionWalletAdapter({\n                network\n            }), \n        ]\n    , [\n        network\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_ga__WEBPACK_IMPORTED_MODULE_12__.pageview(url);\n        };\n        //When the component is mounted, subscribe to router changes\n        //and log those page views\n        router.events.on('routeChangeComplete', handleRouteChange);\n        // If the component is unmounted, unsubscribe\n        // from the event with the `off` method\n        return ()=>{\n            router.events.off('routeChangeComplete', handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _client__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.ConnectionProvider, {\n            endpoint: endpoint,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.WalletProvider, {\n                wallets: wallets,\n                autoConnect: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.WalletModalProvider, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_13__.ToastContainer, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yunuk\\\\Documents\\\\GitHub\\\\flipthetip-repos\\\\tscutils\\\\pages\\\\_app.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yunuk\\\\Documents\\\\GitHub\\\\flipthetip-repos\\\\tscutils\\\\pages\\\\_app.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Yunuk\\\\Documents\\\\GitHub\\\\flipthetip-repos\\\\tscutils\\\\pages\\\\_app.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yunuk\\\\Documents\\\\GitHub\\\\flipthetip-repos\\\\tscutils\\\\pages\\\\_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Yunuk\\\\Documents\\\\GitHub\\\\flipthetip-repos\\\\tscutils\\\\pages\\\\_app.tsx\",\n            lineNumber: 76,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Yunuk\\\\Documents\\\\GitHub\\\\flipthetip-repos\\\\tscutils\\\\pages\\\\_app.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFHakI7QUFDOUIsRUFBa0M7QUFDUDtBQUVlO0FBQ3VDO0FBQ2Y7QUFTM0I7QUFHQztBQUNPO0FBQ2pCO0FBQ0c7QUFDTTtBQUVSO0FBQ2dCO0FBRS9DLEVBQW9EO0FBQ3BEb0IsbUJBQU8sQ0FBQyw2R0FBNEM7U0FFM0NDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBRWhELEtBQUssQ0FBQ0MsTUFBTSxHQUFHUCx1REFBUztJQUN6QixFQUFvRTtJQUNwRSxLQUFLLENBQUNRLE9BQU8sR0FBR3BCLHFGQUE0QjtJQUU1QyxFQUE4QztJQUM5QyxLQUFLLENBQUNzQixRQUFRLEdBQUd6Qiw4Q0FBTyxLQUFPWSw4REFBYSxDQUFDVyxPQUFPO01BQUcsQ0FBQ0E7UUFBQUEsT0FBTztJQUFBLENBQUM7SUFFaEUsRUFBeUc7SUFDekcsRUFBd0c7SUFDeEcsRUFBd0Q7SUFDeEQsS0FBSyxDQUFDRyxPQUFPLEdBQUcxQiw4Q0FBTyxLQUNiLENBQUM7WUFDSCxHQUFHLENBQUNLLGdGQUFvQjtZQUN4QixHQUFHLENBQUNDLDhFQUFrQjtZQUN0QixHQUFHLENBQUNDLGlGQUFxQixDQUFDLENBQUM7Z0JBQUNnQixPQUFPO1lBQUMsQ0FBQztZQUNyQyxHQUFHLENBQUNiLDhFQUFrQjtZQUN0QixHQUFHLENBQUNOLCtFQUFtQjtZQUN2QixHQUFHLENBQUNLLCtFQUFtQixDQUFDLENBQUM7Z0JBQUNjLE9BQU87WUFBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQ2Ysd0ZBQTRCLENBQUMsQ0FBQztnQkFBQ2UsT0FBTztZQUFDLENBQUM7UUFDaEQsQ0FBQztNQUNELENBQUNBO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBR2JULGdEQUFTLEtBQU8sQ0FBQztRQUNoQixLQUFLLENBQUNhLGlCQUFpQixJQUFJQyxHQUFXLEdBQUssQ0FBQztZQUMxQ1osOENBQVcsQ0FBQ1ksR0FBRztRQUNqQixDQUFDO1FBQ0QsRUFBNEQ7UUFDNUQsRUFBMEI7UUFDMUJOLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUVKLGlCQUFpQjtRQUV6RCxFQUE2QztRQUM3QyxFQUF1QztRQUN2QyxNQUFNLEtBQU8sQ0FBQztZQUNaTCxNQUFNLENBQUNRLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQXFCLHNCQUFFTCxpQkFBaUI7UUFDNUQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxNQUFNLENBQUNRLE1BQU07SUFBQSxDQUFDO0lBRWxCLE1BQU0sNkVBQ0hoQywwREFBYztRQUFDZSxNQUFNLEVBQUVBLGdEQUFNOzhGQUM3QlosNEVBQWtCO1lBQUN3QixRQUFRLEVBQUVBLFFBQVE7a0dBQ2pDdkIsd0VBQWM7Z0JBQUN3QixPQUFPLEVBQUVBLE9BQU87Z0JBQUVPLFdBQVc7c0dBQ3hDdEIsZ0ZBQW1COztvR0FDbkJNLDJEQUFjOzs7OztvR0FDVkcsU0FBUzsrQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYWRpZXN0b29scy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBncWwsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy90YWlsd2luZC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29ubmVjdGlvblByb3ZpZGVyLCBXYWxsZXRQcm92aWRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnXHJcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcclxuaW1wb3J0IHtcclxuICAgIExlZGdlcldhbGxldEFkYXB0ZXIsXHJcbiAgICBQaGFudG9tV2FsbGV0QWRhcHRlcixcclxuICAgIFNsb3BlV2FsbGV0QWRhcHRlcixcclxuICAgIFNvbGZsYXJlV2FsbGV0QWRhcHRlcixcclxuICAgIFNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIsXHJcbiAgICBTb2xsZXRXYWxsZXRBZGFwdGVyLFxyXG4gICAgVG9ydXNXYWxsZXRBZGFwdGVyLFxyXG59IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cyc7XHJcbmltcG9ydCB7XHJcbiAgICBXYWxsZXRNb2RhbFByb3ZpZGVyXHJcbn0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XHJcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0ICogYXMgZ2EgZnJvbSAnLi4vbGliL2dhJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5cclxuLy8gRGVmYXVsdCBzdHlsZXMgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSB5b3VyIGFwcFxyXG5yZXF1aXJlKCdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3MnKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAvLyBUaGUgbmV0d29yayBjYW4gYmUgc2V0IHRvICdkZXZuZXQnLCAndGVzdG5ldCcsIG9yICdtYWlubmV0LWJldGEnLlxyXG4gICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuTWFpbm5ldDtcclxuXHJcbiAgIC8vIFlvdSBjYW4gYWxzbyBwcm92aWRlIGEgY3VzdG9tIFJQQyBlbmRwb2ludC5cclxuICAgY29uc3QgZW5kcG9pbnQgPSB1c2VNZW1vKCgpID0+IGNsdXN0ZXJBcGlVcmwobmV0d29yayksIFtuZXR3b3JrXSk7XHJcblxyXG4gICAvLyBAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMgaW5jbHVkZXMgYWxsIHRoZSBhZGFwdGVycyBidXQgc3VwcG9ydHMgdHJlZSBzaGFraW5nIGFuZCBsYXp5IGxvYWRpbmcgLS1cclxuICAgLy8gT25seSB0aGUgd2FsbGV0cyB5b3UgY29uZmlndXJlIGhlcmUgd2lsbCBiZSBjb21waWxlZCBpbnRvIHlvdXIgYXBwbGljYXRpb24sIGFuZCBvbmx5IHRoZSBkZXBlbmRlbmNpZXNcclxuICAgLy8gb2Ygd2FsbGV0cyB0aGF0IHlvdXIgdXNlcnMgY29ubmVjdCB0byB3aWxsIGJlIGxvYWRlZC5cclxuICAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oXHJcbiAgICAgICAoKSA9PiBbXHJcbiAgICAgICAgICAgbmV3IFBoYW50b21XYWxsZXRBZGFwdGVyKCksXHJcbiAgICAgICAgICAgbmV3IFNsb3BlV2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICAgICAgIG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxyXG4gICAgICAgICAgIG5ldyBUb3J1c1dhbGxldEFkYXB0ZXIoKSxcclxuICAgICAgICAgICBuZXcgTGVkZ2VyV2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICAgICAgIG5ldyBTb2xsZXRXYWxsZXRBZGFwdGVyKHsgbmV0d29yayB9KSxcclxuICAgICAgICAgICBuZXcgU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlcih7IG5ldHdvcmsgfSksXHJcbiAgICAgICBdLFxyXG4gICAgICAgW25ldHdvcmtdXHJcbiAgICk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgZ2EucGFnZXZpZXcodXJsKVxyXG4gICAgfVxyXG4gICAgLy9XaGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgc3Vic2NyaWJlIHRvIHJvdXRlciBjaGFuZ2VzXHJcbiAgICAvL2FuZCBsb2cgdGhvc2UgcGFnZSB2aWV3c1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG5cclxuICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLCB1bnN1YnNjcmliZVxyXG4gICAgLy8gZnJvbSB0aGUgZXZlbnQgd2l0aCB0aGUgYG9mZmAgbWV0aG9kXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICA8Q29ubmVjdGlvblByb3ZpZGVyIGVuZHBvaW50PXtlbmRwb2ludH0+XHJcbiAgICAgICAgPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PlxyXG4gICAgICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9XYWxsZXRNb2RhbFByb3ZpZGVyPlxyXG4gICAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XHJcbiAgICA8L0Nvbm5lY3Rpb25Qcm92aWRlcj5cclxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJSZWFjdCIsInVzZU1lbW8iLCJDb25uZWN0aW9uUHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlciIsIldhbGxldEFkYXB0ZXJOZXR3b3JrIiwiTGVkZ2VyV2FsbGV0QWRhcHRlciIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiU2xvcGVXYWxsZXRBZGFwdGVyIiwiU29sZmxhcmVXYWxsZXRBZGFwdGVyIiwiU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlciIsIlNvbGxldFdhbGxldEFkYXB0ZXIiLCJUb3J1c1dhbGxldEFkYXB0ZXIiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiY2x1c3RlckFwaVVybCIsImNsaWVudCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdhIiwiVG9hc3RDb250YWluZXIiLCJyZXF1aXJlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJuZXR3b3JrIiwiTWFpbm5ldCIsImVuZHBvaW50Iiwid2FsbGV0cyIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiIsImF1dG9Db25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();