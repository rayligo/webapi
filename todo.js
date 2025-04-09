"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const items = [];
let input;
do {
    input = String(readline.question('enter command: ')).trim();
    if (input.indexOf('add ') === 0) {
        const space = input.indexOf(' ');
        const item = input.substring(space).trim();
        //answer
        if (items.indexOf(item) < 0) {
            console.log(`adding "${item}"`);
            items.unshift(item);
        }
        else {
            console.log(`the item is existed~`);
        }
    }
    if (input.indexOf('list') === 0) {
        for (let i = 0; i < items.length; i++) {
            console.log(`${i}. ${items[i]}`);
        }
    }
    if (input.indexOf('remove ') === 0) {
        const space = input.indexOf(' ');
        const item = input.substring(space).trim();
        if (items.indexOf(item) < 0) {
            console.log(`"${item}" not in the list `);
        }
        else {
            items.splice(items.indexOf(item), 1);
            console.log(`"${item}" removed `);
        }
    }
} while (input !== 'exit');
