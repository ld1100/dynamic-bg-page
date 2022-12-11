const ACTIVE = 'active'
const menu_logo = document.querySelector('header .menu-logo')
const main_structure = document.querySelector('.main-structure')
const active_video = document.querySelectorAll('.main-structure .content video')
const active_video_overlay = document.querySelector('.main-structure .content .video-overlay')

const main_header = document.querySelector('.content .text-description h1')
const second_header = document.querySelector('.content .text-description h2')
const paragraph = document.querySelector('.content .text-description p')

const menu_button = document.querySelectorAll('.aside-menu a')
const nav_btn = document.querySelectorAll('.slider-navigation .nav-btn ')
active_video[0].classList.remove(ACTIVE)
active_video[0].classList.add(ACTIVE)
nav_btn[0].classList.remove(ACTIVE)
nav_btn[0].classList.add(ACTIVE)

active_video_overlay.className = 'video-overlay video-overlay-aurora'
main_header.innerHTML = CONTENT_INFO.aurora.h1
second_header.innerHTML = CONTENT_INFO.aurora.h2
paragraph.innerHTML = CONTENT_INFO.aurora.p

menu_logo.addEventListener('click', () => {
    menu_logo.classList.toggle(ACTIVE)
    main_structure.classList.toggle(ACTIVE)
})

menu_button.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        active_video.forEach((video) => {
            video.classList.remove(ACTIVE)
        })
        active_video[index].classList.add(ACTIVE)
        modify_content(index)
    })
})

nav_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        active_video.forEach((video) => {
            video.classList.remove(ACTIVE)
        })

        active_video[index].classList.add(ACTIVE)
        modify_content(index)
    })
})

function modify_content(index) {
    nav_btn.forEach((btn) => {
        btn.classList.remove(ACTIVE)
    })
    nav_btn[index].classList.add(ACTIVE)
    switch (index) {
        case 0:
            main_header.innerHTML = CONTENT_INFO.aurora.h1
            second_header.innerHTML = CONTENT_INFO.aurora.h2
            paragraph.innerHTML = CONTENT_INFO.aurora.p
            active_video_overlay.className = 'video-overlay video-overlay-aurora'
            break
        case 1:
            main_header.innerHTML = CONTENT_INFO.beach.h1
            second_header.innerHTML = CONTENT_INFO.beach.h2
            paragraph.innerHTML = CONTENT_INFO.beach.p
            active_video_overlay.className = 'video-overlay video-overlay-beach'
            break
        case 2:
            main_header.innerHTML = CONTENT_INFO.seasideCity.h1
            second_header.innerHTML = CONTENT_INFO.seasideCity.h2
            paragraph.innerHTML = CONTENT_INFO.seasideCity.p
            active_video_overlay.className = 'video-overlay video-overlay-seasideCity'
            break
        case 3:
            main_header.innerHTML = CONTENT_INFO.seaWave.h1
            second_header.innerHTML = CONTENT_INFO.seaWave.h2
            paragraph.innerHTML = CONTENT_INFO.seaWave.p
            active_video_overlay.className = 'video-overlay video-overlay-seaWave'
            break
    }
}
