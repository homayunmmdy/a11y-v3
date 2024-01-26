import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '@/hooks/useGames'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
    <Image src={game.background_image} />
    <CardBody>
      <Heading fontSize='2xl'><Text>{game.name}</Text></Heading>
    </CardBody>
  </Card>
  )
}

export default GameCard