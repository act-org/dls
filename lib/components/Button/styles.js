"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/styles");
var colors_1 = __importDefault(require("../../constants/colors"));
var typography_1 = __importDefault(require("../../constants/typography"));
exports.default = styles_1.makeStyles({
    buttonLabel: {
        textTransform: 'none',
    },
    buttonOutlined: {
        border: "2px solid " + colors_1.default.PRIMARY,
        borderRadius: 20,
        color: colors_1.default.PRIMARY,
        fontSize: 14,
        fontWeight: typography_1.default.WEIGHT_MEDIUM,
    },
    buttonText: {
        '& .MuiButton-endIcon': { marginLeft: 'auto' },
        '& .MuiButton-startIcon': { color: colors_1.default.PRIMARY },
        color: colors_1.default.TEXT_PRIMARY,
        fontSize: 12,
        fontWeight: typography_1.default.WEIGHT_REGULAR,
        justifyContent: 'flex-start',
    },
});
//# sourceMappingURL=styles.js.map