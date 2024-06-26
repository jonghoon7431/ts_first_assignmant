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
    <div onClick={() => onClickToggleHandler(country.cca2)}>
      <StFlagImage src={country.flags.png} alt="flag" />
      <h3>{country.name.common}</h3>
      <p>{country.capital}</p>
    </div>
  );
};

const StFlagImage = styled.img`
  width: 14rem;
`;

export default CountryCard;
