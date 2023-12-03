import { Card, Row, Col } from "antd";
import Header from "../../header/header";

const Recipes = () => {
  const recipes = [
    {
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish.",
      image: "spa.jpg",
    },
    {
      title: "Chicken Alfredo",
      description: "Creamy Alfredo sauce with grilled chicken.",
      image: "alfre.jpg",
    },
    // {
    //   title: "Vegetarian Stir-Fry",
    //   description: "Colorful mix of vegetables with tofu.",
    //   image: "stir.jpg",
    // },
    // {
    //   title: "Homemade Pizza",
    //   description: "Create your own pizza with favorite toppings.",
    //   image: "pizza.jpg",
    // },
  ];

  return (
    <>
      <Header />
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
        style={{ marginTop: "2em" }}
      >
        {recipes.map((recipe, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={recipe.title}
              cover={
                <img
                  alt={recipe.title}
                  src={`/images/${recipe.image}`}
                  style={{ height: 150, objectFit: "cover" }}
                />
              }
              style={{ width: "95%" , marginLeft: "2.5%", backgroundColor: "#85DB41"}}
            >
              <p>{recipe.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
