import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Link } from "@remix-run/react";

export default function SiteNav() {
  const navs = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Documentation',
      to: '/documentation',
    }
  ]

  return <div className="site-nav flex justify-between items-center">
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {
          navs.map((n, index) => {
            const { name, to } = n;
            return <NavigationMenuItem key={ index }>
              <Link className="menu-item-style group" to={ to }>
                { name }
              </Link>
            </NavigationMenuItem>
          })
        }
        
      </NavigationMenuList>
    </NavigationMenu>
    <div className="ml-2 flex gap-2">
      <Button>Join with Us</Button>
    </div>
  </div> 
}