let inpt = document.querySelector("input");
     inpt.focus();
     let arr = []; let status = true;
     let tmp;
     inpt.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            arr.forEach(el => { if(el.innerText == inpt.value){ status=false; tmp = el;} });
            if(inpt.value!="" && status)
            {
                let elm = document.createElement('span');
                elm.classList.add('tag-span');
                elm.innerText = inpt.value;
                elm.innerHTML += `<i class='bx bx-x icon' onclick="removeEl(${arr.length})"></i>`;
                inpt.parentNode.insertBefore(elm, inpt);
                arr.push(elm); inpt.value="";
            }
            else if(!status)
            {
                arr.slice(arr.indexOf(tmp),1);
                tmp.remove();
                inpt.parentNode.insertBefore(tmp, inpt); inpt.value="";
                arr.push(tmp);
            }
        }
    });

function removeEl(index)
{
    arr[index].remove();
    arr.slice(index,1);
}