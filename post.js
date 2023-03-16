let blogs = [{author:"AuthorMan", text:"Hello guys", date:"15.03.2023"}]

async function addPost(newBook){


    return new Promise((resolve, reject) => {

        if(!newBook.author || !newBook.text || !newBook.date){
            reject("Eksik bilgi giriniz!")
        }else{
            blogs.push(newBook)
            resolve(blogs)
        }
    })
}

function listPosts() {
    blogs.map(element => {
        console.log("Name: "+ element.author + "\nPosted on: " + element.date + "\nPost: " + element.text+"\n\n")
    })
}

async function showPosts(){
    listPosts()
    console.log("-----------------------------------------------------------------------")
    try {
        await addPost({author:"WriterGuy",text:"Today we are going to write down something",date:"16.03.2023"})
        listPosts()
    } catch (error) {
        console.log(error)
    }
}

showPosts()


