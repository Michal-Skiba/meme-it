
import styles from './hashTag.module.scss'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface HashTagProps {
  id: string;
  onDelete: (id: string) => void;
  content: string;
}

export const HashTag: React.FC<HashTagProps> = ({ content, onDelete, id }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>
        {content}
      </p>
      <HighlightOffIcon onClick={() => onDelete(id)} className={styles.icon} />
    </div>
  )
}