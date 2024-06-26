import { CountriesWithIsSelect } from "../types/country.type";

interface Props {
  unSelected: CountriesWithIsSelect[];
}

const SortButtonComponent = ({ unSelected }: Props) => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    unSelected.filter((country) => country.region === e.currentTarget.name);
  };
  //1 sortCountries state 만들어서 조건식에 추가하기
  //2

  return (
    <div>
      <button name="Africa" onClick={(e) => onClickHandler(e)}>
        Africa
      </button>
      <button name="Americas" onClick={(e) => onClickHandler(e)}>
        Americas
      </button>
      <button name="Asia" onClick={(e) => onClickHandler(e)}>
        Asia
      </button>
      <button name="Europe" onClick={(e) => onClickHandler(e)}>
        Europe
      </button>
      <button name="Oceania" onClick={(e) => onClickHandler(e)}>
        Oceania
      </button>
    </div>
  );
};

export default SortButtonComponent;
