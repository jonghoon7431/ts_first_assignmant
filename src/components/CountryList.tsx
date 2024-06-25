import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCountries } from "../api/api.countries";
import { Countries } from "../types/country.type";

const CountryList = () => {
  const [contries, setContries] = useState<Countries[]>([]);

  useEffect(() => {
    getCountries().then((res) => setContries(res));
  }, []);

  return (
    <Container>
      <StCountryList>
        <h1
          style={{
            marginLeft: "3rem",
          }}
        >
          Countries
        </h1>
        <StDiv>
          {contries.map((country) => (
            <div>
              <StPlagImage src={country.flags.png} alt="" />
              <h3>{country.name.common}</h3>
              <p>{country.capital}</p>
            </div>
          ))}
        </StDiv>

        {/* <CountryCard /> */}
      </StCountryList>
    </Container>
  );
};
//여기에서 map 돌리고 card로 정보를 내려서 보여주라는게 대체 무슨말임????????????????????????????
//CountryList에서 map으로 나라 정보 렌더링해서....
//CountryCard 에서 나라의 정보를 보여줘라...
//무슨말이지 ... 진짜 ....?

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
  display: grid;
  grid-template-columns: repeat(4, 20%);
  gap: 2rem;
  justify-content: center;
`;

const StPlagImage = styled.img`
  width: 14rem;
`;

export default CountryList;
