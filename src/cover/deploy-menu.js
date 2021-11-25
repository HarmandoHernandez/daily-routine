const DeployMenu = () => {
  const deploy = document.getElementById('header__deploy-menu')
  const bars = document.querySelectorAll('#header__deploy-menu span')
  const menu = document.getElementById('header__menu')

  deploy.addEventListener('click', () => {
    deploy.classList.toggle('header__deploy-menu--active')
    bars.forEach((bar) => {
      bar.classList.toggle('header__bar--active')
    })
    // Menu
    menu.classList.toggle('header__menu--open')
  })
}

DeployMenu()
