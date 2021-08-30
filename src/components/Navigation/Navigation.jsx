import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";
import { NavList, NavItem } from "./Navigation.styled";
import { NavLink } from "react-router-dom";
import { AuthNav } from "../AuthNav/AuthNav";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <NavList>
            <NavItem>
                <NavLink
                    exact
                    to="/"
                    className="navlink"
                    activeClassName="activelogo">
                    <ImportContactsIcon style={{ fontSize: 50 }}/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    exact
                    to="/"
                    className="navlink"
                    activeClassName="activelink">
                    Home</NavLink>
            </NavItem>
            {isLoggedIn ? <NavItem>
                <NavLink
                    exact
                    to="/contacts"
                    className="navlink"
                    activeClassName="activelink">
                    Contacts</NavLink>
            </NavItem> : <AuthNav /> }
        </NavList>
    )
}