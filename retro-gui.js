(function(){
  function initRetroGUI(){
    const toggle=document.createElement('div');
    toggle.id='retro-gui-toggle';
    toggle.textContent='MENU';
    const panel=document.createElement('div');
    panel.id='retro-gui-panel';
    const list=document.createElement('ul');
    panel.appendChild(list);
    document.body.appendChild(panel);
    document.body.appendChild(toggle);
    toggle.addEventListener('click',()=>{panel.classList.toggle('open');});
    fetch('demos.json')
      .then(r=>r.json())
      .then(d=>{
        d.files.forEach(file=>{
          const li=document.createElement('li');
          const a=document.createElement('a');
          a.href=file;
          a.textContent=file;
          li.appendChild(a);
          list.appendChild(li);
        });
      })
      .catch(()=>{
        const li=document.createElement('li');
        li.textContent='No demos found';
        list.appendChild(li);
      });
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initRetroGUI);
  }else{
    initRetroGUI();
  }
})();
