const $ = (node) => {return document.querySelector(node)}

    fetch("https://randomuser.me/api/")
        .then(response => {
            if (!response.ok) {
                throw new Error("Bad network response", response.statusText)
            }
            return response.json()
        })
        .then(data => {
            const user = data.results[0]
            $("#user-image").src = user.picture.large
            $(".tel").innerText = user.cell
            $(".name").innerText = `${user.name.last} ${user.name.first}`
            $(".pseudo").innerText = `@${user.name.first}`
            $(".email").innerText = `${user.email}`
            $(".country").innerText = `${user.location.country}`
            $(".city").innerText = `${user.location.city}`
            $(".street").innerText = `${user.location.street.number} ${user.location.street.name}`
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
let feed = $(".feeds")
function collectPostUserData () {
    fetch("https://randomuser.me/api/?results=50")
        .then(response => {
            if (!response.ok) {
                throw new Error("Bad network response", response.statusText)
            }
            return response.json()
        })
        .then(data => {
            for (let i = 0; i <= 50; i++) {
                
            let user = data.results[i]
                 let child = `
                <article class="post">
            <picture class="poster">
              <img id="poster-image" src="${user.picture.medium}" alt="">
            </picture>
            <div class="content">
              <div class="head">
                <div class="poster-info">
                  <div class="poster-name">${user.name.last} ${user.name.first}</div>
                  <div class="poster-pseudo">@${user.name.first}</div>
                </div> 
                <div class="posted-date">${user.registered.date}</div>
              </div>
              <p class="post-article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum dolor nostrum?
              </p>
              <div class="action">
                <i class="like">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </i>
                <i class="rt">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>                  
                </i>
                <i class="comment">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                  </svg>                  
                </i>
                <i class="save">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>                  
                </i>
              </div>
            </div>
          </article>
            ` 
            
            feed.innerHTML += child
            }
            
        })
        .catch(error => {
            console.error(error)
        })
}

window.onload = collectPostUserData