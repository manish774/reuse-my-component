var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// src/components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: `btn btn--${variant} btn--${size} ${loading ? "btn--loading" : ""} ${className}`,
      disabled: disabled || loading
    }, props), {
      children: [
        loading && /* @__PURE__ */ jsx("span", { className: "btn__spinner", "aria-hidden": "true" }),
        children
      ]
    })
  );
};

// src/components/Input/Input.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2("div", { className: "input-wrapper", children: [
    label && /* @__PURE__ */ jsx2("label", { htmlFor: inputId, className: "input-label", children: label }),
    /* @__PURE__ */ jsx2(
      "input",
      __spreadValues({
        id: inputId,
        className: `input-field ${error ? "input-field--error" : ""} ${className}`,
        "aria-describedby": error ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0,
        "aria-invalid": !!error
      }, props)
    ),
    hint && !error && /* @__PURE__ */ jsx2("span", { id: `${inputId}-hint`, className: "input-hint", children: hint }),
    error && /* @__PURE__ */ jsx2("span", { id: `${inputId}-error`, className: "input-error", role: "alert", children: error })
  ] });
};

// src/components/Badge/Badge.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Badge = ({
  variant = "default",
  children,
  className = ""
}) => /* @__PURE__ */ jsx3("span", { className: `badge badge--${variant} ${className}`, children });

// src/components/Alert/Alert.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
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
}) => /* @__PURE__ */ jsxs3("div", { className: `alert alert--${variant} ${className}`, role: "alert", children: [
  /* @__PURE__ */ jsx4("span", { className: "alert__icon", "aria-hidden": "true", children: ICONS[variant] }),
  /* @__PURE__ */ jsxs3("div", { className: "alert__body", children: [
    title && /* @__PURE__ */ jsx4("strong", { className: "alert__title", children: title }),
    /* @__PURE__ */ jsx4("span", { className: "alert__message", children })
  ] }),
  onClose && /* @__PURE__ */ jsx4("button", { className: "alert__close", onClick: onClose, "aria-label": "Close", children: "\u2715" })
] });

// src/components/Card/Card.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Card = ({
  title,
  footer,
  padding = "16px",
  children,
  className = ""
}) => /* @__PURE__ */ jsxs4("div", { className: `card ${className}`, style: { padding }, children: [
  title && /* @__PURE__ */ jsx5("div", { className: "card__title", children: title }),
  /* @__PURE__ */ jsx5("div", { className: "card__body", children }),
  footer && /* @__PURE__ */ jsx5("div", { className: "card__footer", children: footer })
] });

// src/components/Toggle/Toggle.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Toggle = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = ""
}) => /* @__PURE__ */ jsxs5("label", { className: `toggle ${disabled ? "toggle--disabled" : ""} ${className}`, children: [
  /* @__PURE__ */ jsx6(
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
      children: /* @__PURE__ */ jsx6("span", { className: "toggle__knob" })
    }
  ),
  label && /* @__PURE__ */ jsx6("span", { className: "toggle__label", children: label })
] });

// src/components/Avatar/Avatar.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx7(
    "div",
    {
      className: `avatar ${colorClass} ${className}`,
      style: { width: px, height: px, fontSize: fs },
      title: name,
      "aria-label": name,
      children: src ? /* @__PURE__ */ jsx7(
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
export {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Input,
  Toggle
};
