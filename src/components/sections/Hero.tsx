import { FunctionComponent } from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import Cover from "../../assets/hero-cover.jpg"

const Wrapper = styled.div`
  position: relative;
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 0 1.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Cover});
    background-size: cover;
    background-position: center;
    filter: brightness(50%) contrast(80%);
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-family: "Ubuntu";
  font-size: 5rem;
  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.7);
  margin-bottom: 0.4em;
`;

const SubTitle = styled(Title)`
  font-size: 2.75rem;
  font-weight: 300;
  margin-bottom: 1.75em;
`;

interface HeroProps {
  onSearch: Function;
  searchQuery: string | null;
}

const Hero: FunctionComponent<HeroProps> = ({ onSearch, searchQuery }) => {
  return (
    <Wrapper>
      <Title>Your Favorite movies. Explained.</Title>
      <SubTitle>Figure out what happened. Then find out why.</SubTitle>
      <SearchInput onSearch={onSearch} value={searchQuery} />
    </Wrapper>
  );
};

export default Hero;
