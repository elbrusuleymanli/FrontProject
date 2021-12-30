let acc = document.querySelectorAll(".acc");
acc.forEach((func) => {
  func.addEventListener("click", (e) => {
  
    acc.forEach((item) => {
      if (item !== e.currentTarget) {
        item.classList.remove("active");
       
      }
    });

    func.classList.toggle("active");
    
  });
});


let acc2 = document.querySelectorAll(".acc2");
acc2.forEach((func2) => {
  func2.addEventListener("click", (e) => {
  
    acc2.forEach((item) => {
      if (item !== e.currentTarget) {
        item.classList.remove("active2");
       
      }
    });

    func2.classList.toggle("active2");
    
  });
});
