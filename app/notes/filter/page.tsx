import { getCategories } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

async function Notes() {
    const data = await getCategories();
    console.log('Notes:', data);
    return (
        <div>
            <NoteList notes={data} />
        </div>
    );
}

export default Notes;