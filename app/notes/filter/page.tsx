import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

async function Notes() {
    const data = await fetchNotes('', 1, []);
    console.log('Notes:', data);
    return (
        <div>
            <NoteList notes={data.notes} />
        </div>
    );
}

export default Notes;