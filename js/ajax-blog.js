fetch("data/blog.json").then(resp => resp.json()).then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {

    //     VARS
        let h5 = document.createElement("h5");
        let h6 = document.createElement("h6");
        let p = document.createElement("p");
        let divCard = document.createElement("div")
        let divBody = document.createElement("div")
        h5.classList.add("card-title");
        h6.classList.add("card-subtitle","mb-2","text-body-secondary");
        p.classList.add("card-text");
        divBody.classList.add("card-body");
        divCard.classList.add("card");
        let post = document.querySelector("#posts");

    //     content
        h5.innerText = data[i].title;
        h6.innerText = data[i].date;
        p.innerText = data[i].content
        divBody.appendChild(h5);
        divBody.appendChild(h6);
        divBody.appendChild(p);
        divCard.appendChild(divBody);
        post.appendChild(divCard);
    // add content to page



    }
})