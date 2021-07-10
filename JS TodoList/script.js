function addTask(){
    task = document.getElementById('task').value;
    link = document.getElementById('link').value;
    tags = document.getElementById('topic').value;
    plat = document.getElementById('platform').value;
    
    if(localStorage.getItem('taskList')==null){
        todoList =[{
            'name' : task,
            'link' : link,
            'tags' : tags,
            'platform' : plat
        }];
        localStorage.setItem('taskList',JSON.stringify(todoList));
        console.log(todoList);
    }

    else{
        temp ={
            'name' : task,
            'link' : link,
            'tags' : tags,
            'platform' : plat
        };
        let ls = JSON.parse(localStorage.getItem('taskList'));
        console.log(ls);
        ls.push(temp);
        localStorage.setItem('taskList',JSON.stringify(ls));
        
    }

    document.getElementById('task').value="";
    document.getElementById('link').value="";
    document.getElementById('topic').value="";
    document.getElementById('platform').value="";
    disp();
}

function disp(){
    let tbdy = document.getElementById('tableBody');
    if(localStorage.getItem('taskList')==null){
        tbdy.innerHTML = `<tr><td colspan=5><div style = "text-align:center; font-size:20px; background-color:rgb(253, 101, 0); padding:10px;">Nothing to display here <br> Add something down..</div><td></tr>`
    }
    else{
        ls = JSON.parse(localStorage.getItem('taskList'));
        str = ``;
        i=1;
        ls.forEach(element => {
            str+=`
            <tr>
            <td>${i}</td>
            <td><a href="${element['link']}">${element['name']}</a></td>
            <td>${element['platform']}</td>
            <td>${element['tags']}</td>
            <td><button onclick="del(${i})">Done</button></td>
            </tr>`;
            i++;
        });
        tbdy.innerHTML = str;
    }
}

function del(i){
    ls = JSON.parse(localStorage.getItem('taskList'));
    ls.splice(i-1,1);
    localStorage.setItem('taskList',JSON.stringify(ls));
    disp();
    console.log(i);
}

function reset(){
    localStorage.clear();
}

function refresh(){
    disp();
}

window.onload = function() {
    disp();
  };