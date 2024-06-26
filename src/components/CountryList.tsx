import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCountries } from "../api/api.countries";
import { Countries } from "../types/country.type";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Countries[]>([]);

  const selected = countries.filter((country) => country.isSelect);
  const unSelected = countries.filter((country) => !country.isSelect);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      const countriesWithSelect = response.map((country) => ({
        ...country,
        isSelect,
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
      <StCountryList>
        <h1>Favorite Countries</h1>

        {selected.map((country) => (
          <StDiv key={country.cca2}>
            <CountryCard
              country={country}
              onClickToggleHandler={onClickToggleHandler}
            />
          </StDiv>
        ))}

        <h1>Countries</h1>

        {unSelected.map((country) => (
          <StDiv key={country.cca2}>
            <CountryCard
              country={country}
              onClickToggleHandler={onClickToggleHandler}
            />
          </StDiv>
        ))}
      </StCountryList>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 90%;
  padding: 2rem;
`;

const StCountryList = styled.div`
  background-color: #ffffff;
  padding: 2rem;
`;

const StDiv = styled.div`
  display: flex;
  background-color: red;
  justify-content: center;
`;

export default CountryList;
