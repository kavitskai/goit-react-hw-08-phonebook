import { HomeContainer, HomeText, MainTitle } from "../App/App.styled";
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function HomePage() {
    return (
        <HomeContainer>
            <MainTitle>Phone book<ListAltIcon style={{ fontSize: 40, marginLeft: 10 }}/></MainTitle>
            <HomeText>your contacts list</HomeText>
        </HomeContainer>
    )
}