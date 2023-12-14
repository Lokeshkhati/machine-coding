import Container from "@/components/Container";
import Wrapper from "@/components/Wrapper";
import GridLight from "@/components/questions/GridLight";
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


    </Container>
  )
}
