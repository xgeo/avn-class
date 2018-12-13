function App() {
    const self = this;
    this._fs = require('fs');
    this._path = "C:\\Users\\juliana.a.da.silva\\Documents\\Xablau\\";

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

    function readFile(filename) {
        return new Promise((resolve, reject) => {

            self._fs.readFile(`${self._path + filename}`, "utf8", (error, data) => {
                if (error) return reject(new Error(error));

                resolve( JSON.parse(data));
            })
        })
    }

    return {
        writeFile, readFile
    };
}

module.exports = App;