import './TableHeader.css';

interface TableHeaderProps {
  titles: string[]
};

export default function TableHeader (props: TableHeaderProps) {
  const { titles } = props;

  return (
    <div className="table-header">
      <h3 className="col">{titles[0]}</h3>
      <h3 className="col">{titles[1]}</h3>
      <h3 className="col">{titles[2]}</h3>
      <h3 className="col">{titles[3]}</h3>
    </div>
  )
}