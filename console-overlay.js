(function(){
  const container=document.createElement('div');
  container.id='console-overlay';
  Object.assign(container.style,{
    position:'fixed',
    top:'0',
    left:'0',
    width:'100%',
    pointerEvents:'none',
    fontFamily:'monospace',
    fontSize:'12px',
    padding:'4px',
    zIndex:'10000'
  });
  document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(container));
  function addMessage(msg,color){
    const div=document.createElement('div');
    div.textContent=msg;
    div.style.color=color;
    container.appendChild(div);
    setTimeout(()=>{div.style.transition='opacity 1s';div.style.opacity='0';setTimeout(()=>div.remove(),1000);},5000);
  }
  const origLog=console.log;
  const origError=console.error;
  console.log=function(...args){addMessage(args.join(' '),'#0f0');origLog.apply(console,args);};
  console.error=function(...args){addMessage(args.join(' '),'#f00');origError.apply(console,args);};
})();
