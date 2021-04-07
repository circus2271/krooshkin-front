const footerYearElement = document.querySelector('.footer .year')
const footerYear = footerYearElement.innerText
const currentYear = new Date().getFullYear()

if (footerYear !== currentYear) {
  footerYearElement.innerText = currentYear
}