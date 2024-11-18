import Logo from './Logo';
import SiteNav from './SiteNav'

export default function Header() {
  return <header id="__HEADER__" className="header">
    <div className="container mx-auto px-4">
      <Logo />
      <SiteNav />
    </div>
  </header>
}