"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  Input: () => Input,
  Toggle: () => Toggle
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, {
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "loading",
    "disabled",
    "children",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    __spreadProps(__spreadValues({
      className: `btn btn--${variant} btn--${size} ${loading ? "btn--loading" : ""} ${className}`,
      disabled: disabled || loading
    }, props), {
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn__spinner", "aria-hidden": "true" }),
        children
      ]
    })
  );
};

// src/components/Input/Input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = (_a) => {
  var _b = _a, {
    label,
    hint,
    error,
    id,
    className = ""
  } = _b, props = __objRest(_b, [
    "label",
    "hint",
    "error",
    "id",
    "className"
  ]);
  const inputId = id != null ? id : `input-${Math.random().toString(36).slice(2, 7)}`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "input-wrapper", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: inputId, className: "input-label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      __spreadValues({
        id: inputId,
        className: `input-field ${error ? "input-field--error" : ""} ${className}`,
        "aria-describedby": error ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0,
        "aria-invalid": !!error
      }, props)
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { id: `${inputId}-hint`, className: "input-hint", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { id: `${inputId}-error`, className: "input-error", role: "alert", children: error })
  ] });
};

// src/components/Badge/Badge.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Badge = ({
  variant = "default",
  children,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `badge badge--${variant} ${className}`, children });

// src/components/Alert/Alert.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var ICONS = {
  default: "\u2139",
  info: "\u2139",
  success: "\u2713",
  warning: "\u26A0",
  danger: "\u2715"
};
var Alert = ({
  variant = "info",
  title,
  onClose,
  children,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `alert alert--${variant} ${className}`, role: "alert", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "alert__icon", "aria-hidden": "true", children: ICONS[variant] }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "alert__body", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { className: "alert__title", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "alert__message", children })
  ] }),
  onClose && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "alert__close", onClick: onClose, "aria-label": "Close", children: "\u2715" })
] });

// src/components/Card/Card.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Card = ({
  title,
  footer,
  padding = "16px",
  children,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `card ${className}`, style: { padding }, children: [
  title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "card__title", children: title }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "card__body", children }),
  footer && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "card__footer", children: footer })
] });

// src/components/Toggle/Toggle.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Toggle = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = ""
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: `toggle ${disabled ? "toggle--disabled" : ""} ${className}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "span",
    {
      className: `toggle__track ${checked ? "toggle__track--on" : ""}`,
      role: "switch",
      "aria-checked": checked,
      "aria-disabled": disabled,
      tabIndex: disabled ? -1 : 0,
      onClick: () => !disabled && onChange(!checked),
      onKeyDown: (e) => {
        if ((e.key === " " || e.key === "Enter") && !disabled) onChange(!checked);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "toggle__knob" })
    }
  ),
  label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "toggle__label", children: label })
] });

// src/components/Avatar/Avatar.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var SIZE_MAP = { sm: 28, md: 36, lg: 44, xl: 56 };
var FONT_MAP = { sm: 11, md: 13, lg: 14, xl: 17 };
var COLOR_CLASSES = {
  info: "avatar--info",
  success: "avatar--success",
  warning: "avatar--warning",
  danger: "avatar--danger"
};
function getAutoColor(name) {
  const colors = ["info", "success", "warning", "danger"];
  const index = name.charCodeAt(0) % colors.length;
  return COLOR_CLASSES[colors[index]];
}
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}
var Avatar = ({
  name,
  src,
  size = "md",
  color = "auto",
  className = ""
}) => {
  const px = SIZE_MAP[size];
  const fs = FONT_MAP[size];
  const colorClass = color === "auto" ? getAutoColor(name) : COLOR_CLASSES[color];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: `avatar ${colorClass} ${className}`,
      style: { width: px, height: px, fontSize: fs },
      title: name,
      "aria-label": name,
      children: src ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "img",
        {
          src,
          alt: name,
          className: "avatar__img",
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }
      ) : getInitials(name)
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Input,
  Toggle
});
