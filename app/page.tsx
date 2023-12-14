import Container from "@/components/Container";
import TicTacToe from "@/components/questions/TicTacToe";

export default function Home() {
  return (
    <Container >
      <div className="p-6 border-2 h-full border-gray-300 rounded my-6  flex flex-col justify-center items-center">
        <TicTacToe />
      </div>
    </Container>
  )
}
