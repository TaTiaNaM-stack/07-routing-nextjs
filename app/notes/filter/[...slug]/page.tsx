import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";


interface FilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterPage({ params }: FilterPageProps) {
  const { slug } = await params;
  const searchQuery = slug[0] === 'all' ? '' : slug[0];
  const data = await fetchNotes(searchQuery, 1, []);
  console.log('Filtered notes:', data);
  return (
  <div>
    <NoteList notes={data.notes} />
  </div>
);
}