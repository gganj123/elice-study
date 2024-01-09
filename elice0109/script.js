const addForm = document.querySelector('.add');
const list = document.querySelector('.memos');
const alertmsg = document.getElementById('alertmsg');
const search = document.querySelector('.search input')


const saveMemo = memotext => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
  </li>`

  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
</li>`
}

addForm.addEventListener('submit',e => {
    e.preventDefault();
    const memo = addForm.add.value;
    console.log(memo);
    // saveMemo(memo);

    if (memo.length) {
        saveMemo(memo);
        alertmsg.classList.add('hidden');
        addForm.add.value = '';
    }
    else{
        console.log('메모없음');
        alertmsg.classList.remove('hidden');
    }
})

list.addEventListener('click',e => {
    //e.target.classList.contains('delete')
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterMemo = memo =>{
    Array.from(list.children)
    .filter((memotext)=> !memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.add('hidden')); 

    Array.from(list.children)
    .filter((memotext)=> memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.remove('hidden')); 


}

search.addEventListener('keyup',e=> {
    const searchText = search.value;
    console.log(searchText);
    filterMemo(searchText);
})