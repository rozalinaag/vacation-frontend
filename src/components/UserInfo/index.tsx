import React from 'react';
// @ts-ignore
import styles from './UserInfo.module.scss';

type Props = {
    avatarUrl?: string,
    fullName: string,
    additionalText?: string,
    position: string
}

export const UserInfo = ({ avatarUrl, fullName, additionalText, position }: Props) => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{position}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
