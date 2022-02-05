const navBasketBtnClick = document.querySelector('.nav-btn');
const btnMinClick = document.querySelector('.btn-min');
const numberShoes = document.querySelector('.number-shoes');
const btnPlusClick = document.querySelector('.btn-max');
const navCardBox = document.querySelector('.nav-card-container');

const productPrice = document.querySelector('.product-price');
const numberProduct = document.querySelector('.number-product');
const productTotal = document.querySelector('.product-total');
const btnAddToCardClick = document.querySelector('.btn-right');
const cardDeleteBtn = document.querySelector('.nav-card-delete-btn')
const basketIcon = document.querySelector('.nav-basket-num')
const profilePhoto = document.querySelector('.profile-photo')
const navCardContent = document.querySelector('.nav-card-content') /* display none*/
const blankCard = document.querySelector('.blank-card') /* display block */

const imgLargeClick = document.querySelectorAll('.img-up');
const imgSmallClick = document.querySelectorAll('.img-down');

const clickLargeImgBackground = document.querySelector('.click-img-container')
const clickLargeImgAll = document.querySelector('.click-img-content-all')
const clickLargeImgClose = document.querySelector('.fa-window-close')

const clickImgUp = document.querySelectorAll('.click-img-up')
const clickImgDown = document.querySelectorAll('.click-img-down')

const clickImgPrevBtn = document.querySelector('.click-prev')
const clickImgNextBtn = document.querySelector('.click-next')

const mediaBtnPrev = document.querySelector('.media-icon-previous')
const mediaBtnNext = document.querySelector('.media-icon-next')
const mediaMenu = document.querySelector('.media-nav-menu-icon')
const sideBar = document.querySelector('.sidebar-container')
const sideBarClose = document.querySelector('.slidebar-close')

let index = 0;
let follow = 0;
let clickImgIndex = 1;
let mediaIndex = 1;

function isSmallScreen() {
    return window.matchMedia("('max-width: 767px')").matches
}

numberShoes.textContent = 1;

navBasketBtnClick.addEventListener('click', () => {
    follow++
    navCardBox.style.display = 'block';
})

document.body.addEventListener('click', () => {
    follow++
    if (follow > 2 && navCardBox.style.display === 'block') {
        navCardBox.style.display = 'none'
        follow = 0
    }
})

navCardBox.addEventListener('click', (e) => {
    e.stopPropagation()
})

btnMinClick.addEventListener('click', () => {
    index = numberShoes.textContent--
    if (parseInt(numberShoes.textContent) === 0) {
        numberShoes.textContent = 1
    }
})

btnPlusClick.addEventListener('click', () => {
    index = numberShoes.textContent++
})

btnAddToCardClick.addEventListener('click', () => {
    basketIcon.textContent = numberShoes.textContent
    numberProduct.textContent = numberShoes.textContent
    let allTotal = productPrice.textContent * numberProduct.textContent;
    productTotal.textContent = `$${allTotal}.00`
    basketIcon.style.display = 'block';
    blankCard.style.display = 'none'
    navCardContent.style.display = 'block'
    profilePhoto.style.border = '2px solid #ef6300'

    cardDeleteBtn.addEventListener('click', () => {
        blankCard.style.display = 'block'
        navCardContent.style.display = 'none'
        setTimeout(() => {
            basketIcon.style.display = 'none';
            profilePhoto.style.border = 'none'
        }, 1000)
    })
})


