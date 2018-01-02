console.log(process.argv);

function hasParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(hasParam('--producao')) {
    console.log('Atenção total!')
} else {
    console.log('Ambiente de homologação');
}