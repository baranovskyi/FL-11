module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "no-console": 0,
        "array-callback-return": "error",
        "curly": "error",
        "default-case": "error",
        "eqeqeq": ["error", "always"],
        "no-caller": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-lone-blocks": "error",
        "no-multi-spaces": "error",
        "no-new": "error",
        "no-return-assign": "error",
        "no-self-compare": "error",
        "no-useless-call": "error",
        "no-undef-init": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "max-len": ["error", { "code": 120, "ignoreComments": true }],
        "new-parens": "error",
        "no-nested-ternary": "error",
        "no-unneeded-ternary": "error",
    }
}