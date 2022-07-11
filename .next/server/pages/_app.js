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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://graph.holaplex.com/v1\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n        resultCaching: false\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBRWpFLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Ysd0RBQVksQ0FBQyxDQUFDO0lBQzdCRyxHQUFHLEVBQUUsQ0FBK0I7SUFDcENDLEtBQUssRUFBRSxHQUFHLENBQUNILHlEQUFhLENBQUMsQ0FBQ0k7UUFBQUEsYUFBYSxFQUFFLEtBQUs7SUFBQSxDQUFDO0FBQ25ELENBQUM7QUFFRCxpRUFBZUgsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2J0b29scy8uL2NsaWVudC50cz81YjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogXCJodHRwczovL2dyYXBoLmhvbGFwbGV4LmNvbS92MVwiLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtyZXN1bHRDYWNoaW5nOiBmYWxzZX0pXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsInVyaSIsImNhY2hlIiwicmVzdWx0Q2FjaGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client.ts\n");

/***/ }),

/***/ "./lib/ga/index.js":
/*!*************************!*\
  !*** ./lib/ga/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\n// log the pageview with their URL\nconst pageview = (url)=>{\n    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n        page_path: url\n    });\n};\n// log specific events happening.\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2EvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxFQUFrQztBQUMzQixLQUFLLENBQUNBLFFBQVEsSUFBSUMsR0FBRyxHQUFLLENBQUM7SUFDOUJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQVEsU0FBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLDRCQUE0QixFQUFFLENBQUM7UUFDL0RDLFNBQVMsRUFBRU4sR0FBRztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQWlDO0FBQzFCLEtBQUssQ0FBQ08sS0FBSyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDNUNSLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQU8sUUFBRU0sTUFBTSxFQUFFQyxNQUFNO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idG9vbHMvLi9saWIvZ2EvaW5kZXguanM/OWE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2cgdGhlIHBhZ2V2aWV3IHdpdGggdGhlaXIgVVJMXHJcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcclxuICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTLCB7XHJcbiAgICAgIHBhZ2VfcGF0aDogdXJsLFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXHJcbiAgZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xyXG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwYXJhbXMpXHJcbiAgfSJdLCJuYW1lcyI6WyJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/ga/index.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client */ \"./client.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/ga */ \"./lib/ga/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__]);\n([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n// import '../styles/tailwind.css'\n\n\n\n\n\n\n\n\n\n\n\n// Default styles that can be overridden by your app\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__.WalletAdapterNetwork.Mainnet;\n    // You can also provide a custom RPC endpoint.\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_9__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded.\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.TorusWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SolletWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_7__.SolletExtensionWalletAdapter({\n                network\n            }), \n        ]\n    , [\n        network\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_ga__WEBPACK_IMPORTED_MODULE_12__.pageview(url);\n        };\n        //When the component is mounted, subscribe to router changes\n        //and log those page views\n        router.events.on('routeChangeComplete', handleRouteChange);\n        // If the component is unmounted, unsubscribe\n        // from the event with the `off` method\n        return ()=>{\n            router.events.off('routeChangeComplete', handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _client__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.ConnectionProvider, {\n            endpoint: endpoint,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.WalletProvider, {\n                wallets: wallets,\n                autoConnect: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.WalletModalProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lcasalan\\\\OneDrive - Meralco\\\\Documents\\\\PAO\\\\btools\\\\pages\\\\_app.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lcasalan\\\\OneDrive - Meralco\\\\Documents\\\\PAO\\\\btools\\\\pages\\\\_app.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lcasalan\\\\OneDrive - Meralco\\\\Documents\\\\PAO\\\\btools\\\\pages\\\\_app.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lcasalan\\\\OneDrive - Meralco\\\\Documents\\\\PAO\\\\btools\\\\pages\\\\_app.tsx\",\n            lineNumber: 75,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lcasalan\\\\OneDrive - Meralco\\\\Documents\\\\PAO\\\\btools\\\\pages\\\\_app.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBR2pCO0FBQzlCLEVBQWtDO0FBQ1A7QUFFZTtBQUN1QztBQUNmO0FBUzNCO0FBR0M7QUFDTztBQUNqQjtBQUNHO0FBQ007QUFFUjtBQUUvQixFQUFvRDtBQUNwRG1CLG1CQUFPLENBQUMsNkdBQTRDO1NBRTNDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUVoRCxLQUFLLENBQUNDLE1BQU0sR0FBR04sdURBQVM7SUFDekIsRUFBb0U7SUFDcEUsS0FBSyxDQUFDTyxPQUFPLEdBQUduQixxRkFBNEI7SUFFNUMsRUFBOEM7SUFDOUMsS0FBSyxDQUFDcUIsUUFBUSxHQUFHeEIsOENBQU8sS0FBT1ksOERBQWEsQ0FBQ1UsT0FBTztNQUFHLENBQUNBO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBRWhFLEVBQXlHO0lBQ3pHLEVBQXdHO0lBQ3hHLEVBQXdEO0lBQ3hELEtBQUssQ0FBQ0csT0FBTyxHQUFHekIsOENBQU8sS0FDYixDQUFDO1lBQ0gsR0FBRyxDQUFDSyxnRkFBb0I7WUFDeEIsR0FBRyxDQUFDQyw4RUFBa0I7WUFDdEIsR0FBRyxDQUFDQyxpRkFBcUIsQ0FBQyxDQUFDO2dCQUFDZSxPQUFPO1lBQUMsQ0FBQztZQUNyQyxHQUFHLENBQUNaLDhFQUFrQjtZQUN0QixHQUFHLENBQUNOLCtFQUFtQjtZQUN2QixHQUFHLENBQUNLLCtFQUFtQixDQUFDLENBQUM7Z0JBQUNhLE9BQU87WUFBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQ2Qsd0ZBQTRCLENBQUMsQ0FBQztnQkFBQ2MsT0FBTztZQUFDLENBQUM7UUFDaEQsQ0FBQztNQUNELENBQUNBO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBR2JSLGdEQUFTLEtBQU8sQ0FBQztRQUNoQixLQUFLLENBQUNZLGlCQUFpQixJQUFJQyxHQUFXLEdBQUssQ0FBQztZQUMxQ1gsOENBQVcsQ0FBQ1csR0FBRztRQUNqQixDQUFDO1FBQ0QsRUFBNEQ7UUFDNUQsRUFBMEI7UUFDMUJOLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUVKLGlCQUFpQjtRQUV6RCxFQUE2QztRQUM3QyxFQUF1QztRQUN2QyxNQUFNLEtBQU8sQ0FBQztZQUNaTCxNQUFNLENBQUNRLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQXFCLHNCQUFFTCxpQkFBaUI7UUFDNUQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxNQUFNLENBQUNRLE1BQU07SUFBQSxDQUFDO0lBRWxCLE1BQU0sNkVBQ0gvQiwwREFBYztRQUFDZSxNQUFNLEVBQUVBLGdEQUFNOzhGQUM3QlosNEVBQWtCO1lBQUN1QixRQUFRLEVBQUVBLFFBQVE7a0dBQ2pDdEIsd0VBQWM7Z0JBQUN1QixPQUFPLEVBQUVBLE9BQU87Z0JBQUVPLFdBQVc7c0dBQ3hDckIsZ0ZBQW1COzBHQUNmUSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QyxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idG9vbHMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuLy8gaW1wb3J0ICcuLi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25Qcm92aWRlciwgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0J1xyXG5pbXBvcnQgeyBXYWxsZXRBZGFwdGVyTmV0d29yayB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZSc7XHJcbmltcG9ydCB7XHJcbiAgICBMZWRnZXJXYWxsZXRBZGFwdGVyLFxyXG4gICAgUGhhbnRvbVdhbGxldEFkYXB0ZXIsXHJcbiAgICBTbG9wZVdhbGxldEFkYXB0ZXIsXHJcbiAgICBTb2xmbGFyZVdhbGxldEFkYXB0ZXIsXHJcbiAgICBTb2xsZXRFeHRlbnNpb25XYWxsZXRBZGFwdGVyLFxyXG4gICAgU29sbGV0V2FsbGV0QWRhcHRlcixcclxuICAgIFRvcnVzV2FsbGV0QWRhcHRlcixcclxufSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnO1xyXG5pbXBvcnQge1xyXG4gICAgV2FsbGV0TW9kYWxQcm92aWRlclxyXG59IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xyXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCAqIGFzIGdhIGZyb20gJy4uL2xpYi9nYSdcclxuXHJcbi8vIERlZmF1bHQgc3R5bGVzIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgeW91ciBhcHBcclxucmVxdWlyZSgnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9zdHlsZXMuY3NzJyk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgLy8gVGhlIG5ldHdvcmsgY2FuIGJlIHNldCB0byAnZGV2bmV0JywgJ3Rlc3RuZXQnLCBvciAnbWFpbm5ldC1iZXRhJy5cclxuICAgY29uc3QgbmV0d29yayA9IFdhbGxldEFkYXB0ZXJOZXR3b3JrLk1haW5uZXQ7XHJcblxyXG4gICAvLyBZb3UgY2FuIGFsc28gcHJvdmlkZSBhIGN1c3RvbSBSUEMgZW5kcG9pbnQuXHJcbiAgIGNvbnN0IGVuZHBvaW50ID0gdXNlTWVtbygoKSA9PiBjbHVzdGVyQXBpVXJsKG5ldHdvcmspLCBbbmV0d29ya10pO1xyXG5cclxuICAgLy8gQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzIGluY2x1ZGVzIGFsbCB0aGUgYWRhcHRlcnMgYnV0IHN1cHBvcnRzIHRyZWUgc2hha2luZyBhbmQgbGF6eSBsb2FkaW5nIC0tXHJcbiAgIC8vIE9ubHkgdGhlIHdhbGxldHMgeW91IGNvbmZpZ3VyZSBoZXJlIHdpbGwgYmUgY29tcGlsZWQgaW50byB5b3VyIGFwcGxpY2F0aW9uLCBhbmQgb25seSB0aGUgZGVwZW5kZW5jaWVzXHJcbiAgIC8vIG9mIHdhbGxldHMgdGhhdCB5b3VyIHVzZXJzIGNvbm5lY3QgdG8gd2lsbCBiZSBsb2FkZWQuXHJcbiAgIGNvbnN0IHdhbGxldHMgPSB1c2VNZW1vKFxyXG4gICAgICAgKCkgPT4gW1xyXG4gICAgICAgICAgIG5ldyBQaGFudG9tV2FsbGV0QWRhcHRlcigpLFxyXG4gICAgICAgICAgIG5ldyBTbG9wZVdhbGxldEFkYXB0ZXIoKSxcclxuICAgICAgICAgICBuZXcgU29sZmxhcmVXYWxsZXRBZGFwdGVyKHsgbmV0d29yayB9KSxcclxuICAgICAgICAgICBuZXcgVG9ydXNXYWxsZXRBZGFwdGVyKCksXHJcbiAgICAgICAgICAgbmV3IExlZGdlcldhbGxldEFkYXB0ZXIoKSxcclxuICAgICAgICAgICBuZXcgU29sbGV0V2FsbGV0QWRhcHRlcih7IG5ldHdvcmsgfSksXHJcbiAgICAgICAgICAgbmV3IFNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxyXG4gICAgICAgXSxcclxuICAgICAgIFtuZXR3b3JrXVxyXG4gICApO1xyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGdhLnBhZ2V2aWV3KHVybClcclxuICAgIH1cclxuICAgIC8vV2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQsIHN1YnNjcmliZSB0byByb3V0ZXIgY2hhbmdlc1xyXG4gICAgLy9hbmQgbG9nIHRob3NlIHBhZ2Ugdmlld3NcclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuXHJcbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCwgdW5zdWJzY3JpYmVcclxuICAgIC8vIGZyb20gdGhlIGV2ZW50IHdpdGggdGhlIGBvZmZgIG1ldGhvZFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLmV2ZW50c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgPENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxyXG4gICAgICAgIDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfSBhdXRvQ29ubmVjdD5cclxuICAgICAgICAgICAgPFdhbGxldE1vZGFsUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cclxuICAgICAgICA8L1dhbGxldFByb3ZpZGVyPlxyXG4gICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsIkxlZGdlcldhbGxldEFkYXB0ZXIiLCJQaGFudG9tV2FsbGV0QWRhcHRlciIsIlNsb3BlV2FsbGV0QWRhcHRlciIsIlNvbGZsYXJlV2FsbGV0QWRhcHRlciIsIlNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIiLCJTb2xsZXRXYWxsZXRBZGFwdGVyIiwiVG9ydXNXYWxsZXRBZGFwdGVyIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsImNsdXN0ZXJBcGlVcmwiLCJjbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnYSIsInJlcXVpcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsIm5ldHdvcmsiLCJNYWlubmV0IiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwiYXV0b0Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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