imgSmallClick[0].addEventListener('click', () => {
    imgLargeClick[0].style.display = 'block'
    imgLargeClick[1].style.display = 'none'
    imgLargeClick[2].style.display = 'none'
    imgLargeClick[3].style.display = 'none'
})
imgSmallClick[1].addEventListener('click', () => {
    imgLargeClick[0].style.display = 'none'
    imgLargeClick[1].style.display = 'block'
    imgLargeClick[2].style.display = 'none'
    imgLargeClick[3].style.display = 'none'
})
imgSmallClick[2].addEventListener('click', () => {
    imgLargeClick[0].style.display = 'none'
    imgLargeClick[1].style.display = 'none'
    imgLargeClick[2].style.display = 'block'
    imgLargeClick[3].style.display = 'none'
})
imgSmallClick[3].addEventListener('click', () => {
    imgLargeClick[0].style.display = 'none'
    imgLargeClick[1].style.display = 'none'
    imgLargeClick[2].style.display = 'none'
    imgLargeClick[3].style.display = 'block'
})


/* buraya bir anlık dinleyici (addListener)kaldırılmış onun yerine geçeçek bir fonksiyon bul*/
/* ******************************************************** */
if (window.matchMedia("(min-width: 700px)").matches) {
    imgLargeClick.forEach(imgLarge => {
        imgLarge.addEventListener('click', () => {
            clickLargeImgBackground.style.display = 'block'
            clickLargeImgAll.style.display = 'flex'
        })
    });
} else {
    imgLargeClick.forEach(imgLarge => {
        imgLarge.addEventListener('click', () => {
            clickLargeImgBackground.style.display = 'none'
            clickLargeImgAll.style.display = 'none'
        })
    });
}

/* ******************************************************** */
clickLargeImgClose.addEventListener('click', () => {
    clickLargeImgAll.style.display = 'none'
    clickLargeImgBackground.style.display = 'none'
})



clickImgDown[0].addEventListener('click', () => {
    clickImgUp[0].style.display = 'block'
    clickImgUp[1].style.display = 'none'
    clickImgUp[2].style.display = 'none'
    clickImgUp[3].style.display = 'none'
})
clickImgDown[1].addEventListener('click', () => {
    clickImgUp[0].style.display = 'none'
    clickImgUp[1].style.display = 'block'
    clickImgUp[2].style.display = 'none'
    clickImgUp[3].style.display = 'none'
})
clickImgDown[2].addEventListener('click', () => {
    clickImgUp[0].style.display = 'none'
    clickImgUp[1].style.display = 'none'
    clickImgUp[2].style.display = 'block'
    clickImgUp[3].style.display = 'none'
})
clickImgDown[3].addEventListener('click', () => {
    clickImgUp[0].style.display = 'none'
    clickImgUp[1].style.display = 'none'
    clickImgUp[2].style.display = 'none'
    clickImgUp[3].style.display = 'block'
})

slide(clickImgIndex)
clickImgPrevBtn.addEventListener('click', () => {
    slide(clickImgIndex -= 1)
})

clickImgNextBtn.addEventListener('click', () => {
    slide(clickImgIndex += 1)
})


function slide(n) {
    if (n > clickImgUp.length) {
        clickImgIndex = 1
    }
    if (n < 1) {
        clickImgIndex = clickImgUp.length
    }
    for (let i of clickImgUp) {
        i.style.display = "none"
    }
    clickImgUp[clickImgIndex - 1].style.display = 'block'
}



mediaSlide(mediaIndex)
mediaBtnPrev.addEventListener('click', () => {
    mediaSlide(mediaIndex -= 1)
})

mediaBtnNext.addEventListener('click', () => {
    mediaSlide(mediaIndex += 1)
})


function mediaSlide(x) {
    if (x > imgLargeClick.length) {
        mediaIndex = 1
    }
    if (x < 1) {
        mediaIndex = imgLargeClick.length
    }
    for (let a of imgLargeClick) {
        a.style.display = "none"
    }

    imgLargeClick[mediaIndex - 1].style.display = 'block'
}



mediaMenu.addEventListener('click',()=>{
    sideBar.style.display = "block"
    clickLargeImgBackground.style.display = "block"
    sideBarClose.addEventListener('click',()=>{
        sideBar.style.display = "none"
        clickLargeImgBackground.style.display = "none"
    })
})
