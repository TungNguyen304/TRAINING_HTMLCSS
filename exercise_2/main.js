const item2 = document.querySelector('.nav__item2')
        const list2 = document.querySelector('.nav__sub-item2')
        const item3 = document.querySelector('.nav__item3')
        const list3 = document.querySelector('.nav__sub-item3')
        const aTag = document.querySelectorAll('a')

        aTag.forEach((item) => {
            item.onclick = (e) => {
                e.preventDefault()
            }
        })

        item2.onclick = () => {
            if(list2.style.height === "0px") {
                list2.style.opacity = "1"
                list2.style.height = "71px"
                list2.style.marginBottom = "6px"
            } else {
                list2.style.opacity = "0"
                list2.style.height = "0px"
                list2.style.marginBottom = "0"
            }
        }

        item3.onclick = () => {
            if(list3.style.height === "0px") {
                list3.style.height = "71px"
                list3.style.marginBottom = "6px"
                list3.style.opacity = "1"
            } else {
                list3.style.height = "0px"
                list3.style.marginBottom = "0"
                list3.style.opacity = "0"
            }
        }