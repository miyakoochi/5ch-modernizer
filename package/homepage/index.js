// Remove ads
document.querySelector('.ads_conten_main').remove()

// Background color of main
document.querySelector('#main-content-box').style = 'background-color: "#f3f5f8"'

// Override <a> hover effect
document.querySelectorAll('a').forEach((linkEl) => {
  linkEl.classList.add(["modern-link"])
})

// Remove divider
document.querySelectorAll('.card')[2].remove()