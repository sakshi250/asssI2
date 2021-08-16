let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/createcharacter.php';
let form=document.querySelector('.loginbtn');
form.addEventListener('click',(e)=>{
    e.preventDefault();
    let id=document.querySelector('#id');
    let character=document.querySelector('#character-name');
    let data={
        "id":id.value,
        "character-name":character-name.value
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            console.log('Character created')

        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send(params);
});
