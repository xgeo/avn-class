const App = require('./app');
const xablau = new App();


(async () => {
    try {
        await xablau.writeFile('teste.txt', { dale: 'teste' });
        debugger;
    } catch (error) {
        console.log(error);
    }
})();

// xablau.writeFile().then().catch();