process.stdout.write('Está gostando do curso ? ');
process.stdin.on('datas', function(data){
    process.stdout.write(`Sua reposta foi: ${data.toString()}Obrigado`);
    process.exit();
})