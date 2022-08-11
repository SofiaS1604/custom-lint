module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Rule no-console',
        },
        fixable: "code",
   },
create: context => {
    return {
        CallExpression(node) {
            const isConsole = node.callee.object.name === 'console';

            if (isConsole) {
                context.report({
                    node,
                    message: 'запрещено использование console',
                    fix: function (fixer) {
                        const consoleParent = node.parent.range;

                        return [
                            fixer.replaceTextRange(consoleParent, '')
                        ];
                    },
                });
            }
        },
    };
}
}