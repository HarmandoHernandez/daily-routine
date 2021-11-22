
function getStyles (styleObj) {
  const properties = Object.keys(styleObj)

  return properties.map((key) => (`${key}: ${styleObj[key]}`)).join(';')
}

const color = '#2ecc71'
const styles = getStyles({ 'background-color': color })

const box = document.getElementById('body')

box.style = styles
