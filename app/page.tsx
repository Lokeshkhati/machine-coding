import Container from "@/components/Container";
import Wrapper from "@/components/Wrapper";
import GridLight from "@/components/questions/GridLight";
import StarRating from "@/components/questions/StarRating";
import TicTacToe from "@/components/questions/TicTacToe";

export default function Home() {
  return (
    <Container >
      <Wrapper>
        <TicTacToe />
      </Wrapper>

      <Wrapper>
        <GridLight />
      </Wrapper>

      <Wrapper>
        <StarRating numOfStars={5} />
      </Wrapper>


    </Container>
  )
}
