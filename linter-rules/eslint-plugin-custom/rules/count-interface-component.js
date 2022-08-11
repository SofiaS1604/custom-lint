module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Test 4',
        },
        fixable: "code",
    },
    create: function (context) {
        return {
            Program(node) {
                const arrInterface = node.body.filter(el => 
                                    el.declaration?.type === 'TSInterfaceDeclaration');
            
                if (arrInterface.length > 1) { 
                    context.report({
                        node,
                        message: 'кол-во интерфейсов больше одного, перенесите в отдельный файл'
                    })
                }
            }
        }
    },
};
