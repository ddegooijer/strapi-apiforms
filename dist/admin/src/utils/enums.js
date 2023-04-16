"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailDataMessageEnum = exports.HandlerTypeEnum = exports.FieldActionsEnum = exports.FieldDirectionEnum = exports.FieldTypeEnum = void 0;
var FieldTypeEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum["Text"] = "text";
    FieldTypeEnum["Checkbox"] = "checkbox";
    FieldTypeEnum["Radio"] = "radio";
    FieldTypeEnum["Textarea"] = "textarea";
    FieldTypeEnum["Email"] = "email";
    FieldTypeEnum["Number"] = "number";
    FieldTypeEnum["Select"] = "select";
})(FieldTypeEnum = exports.FieldTypeEnum || (exports.FieldTypeEnum = {}));
var FieldDirectionEnum;
(function (FieldDirectionEnum) {
    FieldDirectionEnum["Up"] = "up";
    FieldDirectionEnum["Down"] = "down";
})(FieldDirectionEnum = exports.FieldDirectionEnum || (exports.FieldDirectionEnum = {}));
var FieldActionsEnum;
(function (FieldActionsEnum) {
    FieldActionsEnum["Add"] = "add";
    FieldActionsEnum["Edit"] = "edit";
})(FieldActionsEnum = exports.FieldActionsEnum || (exports.FieldActionsEnum = {}));
var HandlerTypeEnum;
(function (HandlerTypeEnum) {
    HandlerTypeEnum["Email"] = "email";
    HandlerTypeEnum["Action"] = "action";
    HandlerTypeEnum["Remote"] = "remote";
})(HandlerTypeEnum = exports.HandlerTypeEnum || (exports.HandlerTypeEnum = {}));
var EmailDataMessageEnum;
(function (EmailDataMessageEnum) {
    EmailDataMessageEnum["Default"] = "default";
    EmailDataMessageEnum["Custom"] = "custom";
})(EmailDataMessageEnum = exports.EmailDataMessageEnum || (exports.EmailDataMessageEnum = {}));
