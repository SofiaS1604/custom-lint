module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Test 3',
        },
        fixable: "code",
    },
    create: function (context) {
        return {
            TSInterfaceBody(node) {
                const interfaceFields = node.body.map(el => el.key.name)
                const sortedInterfaceFields = node.body.map(el => el.key.name).sort();

            
                if(sortedInterfaceFields.toString() !== interfaceFields.toString()){
                    context.report({
                        node,
                        message: 'custom rule sort-interface',
                        fix: function(fixer) {
                            const text = sortedInterfaceFields.map(field => 
                                context.getSourceCode().lines.find(el => el.indexOf(field) > -1)
                            ).join('\n');

                            return fixer.replaceTextRange(node.range, `{\n${text}\n}`);
                        }
                    });
                }
            },
        }
    },
};
