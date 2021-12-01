import { MenuOption } from './menu-option.js'

document.addEventListener('DOMContentLoaded', () => {
  const Menu = (function () {
    const MENU_OPTIONS = [
      new MenuOption('home', 'Home'),
      new MenuOption('support', 'Support'),
      new MenuOption('settings', 'Settings'),
      new MenuOption('about', 'About us')
    ]
    const menu = document.getElementById('header__menu')
    const menuOptionTemplate = document.getElementById('header__option') // Template of menu option
    let currentOption = MENU_OPTIONS[0].id

    const EvaluateCurrentOption = function (id = currentOption) {
      // Inactive current option
      document.getElementById(currentOption)
        .querySelector('a').classList.remove('header__link--active')
      // Active the new current Option
      document.getElementById(id)
        .querySelector('a').classList.add('header__link--active')
      // Update Current Option
      currentOption = id
    }

    const BuildOption = (option) => {
      const menuOption = menuOptionTemplate.content.cloneNode(true)
      menuOption.querySelector('a').href = '#'
      menuOption.querySelector('span').innerHTML = option.title.toUpperCase()
      menuOption.querySelector('li').setAttribute('id', option.id)
      menuOption.querySelector('li').addEventListener('click', () => EvaluateCurrentOption(option.id))
      return menuOption
    }

    // Build Menu
    MENU_OPTIONS.forEach((option) => menu.appendChild(BuildOption(option)))
    EvaluateCurrentOption()
  }())
})
