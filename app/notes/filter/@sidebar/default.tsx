// import { Note } from '@/types/note';
import css from './SidebarNotes.module.css';
import { getCategories } from '@/lib/api';

// interface NotesSidebarProps {
//   notes: Note[];
// }

const NotesSidebar = async () => {
  const categories = await getCategories();
  console.log('Categories:', categories);
  return (
    <ul className={css.menuList}>  
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {categories.map(category => (
        <li key={category.tag} className={css.menuItem}>
            <a href={`/notes/filter/${category.tag}`} className={css.menuLink}>
                {category.tag}
            </a>
        </li>
    ))}
    </ul>
  );
};

export default NotesSidebar;