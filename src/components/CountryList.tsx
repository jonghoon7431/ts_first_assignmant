import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCountries } from "../api/api.countries";
import { CountriesWithIsSelect } from "../types/country.type";
import CountryCard from "./CountryCard";
import SortButtonComponent from "./SortButtonComponent";

const CountryList = () => {
  const [initCountries, setInitCountries] = useState<CountriesWithIsSelect[]>(
    []
  );
  const [selectedCountries, setSelectedCountries] = useState<
    CountriesWithIsSelect[]
  >([]);
  const [unselectedCountries, setUnselectedCountries] = useState<
    CountriesWithIsSelect[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      const countriesWithSelect: CountriesWithIsSelect[] = response.map(
        (country) => ({
          ...country,
          isSelect: false,
        })
      );
      setInitCountries(countriesWithSelect);
      setUnselectedCountries(countriesWithSelect);
    };
    fetchData();
  }, []);

  const onClickToggleHandler = (cca2: string) => {
    setUnselectedCountries((prev) =>
      prev.map((country) =>
        country.cca2 === cca2
          ? { ...country, isSelect: !country.isSelect }
          : country
      )
    );

    setSelectedCountries((prev) => {
      const isSelected = prev.some((country) => country.cca2 === cca2);
      if (isSelected) {
        return prev.filter((country) => country.cca2 !== cca2);
      } else {
        const selectedCountry = unselectedCountries.find(
          (country) => country.cca2 === cca2
        );
        return selectedCountry
          ? [...prev, { ...selectedCountry, isSelect: true }]
          : prev;
      }
    });
  };

  return (
    <Container>
      <SortButtonComponent
        setUnselectedCountries={setUnselectedCountries}
        initCountries={initCountries}
        selectedCountries={selectedCountries}
      />
      <StH1>Favorite Countries</StH1>
      <StSelectedCountryList>
        {selectedCountries.length > 0 ? (
          selectedCountries.map((country) => (
            <div key={country.cca2}>
              <CountryCard
                country={country}
                onClickToggleHandler={onClickToggleHandler}
              />
            </div>
          ))
        ) : (
          <StGuideDiv>*Countries 항목을 클릭하여 선택해주세요</StGuideDiv>
        )}
      </StSelectedCountryList>
      <StH1>Countries</StH1>
      <StCountryList>
        {unselectedCountries.map((country) => (
          <div key={country.cca2}>
            <CountryCard
              country={country}
              onClickToggleHandler={onClickToggleHandler}
            />
          </div>
        ))}
      </StCountryList>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem auto;
  box-sizing: border-box;
  width: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: inset 0 0 10px gray;
  border-radius: 1rem;
`;

const StH1 = styled.h1`
  padding: 1rem;
`;

const StGuideDiv = styled.div`
  padding: 1rem;
  display: flex;
  width: 50vw;
  color: #405eb1;
  font-weight: bold;
  font-size: 1.2rem;
`;

const StSelectedCountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  & section {
    border: 2px solid #7892d7;
    border-radius: 0.5rem;
    box-shadow: inset 0 0 5px #7892d7;
  }
`;
const StCountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  & section {
    box-shadow: inset 0 0 5px grey;
    border-radius: 0.5rem;
  }
`;

export default CountryList;
