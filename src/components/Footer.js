import { footerLinks } from '../data'
import { footerIcons } from '../data'

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {footerLinks.map((link) => {
          const { id, content } = link
          return (
            <li key={id}>
              <a href={`#${content}`} class="footer-link">
                {content}
              </a>
            </li>
          )
        })}
      </ul>
      <ul class="footer-icons">
        {footerIcons.map((pageIcon) => {
          const { id, icon } = pageIcon
          return (
            <li key={id}>
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="footer-icon"
                rel="noreferrer"
              >
                <i class={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
