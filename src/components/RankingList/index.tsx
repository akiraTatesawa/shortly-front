import { APIRanking, RankingData } from "../../@types";

interface RankingItemProps extends APIRanking {
  rankingPosition: number;
}

interface RankingListProps {
  data: RankingData;
}

function RankingItem({
  rankingPosition,
  name,
  linksCount,
  visitCount,
}: RankingItemProps) {
  return (
    <li>{`${rankingPosition}. ${name} - ${linksCount} links - ${visitCount} visualizações`}</li>
  );
}

export default function RankingList({ data }: RankingListProps) {
  return (
    <ul>
      {data?.map((item, index) => (
        <RankingItem
          key={item.id}
          rankingPosition={index + 1}
          name={item.name}
          linksCount={item.linksCount}
          visitCount={item.visitCount}
        />
      ))}
    </ul>
  );
}
