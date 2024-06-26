import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCountries } from "../api/api.countries";
import { CountriesWithIsSelect } from "../types/country.type";
import CountryCard from "./CountryCard";
import SortButtonComponent from "./SortButtonComponent";

const CountryList = () => {
  const [countries, setCountries] = useState<CountriesWithIsSelect[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<
    CountriesWithIsSelect[]
  >([]);

  const selected = countries.filter((country) => country.isSelect);
  const unSelected = countries.filter((country) => !country.isSelect);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      const countriesWithSelect = response.map((country) => ({
        ...country,
        isSelect: false,
      }));
      setCountries(countriesWithSelect);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedCountries(selected);
  }, [countries]);

  const onClickToggleHandler = (cca2: string) => {
    setCountries((prev) =>
      prev.map((country) =>
        country.cca2 === cca2
          ? { ...country, isSelect: !country.isSelect }
          : country
      )
    );
  };

  return (
    <Container>
      <SortButtonComponent unSelected={unSelected} />
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
      <StH1>Countries</StH1>`
      <StCountryList>
        {unSelected.map((country) => (
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
