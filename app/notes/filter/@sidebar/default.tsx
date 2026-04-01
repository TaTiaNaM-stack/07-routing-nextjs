import css from './SidebarNotes.module.css';
import { getCategories } from '@/lib/api';

const NotesSidebar = async () => {
  const categories = await getCategories();
  return (
    <ul className={css.menuList}>  
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {categories.map(({tag}) => (
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