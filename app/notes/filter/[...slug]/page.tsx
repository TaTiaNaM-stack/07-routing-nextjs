'use client'
import { useQuery } from "@tanstack/react-query";
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

export default function FilterPage() {
const {data} = useQuery({
  queryKey: ['tag'],
  queryFn: () => fetchNotes('', 1, ''),
  refetchOnMount: false,
});
  return (
  <div>
    <NoteList notes={data.notes} />
  </div>
);
}