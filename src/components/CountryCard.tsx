import styled from "styled-components";
import { CountriesWithIsSelect } from "../types/country.type";

interface CountryProps {
  country: CountriesWithIsSelect;
  onClickToggleHandler: (cca2: string, isSelect: boolean) => void;
}

const CountryCard = ({ country, onClickToggleHandler }: CountryProps) => {
  return (
    <StCardSection
      onClick={() => onClickToggleHandler(country.cca2, country.isSelect)}
    >
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
  padding: 1rem;
  gap: 0.5rem;
  &:hover {
    box-shadow: inset 0 0 10px #7892d7;
  }
`;
const StFlagImage = styled.img`
  width: 40%;
  border-radius: 0.5rem;
  margin: 1rem auto;
`;

export default CountryCard;
