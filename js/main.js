(function(){
  var o=document.getElementById('first-visit-overlay');
  if(!o)return;
  if(sessionStorage.getItem('fv-skipped')){o.classList.add('hidden');return;}
  document.getElementById('fv-close-btn').addEventListener('click',function(){o.classList.add('hidden');});
  document.getElementById('fv-skip-btn').addEventListener('click',function(){sessionStorage.setItem('fv-skipped','1');o.classList.add('hidden');});
})();