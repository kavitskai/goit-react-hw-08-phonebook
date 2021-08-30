import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";
import { Header } from "./AppBar.styled";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
    <Header>
        <Navigation />
        { isLoggedIn && <UserMenu />}        
    </Header>
  )
}