(() => {
    const promise = fetch("https://api.github.com/users/GBowman1/events/public", {headers: {'authorization': GH_KEY}}).then(response => response.json())
    console.log(promise)
    // let lastPush = promise
    // console.log(lastPush)
    let form = document.querySelector("#gh-form");
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        let search = document.querySelector("#search").value;

        fetch("https://api.github.com/users/" + search + "/events/public")
            .then((result) => result.json())
            .then((data) => {

                for (let i = 0; i < data.length; i++)
                    if (data[i].type === "PushEvent") {
                        console.log(data[i].type);
                        console.log(data[i].created_at)

                        let p = document.createElement("p");
                        let h4 = document.createElement("h4");
                        p.innerText = data[i].created_at;
                        h4.innerText = data[i].type;
                        let div = document.createElement("div");
                        div.appendChild(h4);
                        div.appendChild(p);

                        let main = document.querySelector(".main-section");
                        main.appendChild(div);
                    } else if (data[0].type === "PushEvent") {
                        let p1 = document.createElement("p");
                        p1.innerText = data[0].created_at;
                        let divRecent = document.querySelector("#recent-push");
                        divRecent.appendChild(p1);
                    }
                // console.log(data.type);
            })
    })
})();