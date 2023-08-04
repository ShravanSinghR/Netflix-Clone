const tabitem = document.querySelectorAll('.tab-item');
const tabcontentitem = document.querySelectorAll('.tab-content-item');





// tab select
function select(e) {
    removeborder();
    removedisplay();
    //border to current tab
    this.classList.add('tab-border');
    //show contents
    const tabcontent = document.querySelector(`#${this.id}-content`);
   //add
   tabcontent.classList.add('display')
}

function removeborder() {
    tabitem.forEach(item => item.classList.remove('tab-border'));
}


function removedisplay() {
    tabcontentitem.forEach(item => item.classList.remove('display'));
}


// tab clcik
tabitem.forEach(item => item.addEventListener('click', select))
