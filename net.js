const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.content-item');

function selectItem(e){
    removeBorder();
    removeContent();
    //to add border

    this.classList.add('tab-border');
    // grab content from the dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
    console.log(tabItems)
}

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'));
}
function removeContent(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
}

tabItems.forEach(item=> item.addEventListener('click', selectItem));