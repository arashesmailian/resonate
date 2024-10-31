import type { FC } from 'react';
import  styles from './card_row_item.module.scss';

type Props = {
    title: string;
    text: string;
}

const CardRowItem:FC<Props> = ({title,text}) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}:</span>
            <div className={styles.text}>{title==='Website'?<a href={text}>{text}</a>:text}</div>
        </div>
    )
}
export default CardRowItem
