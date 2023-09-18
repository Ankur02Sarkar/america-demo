import styles from './Cursor.module.scss';

import useCursor from '@/src/Hooks/useCursor';

export default function Cursor () {
    const cursor = useCursor();

    return (
        <div className={styles.cursor}>

        </div>
    )
}