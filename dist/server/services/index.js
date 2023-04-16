"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_service_1 = __importDefault(require("./form-service"));
// import submissionService from "./submission-service";
// import handlerService from "./handler-service";
// import emailService from "./email-service";
exports.default = {
    formService: form_service_1.default,
    // submissionService,
    // handlerService,
    // emailService,
};
