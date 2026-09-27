/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/Slider.jsx"
/*!*********************************!*\
  !*** ./src/frontend/Slider.jsx ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx */ "./src/frontend/index.jsx");
/* harmony import */ var _utils_contrast_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/contrast_color */ "./src/frontend/utils/contrast_color.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Slider({
  slides
}) {
  const trackRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [current, setCurrent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
  const [scrolled, setScrolled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [menuOpen, setMenuOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDesktop, setIsDesktop] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(typeof window !== "undefined" ? window.innerWidth > 1024 : true);

  // Track which slide is in view
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const root = trackRef.current;
    if (!root) return;
    const items = root.querySelectorAll(".fss-slide");
    if (!items.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrent(parseInt(entry.target.dataset.index, 10));
        }
      });
    }, {
      root,
      threshold: 0.6
    });
    items.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const root = trackRef.current;
    if (!root) return;
    const onKey = e => {
      const items = root.querySelectorAll(".fss-slide");
      if (e.key === "ArrowDown" && current < items.length - 1) {
        items[current + 1].scrollIntoView({
          behavior: "smooth"
        });
      }
      if (e.key === "ArrowUp" && current > 0) {
        items[current - 1].scrollIntoView({
          behavior: "smooth"
        });
      }
    };
    root.addEventListener("keydown", onKey);
    return () => root.removeEventListener("keydown", onKey);
  }, [current]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setScrolled(current > 0);
  }, [current]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.classList.toggle("fss-menu-open", menuOpen);
    return () => document.body.classList.remove("fss-menu-open");
  }, [menuOpen]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const goTo = idx => {
    const items = trackRef.current?.querySelectorAll(".fss-slide");
    items?.[idx]?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const navItems = slides.map((slide, i) => ({
    label: slide.label,
    index: i
  })).filter(item => item.label && item.label.trim());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [navItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      className: "fss-menu-toggle",
      onClick: () => setMenuOpen(true),
      "aria-label": "Open menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {})]
    }), navItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
      className: `fss-nav${scrolled ? " is-scrolled" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: "#",
        className: "fss-nav__logo",
        onClick: e => {
          e.preventDefault();
          goTo(0);
        },
        children: slides[0]?.title || "Home"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
        className: "fss-nav__links",
        children: navItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: `#slide-${item.index}`,
            onClick: e => {
              e.preventDefault();
              goTo(item.index);
            },
            children: item.label
          })
        }, item.index))
      })]
    }), menuOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: "fss-menu-overlay",
      onClick: () => setMenuOpen(false),
      "aria-label": "Close menu"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
      className: `fss-menu-panel${menuOpen ? " is-open" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "fss-menu-panel__close",
        onClick: () => setMenuOpen(false),
        "aria-label": "Close menu",
        children: "\xD7"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
        className: "fss-menu-panel__links",
        children: navItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: `#slide-${item.index}`,
            className: current === item.index ? "is-active" : "",
            onClick: e => {
              e.preventDefault();
              goTo(item.index);
              setMenuOpen(false);
            },
            children: item.label
          })
        }, item.index))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "fss-slider",
      ref: trackRef,
      tabIndex: 0,
      children: slides.map((slide, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        id: `slide-${i}`,
        className: `fss-slide${i === current ? " is-active" : ""}`,
        "data-index": i,
        "data-position": slide.textPosition || "center",
        "data-text": slide.textAnimation || "fade-up",
        "data-image": slide.imageAnimation || "zoom",
        children: [slide.imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "fss-slide__bg",
          style: {
            backgroundImage: `url(${slide.imageUrl})`
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "fss-slide__content",
          children: [slide.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "fss-slide__title",
            children: slide.title
          }), slide.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "fss-slide__desc",
            children: slide.description
          }), slide.buttonEnabled && slide.buttonText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: slide.buttonUrl || "#",
            className: `oocakfs-slide__button${slide.buttonColor ? " oocakfs-slide__button--solid" : ""}`,
            style: slide.buttonColor ? {
              background: slide.buttonColor,
              color: (0,_utils_contrast_color__WEBPACK_IMPORTED_MODULE_2__.contrastColor)(slide.buttonColor),
              borderColor: slide.buttonColor
            } : undefined,
            children: slide.buttonText
          })]
        })]
      }, slide.id || i))
    }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
      className: "fss-slider__dots",
      children: slides.map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: `fss-slider__dot${i === current ? " is-active" : ""}`,
        onClick: () => goTo(i),
        "aria-label": `Go to slide ${i + 1}`
      }, i))
    })]
  });
}
document.querySelectorAll(".fss-root").forEach(root => {
  const id = root.id.replace("fss-root-", "");
  const dataEl = document.getElementById(`fss-data-${id}`);
  if (!dataEl) return;
  let data;
  try {
    data = JSON.parse(dataEl.textContent);
  } catch (e) {
    console.error("FSS: bad JSON", e);
    return;
  }
  ;(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(root).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Slider, {
    slides: data.slides || []
  }));
});

