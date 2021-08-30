import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth/auth-selectors'
import { UserContainer, InfoWrap, UserName, UserEmail, Avatar, LogOutBtn } from "./UserMenu.styled";
import userAvatar from '../images/default-avatar.png';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getUserEmail);
    return (
        <UserContainer>
            <Avatar src={userAvatar}/>
            <InfoWrap>
                <UserName>Welcome, {name}</UserName>
                <UserEmail>{email}</UserEmail>
            </InfoWrap>
            <LogOutBtn type="button" onClick={() => dispatch(authOperations.logout())}><ExitToAppOutlinedIcon style={{ fontSize: 40 }}/>Log out</LogOutBtn>
        </UserContainer>
    )
}