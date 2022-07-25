//전체 선택
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ //필터링
    if(selectedItem.target.classList.contains("item")){ // nav item 클릭했을 때
      filterItem.querySelector(".active").classList.remove("active"); // remove
      selectedItem.target.classList.add("active"); //add
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); // value별 불러오기

        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        }else{
          image.classList.add("hide");
          image.classList.remove("show"); 
        }
      });
    }
  }
}


