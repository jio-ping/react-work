import { useState } from "react";

export default function Order() {
  const maratangSize = { 소: 7000, 중: 8000, 대: 9000 };
  const maratangIngredients = {
    청경채: +1000,
    치즈떡: +1000,
    분모자: +1000,
    비엔나: +1000,
    중국당면: +1000,
    숙주: +1000,
    배추: +1000,
    옥수수면: +1000,
    팽이버섯: +1000,
  };

  const initialData = {
    size: "소",
    cost: maratangSize["소"],
    ingredient: [],
  };
  const [data, setData] = useState(initialData);

  function handleChange(e) {
    const isChecked = e.target.checked;
    const { name, id } = e.target;

    let nextFormData;

    if (name === "size") {
      nextFormData = {
        ...data,
        [name]: id,
      };
    } else if (name === "ingredient") {
      let updatedIngredients;
      if (isChecked) {
        updatedIngredients = [...data.ingredient, id];
      } else {
        updatedIngredients = data.ingredient.filter((item) => item !== id);
      }
      nextFormData = {
        ...data,
        [name]: updatedIngredients,
      };
    }

    const totalCost = calculateTotalCost(
      nextFormData.size,
      nextFormData.ingredient
    );

    nextFormData.cost = totalCost;
    setData(nextFormData);
  }

  console.log(data);
  function calculateTotalCost(size, ingredients) {
    let totalCost = maratangSize[size];
    ingredients.forEach((ingredient) => {
      totalCost += maratangIngredients[ingredient];
    });
    return totalCost;
  }

  return (
    <>
      <figure style={{ borderBottom: "1px solid black" }}>
        <img
          style={{ width: "100%", height: "300px" }}
          src="https://mashija.com/wp-content/uploads/2023/10/004-2.png"
          alt=""
        />
        <figcaption>
          <h2>[주문 1위] 마라탕</h2>
          <p>담백한 국물이 끝내줍니다ㅎ 맛있겠죵 ! 😎 </p>
          <p>
            기본 재료 : 중국당면, 옥수수면, 배추, 느타리, 팽이, 청경채, 숙주,
            느타리, 뉴진면, 배추, 목이, 건두부, 푸주
          </p>
        </figcaption>
      </figure>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          <h3>가격</h3>
          {Object.entries(maratangSize).map((item, index) => {
            return (
              <li key={index}>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="radio"
                  id={item[0]}
                  data-cost={item[1]}
                  name="size"
                  checked={data.size === item[0]}
                />
                <label htmlFor={item[0]}>
                  <span>{item[0]}</span>
                  <span>{item[1]}원</span>
                </label>
              </li>
            );
          })}
        </ul>
        <ul style={{ listStyle: "none" }}>
          <h3>추가 선택</h3>
          {Object.entries(maratangIngredients).map((item) => {
            return (
              <li key={item[0]}>
                <input
                  onClick={(e) => handleChange(e)}
                  type="checkbox"
                  id={item[0]}
                  data-cost={item[1]}
                  name="ingredient"
                />
                <label htmlFor={item[0]}>
                  <span>{item[0]}</span>
                  <span>{item[1]}원</span>
                </label>
              </li>
            );
          })}
        </ul>
        <button style={{ width: "35%", margin: "auto" }}>
          {data.cost} 담기
        </button>
      </form>
    </>
  );
}
