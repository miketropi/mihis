import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link } from "@remix-run/react";

export default function SiteNav() {
  const navs = [
    {
      name: 'Home',
      to: '/',
    }
  ]

  return <div>
    <NavigationMenu>
      <NavigationMenuList>
        {
          navs.map(n => {
            const { name, to } = n;
            return <NavigationMenuItem>
              <Link href={ to } legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  { name }
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          })
        }
        
      </NavigationMenuList>
    </NavigationMenu>
  </div> 
}