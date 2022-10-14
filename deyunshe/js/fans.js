(function () {
  let str = "";
  for (let i = 1; i <= 13; i++) {
    str += `<button class="page ${i == 1 ? "active" : ""}">${i}</button>`;
  }
  const btn = document.querySelector(".button");
  btn.innerHTML = `<button>上一页</button>
  ${str}
  <button>下一页</button>`;
  btn.onclick = function (e) {
    if(e.target.localName !='button') return
    const ac = document.querySelector('.button>button.active')
    console.dir(ac)
    ac.classList.remove('active')
    console.log(e.target);
    console.log(btn.innerText)
    console.log( parseInt(btn.innerText) )
      if(parseInt(btn.inenerText) >0){
      e.target.classList.add("active");

      }
      e.target.classList.add("active");
    console.log(e);

  };
})();
