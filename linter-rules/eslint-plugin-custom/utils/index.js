const fs = require('fs');
const path = require('path');

/**
 * Получает имена файлов без расширений по заданному пути
 * @param dir Путь
 * @returns {string[]}
 */
const getDirFiles = dir => {
    const ignoringFiles = ['.', '..', 'index.js'];
    const files = fs.readdirSync(dir).filter(file => !ignoringFiles.includes(file));

    return files.map(file => path.basename(file, path.extname(file)));
};

module.exports = {
    getDirFiles,
};
