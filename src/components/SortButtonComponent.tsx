import { useEffect } from "react";
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
      localStorage.setItem("active", region);
    } else {
      setUnselectedCountries(
        initCountries.filter(
          (country) =>
            country.region === region &&
            !selectedCountries.some((s) => s.name === country.name)
        )
      );
      localStorage.setItem("active", region);
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

  useEffect(() => {
    localStorage.removeItem("active");
  }, []);

  const activeButton = localStorage.getItem("active");
  return (
    <StContainer>
      {sortButtonArray.map((name, index) => (
        <div key={index}>
          <StContinentButton
            name={name}
            onClick={onClickHandler}
            $activeCheck={activeButton === name}
          >
            {name}
          </StContinentButton>
        </div>
      ))}
    </StContainer>
  );
};

const StContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
`;
const StContinentButton = styled.button<{ $activeCheck: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.$activeCheck ? "#7892d7;" : "white")};
  color: ${(props) => (props.$activeCheck ? "white" : "grey")};
  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default SortButtonComponent;
