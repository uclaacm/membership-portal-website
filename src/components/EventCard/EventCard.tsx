// TODO
// import styles from './EventCard.module.scss';

type EventCardProps = {
  title: string;
  date: string;
};

export default function EventCard({ title, date }: EventCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}
