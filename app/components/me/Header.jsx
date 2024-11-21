import Logo from './Logo';
import SiteNav from './SiteNav'

export default function Header() {
  return <header id="__HEADER__" className="header">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-2">
        <div className=""><Logo /></div>
        <div className=""><SiteNav /></div>
      </div>
    </div>
  </header>
}