import React from 'react';
import styles from '../../styles/ReportItem.module.scss';
import { useNavigate } from 'react-router-dom';

const ReportItem = ({ board }) => {
  const navigate = useNavigate();
  const goToDetail = (e) => {
    const boardNo = e.target.parentNode.firstChild.textContent;
    console.log(boardNo);
    navigate(`/board/detail/${boardNo}`);
  };

  return (
    <li className={styles.oneItem}>
      <p>{board.postNo}</p>
      {/* <p>{board.region}</p> */}
      <p onClick={goToDetail}>{board.title}</p>
      <p>{board.email}</p>
      <p>{board.formatDate}</p>
    </li>
  );
};

export default ReportItem;
