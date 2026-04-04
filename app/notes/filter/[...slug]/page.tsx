import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

type Props = {
  params: Promise<{ tag: string }>;
};

const FilterPage = async ({ params }: Props) => {
  const { tag } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["notes", tag], () => fetchNotes('', 1, tag && tag !== "all" && { tag }));
  return (
    <div>
       <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteList notes={data.notes} />
      </HydrationBoundary>
    </div>
  );
}