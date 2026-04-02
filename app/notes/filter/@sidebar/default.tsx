// import type { FetchNotesResponse, NoteTag } from '@/types/note';
import css from './SidebarNotes.module.css';

const NotesSidebar = async () => {
  const tags: string[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];
  return (
    <ul className={css.menuList}>  
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {tags.map(tag => (
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