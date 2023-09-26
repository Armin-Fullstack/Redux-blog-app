import { formatDistanceToNow, parseISO } from "date-fns";

export default function TimeAgo({ timestamp }): JSX.Element {
  let timeAgo: string = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <span>{timeAgo}</span>;
}
