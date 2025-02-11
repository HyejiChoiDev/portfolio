interface TitleParams {
  title: string;
}

export default function Title({ title }: TitleParams) {
  return <h2 className="text-40-b mb-20">{title}</h2>;
}
