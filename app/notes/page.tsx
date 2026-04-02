import { fetchNotes } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "@/app/notes/Notes.client";


const NotesPage = async () => {
const queryClient = new QueryClient();
await queryClient.prefetchQuery({
	queryKey:["notes", {currentPage: 1, searchQuery: "", tag: ""}],
	queryFn: () => fetchNotes("", 1, ""),
})
  return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<NotesClient />
	</HydrationBoundary>
  )
}

export default NotesPage;