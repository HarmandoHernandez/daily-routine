import { MenuOption } from './menu-option.js'

document.addEventListener('DOMContentLoaded', () => {
  const Menu = () => {
    const menuOptions = []
    menuOptions.push(new MenuOption('home', 'Home'))
    menuOptions.push(new MenuOption('support', 'Support'))
    menuOptions.push(new MenuOption('settings', 'Settings'))
    menuOptions.push(new MenuOption('about', 'About us'))

    // Elements nav and template of menu option
    const menu = document.getElementById('header__menu')
    const menuOptionTemplate = document.getElementById('header__option')

    BuildMenu()

    function BuildMenu () {
      menuOptions.forEach((option) => {
        const menuOption = BuildOption(option)
        menu.appendChild(menuOption)
      })
    }

    function BuildOption (option) {
      const menuOption = menuOptionTemplate.content.cloneNode(true)
      menuOption.querySelector('a').href = `#${option.id}`
      menuOption.querySelector('span').innerHTML = option.title.toUpperCase()
      // menuOption.onclick = (e) => EvaluateCurrentOption(e)
      return menuOption
    }

    EvaluateCurrentOption()

    function EvaluateCurrentOption () {
      const activeLinks = document.querySelectorAll('nav li')

      activeLinks.forEach((item) => {
        item.addEventListener('click', activateLinks)
      })
      function activateLinks () {
      // Remover al que tenga el active activo
        activeLinks.forEach((item) => {
          // item.classList.remove('header__option--active')
          item.querySelector('a').classList.remove('header__link--active')
        })
        // this.classList.add('header__option--active')
        this.querySelector('a').classList.add('header__link--active')
      }
    }
  }

  Menu()
})
