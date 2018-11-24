function disPlayInfo(args){
  var output="";
  if(typeof args.name=="string"){
    output+="Name: "+args.name+"\n";
  }

  if(typeof args.age=="number"){
    output+="Age: "+args.age+"\n";
  }
  console.log(output)
}

disPlayInfo({
  name:"nn",
  age:20
});

disPlayInfo({
  age:34
})

console.log(disPlayInfo.toString());
console.log(disPlayInfo.toLocaleString());