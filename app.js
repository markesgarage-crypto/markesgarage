document.querySelectorAll(".ano").forEach(function(e){e.textContent=new Date().getFullYear()});
(function(){
  var k="mg-aviso";
  try{if(localStorage.getItem(k))return}catch(e){}
  var b=document.createElement("div");
  b.className="cookies";b.setAttribute("role","dialog");b.setAttribute("aria-label","Aviso de cookies");
  b.innerHTML='<p>Este site não usa cookies de publicidade nem de análise. Saiba mais na <a href="politica-privacidade.html">Política de Privacidade</a>.</p><button class="btn" type="button">Aceitar</button>';
  b.querySelector("button").onclick=function(){try{localStorage.setItem(k,"1")}catch(e){}b.remove()};
  document.body.appendChild(b);
})();
