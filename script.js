let titles = [];
let notes = [];

load();



function renderPosts() {

    let post = document.getElementById('postBox');
    post.innerHTML = '';
    
    for (i = 0; i < titles.length; i++) {
        post.innerHTML +=
            `
    <div class="note">
        <b>${titles[i]}</b> <br>
        ${notes[i]} <br>
        <button onclick="deletePost(${i})" class="deleteButton" >Delete</button>
    </div>
    `
    }
    
}


function addPost(){
    if (document.getElementById('inputTitle').value != "" && document.getElementById('inputNote').value != "") {
        titles.push(document.getElementById('inputTitle').value);
        notes.push(document.getElementById('inputNote').value);

        document.getElementById('inputTitle').value = '';
        document.getElementById('inputNote').value = '';

        renderPosts();
        save();
    }

}


function deletePost(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);
    renderPosts();
    save();
}


function save(){
    let titleAsText = JSON.stringify(titles);
    localStorage.setItem('titles', titleAsText);
    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notes', notesAsText);
}


function load(){
    let titleAsText = localStorage.getItem('titles');
    let noteAsText = localStorage.getItem('notes');
    
    if(titleAsText && noteAsText){
        titles = JSON.parse(titleAsText);
        notes = JSON.parse(noteAsText);
    }
}
