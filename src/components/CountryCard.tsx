import styled from "styled-components";
import { Countries } from "../types/country.type";

const CountryCard = ({
  country,
  onClickToggleHandler,
}: {
  country: Countries;
  onClickToggleHandler: (cca2: string) => void;
}) => {
  return (
    <StCardSection onClick={() => onClickToggleHandler(country.cca2)}>
      <StFlagImage src={country.flags.png} alt="flag" />
      <h3>{country.name.common}</h3>
      <p>{country.capital}</p>
    </StCardSection>
  );
};

const StCardSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 0.5rem;
  gap: 0.5rem;
`;
const StFlagImage = styled.img`
  width: 40%;
  border-radius: 0.5rem;
  margin: 1rem auto;
`;

export default CountryCard;
