'use client'
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

const FilterPage = () => {
  const params = useParams<{ slug: string[] }>();
  const category = params.slug[0] === 'all' ? undefined : params.slug[0];
  const { data } = useQuery({
    queryKey: ['notes', category],
    queryFn: () => fetchNotes('', 1, category || ''),
    refetchOnMount: false,
  });
  return (
    <div>
      {data?.notes?.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
}