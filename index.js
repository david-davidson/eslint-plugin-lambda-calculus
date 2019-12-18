module.exports = {
    rules: {
        "no-booleans": {
            create: function(context) {
                return {
                    Literal(node) {
                        if (typeof node.value === `boolean`) {
                            context.report(node, 'This is a boolean! What are you doing?? Please use Church booleans.');
                        }
                    }
                };
            }
        },
        "no-numbers": {
            create: function(context) {
                return {
                    Literal(node) {
                        if (typeof node.value === `number`) {
                            context.report(node, 'This is a number! What are you doing?? Please use Church numerals.');
                        }
                    }
                };
            }
        }
    }
};
