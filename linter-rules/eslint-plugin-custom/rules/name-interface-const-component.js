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
                    const interface = node.body.find(el => 
                                                el.declaration?.type === 'TSInterfaceDeclaration');

                    const paramsComponent = (el) => el.declarations[0].init?.params;
                    const isComponentProps = (el) => paramsComponent(el).filter(param => param.name === 'props');

                    const component = node.body.find(el => 
                                                el.type === 'VariableDeclaration' && isComponentProps(el));

                    if(interface && component){
                        const nameComponent = component.declarations[0].id.name;
                        const infoNameInterface = interface.declaration.id;
                        
                        const typeName = paramsComponent(component)[0].typeAnnotation.typeAnnotation.typeName
                        
                        if(infoNameInterface.name !== `${nameComponent}Props`){
                            context.report({
                                node,
                                message: 'неправильно название интерфейса, не соответствует названию компонента',
                                fix: function (fixer) {
                                    return [
                                        fixer.replaceTextRange(typeName.range, `${nameComponent}Props`),
                                        fixer.replaceTextRange(infoNameInterface.range, `${nameComponent}Props`)
                                    ];
                                }
                            });    
                        }
                    }
                }
        }
    },
};
