// A scroller function that takes element id and smooth scrolls to it.
export const smoothScroll = id => {
    window.scrollto({
        top: document.getElementById(id).offsetTop - 60,
        behavior: 'smooth',
    })
}

export const scrollBtn = (e) => {
    e.preventDefault()
    const scrollTarget = e.target.getAttribute('scrollto')
    setTimeout(() => {
        smoothScroll(scrollTarget)
    }, 200)
}