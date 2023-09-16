import Link from '../Link'
import './styles.css'

function Header() {
  return (
    <header>
      <nav>
        <Link texto="Cursos" redirect="/cursos" />
        <Link texto="Blog" redirect="/blog" />
        <Link texto="Contato" redirect="/contato" />
      </nav>
    </header>
  )
}

export default Header