/***/ },

/***/ "./src/frontend/index.jsx"
/*!********************************!*\
  !*** ./src/frontend/index.jsx ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./src/frontend/Slider.jsx");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/base.css */ "./src/frontend/styles/base.css");
/* harmony import */ var _styles_content_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/content.css */ "./src/frontend/styles/content.css");
/* harmony import */ var _styles_positions_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/positions.css */ "./src/frontend/styles/positions.css");
/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/animations.css */ "./src/frontend/styles/animations.css");
/* harmony import */ var _styles_nav_desktop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/nav-desktop.css */ "./src/frontend/styles/nav-desktop.css");
/* harmony import */ var _styles_nav_mobile_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/nav-mobile.css */ "./src/frontend/styles/nav-mobile.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/responsive.css */ "./src/frontend/styles/responsive.css");
/* harmony import */ var _styles_accessibility_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/accessibility.css */ "./src/frontend/styles/accessibility.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











document.querySelectorAll(".oocakfs-root").forEach(root => {
  const id = root.id.replace("oocakfs-slider-", "");
  const dataEl = document.getElementById(`oocakfs-data-${id}`);
  if (!dataEl) return;
  let data;
  try {
    data = JSON.parse(dataEl.textContent);
  } catch (e) {
    console.error("OOCAKFS: bad JSON", e);
    return;
  }
  ;(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(root).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slides: data.slides || []
  }));
});

/***/ },

/***/ "./src/frontend/utils/contrast_color.js"
/*!**********************************************!*\
  !*** ./src/frontend/utils/contrast_color.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contrastColor: () => (/* binding */ contrastColor)
/* harmony export */ });
// Returns black or white depending on the background color's luminance.
function contrastColor(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#0a0a0a" : "#ffffff";
}

/***/ },

/***/ "./src/frontend/styles/accessibility.css"
/*!***********************************************!*\
  !*** ./src/frontend/styles/accessibility.css ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/animations.css"
/*!********************************************!*\
  !*** ./src/frontend/styles/animations.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/base.css"
/*!**************************************!*\
  !*** ./src/frontend/styles/base.css ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/content.css"
/*!*****************************************!*\
  !*** ./src/frontend/styles/content.css ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/nav-desktop.css"
/*!*********************************************!*\
  !*** ./src/frontend/styles/nav-desktop.css ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/nav-mobile.css"
/*!********************************************!*\
  !*** ./src/frontend/styles/nav-mobile.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/positions.css"
/*!*******************************************!*\
  !*** ./src/frontend/styles/positions.css ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/frontend/styles/responsive.css"
/*!********************************************!*\
  !*** ./src/frontend/styles/responsive.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __webpack_exports__ = __webpack_require__("./src/frontend/index.jsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=frontend.js.map