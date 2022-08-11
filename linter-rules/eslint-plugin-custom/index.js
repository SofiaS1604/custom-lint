const { getDirFiles } = require('./utils');

const rules = getDirFiles(`${__dirname}/rules/`);

module.exports = {
    rules: rules.reduce(
        (acc, ruleName) => ({
            ...acc,
            [ruleName]: require(`./rules/${ruleName}`),
        }),
        {}
    ),
};
