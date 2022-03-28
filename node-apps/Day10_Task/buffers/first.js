var buff = new Buffer(26);

for(var i=0; i<26;i++){
    buff[i]=i+97;
}

console.log(buff.toString('ascii'))
console.log(buff.toString('ascii',0,10))