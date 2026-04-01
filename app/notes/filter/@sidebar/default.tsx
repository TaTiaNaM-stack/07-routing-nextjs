import { NoteTags } from '@/types/note';
import css from './SidebarNotes.module.css';
import { getCategories } from '@/lib/api';

interface NotesSidebarProps {
  notes: NoteTags[];
}

const NotesSidebar = async ({ notes }: NotesSidebarProps) => {
  const categories = await getCategories(notes[0].tags[0]);
  console.log('Categories:', categories);
  return (
    <ul className={css.menuList}>  
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {categories.map((tag) => (
        <li key={tag} className={css.menuItem}>
            <a href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
            </a>
        </li>
    ))}
    </ul>
  );
};

export default NotesSidebar;