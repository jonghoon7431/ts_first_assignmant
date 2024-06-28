import styled from "styled-components";
import { CountriesWithIsSelect } from "../types/country.type";

interface SortButtonProps {
  initCountries: CountriesWithIsSelect[];
  setUnselectedCountries: React.Dispatch<
    React.SetStateAction<CountriesWithIsSelect[]>
  >;
  selectedCountries: CountriesWithIsSelect[];
}

const SortButtonComponent = ({
  initCountries,
  setUnselectedCountries,
  selectedCountries,
}: SortButtonProps) => {
  console.log(selectedCountries);

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const region = e.currentTarget.name;

    if (region === "All") {
      setUnselectedCountries(
        initCountries.filter(
          (country) => !selectedCountries.some((s) => s.name === country.name)
        )
      );
    } else {
      setUnselectedCountries(
        initCountries.filter(
          (country) =>
            country.region === region &&
            !selectedCountries.some((s) => s.name === country.name)
        )
      );
    }
  };

  const sortButtonArray: string[] = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  return (
    <StContainer>
      {sortButtonArray.map((name, index) => (
        <div key={index}>
          <button name={name} onClick={onClickHandler}>
            {name}
          </button>
        </div>
      ))}
    </StContainer>
  );
};

const StContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem;
  & button {
    padding: 0.5rem 1rem;
  }
`;

export default SortButtonComponent;
