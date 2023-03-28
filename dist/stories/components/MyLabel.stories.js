"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColorFont = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    // este define el nombre de la historia
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: {
            control: "select",
        },
        customColor: {
            control: "color",
        },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args))); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: "Hola Basic",
    size: "h3",
    allCaps: false,
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "Hola AllCaps",
    size: "h3",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Hola Secondary",
    size: "h3",
    allCaps: false,
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "Hola Tertiary",
    size: "h3",
    allCaps: false,
    color: "tertiary",
};
exports.CustomColorFont = Template.bind({});
exports.CustomColorFont.args = {
    label: "Hola CustomColorFont",
    size: "h1",
    allCaps: false,
    customColor: "#07b609",
};
