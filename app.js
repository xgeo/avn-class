function App() {
    const self = this;
    this._fs = require('fs');
    this._path = "C:\\Users\\g.lino.coutinho\\Desktop\\window-hello\\";

    function writeFile(filename, body) {
        return new Promise((resolve, reject) => {
            self._fs.writeFile(`${self._path + filename}`,
                JSON.stringify(body),
                'utf8',
                error => {
                    if (error) return reject(new Error(error));

                    resolve();
                });
        });
    }

    return {
        writeFile
    };
}

module.exports = App;