(function(){
  const overlay = document.createElement('div');
  overlay.id = 'console-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    maxHeight: '40%',
    overflowY: 'auto',
    background: 'rgba(0,0,0,0.7)',
    color: '#0f0',
    fontFamily: 'monospace',
    fontSize: '12px',
    padding: '4px',
    boxSizing: 'border-box',
    zIndex: 10000
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(overlay);
  });

  function addMessage(type, args){
    const msg = document.createElement('div');
    msg.textContent = `[${type}] ` + args.map(a => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' ');
    overlay.appendChild(msg);
    overlay.scrollTop = overlay.scrollHeight;
  }

  ['log','warn','error'].forEach(fn => {
    const original = console[fn];
    console[fn] = function(...args){
      original.apply(console, args);
      addMessage(fn.toUpperCase(), args);
    };
  });
})();
