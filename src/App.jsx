
import styled from 'styled-components'
function App() {

  return (
    
       <Container>
<TopContainer>
  <div className='logo'>
    <img src="/logo.svg" alt="" />
  </div>
  <div className='search'>
    <input type="text" placeholder='Search food' />
  </div>
</TopContainer>

<FilterContainer>
<Button>All</Button>
<Button>Breakfast</Button>
<Button>Lunch</Button>
<Button>Dinner</Button>

</FilterContainer>
<FoodCardContainer>

  <FoodCards>

  </FoodCards>
</FoodCardContainer>
    </Container>
  )
}

export default App ;
const Container = styled.div`
  
margin: 0 auto;
max-width: 1200px;

`;

const TopContainer = styled.section`

min-height:140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;


.search { input{
  background-color: transparent;
  border: 1px solid red;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  padding: 0 10px;
  color: white;
}}
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.button`
background:#ff4343;
border-radius: 5px;
color: white;
padding: 6px 12px;
`;

const FoodCardContainer = styled.section`
background-image: url("/bg.png");
height: calc(100vh - 210px);
background-size: cover;

`;
const FoodCards = styled.div``;