import styles from '../_components/dataTable/DataTable.module.scss'

export const getStatusClassName = (status: string) => {
    switch (status) {
        case '승인완료':
            return styles.approved;
        case '승인거부':
            return styles.denied;
        case '승인대기':
            return styles.waiting;
    }
}