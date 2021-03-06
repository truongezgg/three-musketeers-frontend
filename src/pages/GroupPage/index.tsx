import Header from 'components/Header';
import React, { FC } from 'react';

interface IProps {}

const GroupPage: FC<IProps> = (props) => {
  return (
    <div className="px-2">
      <Header title="Group" />
      <div>GroupPage</div>
    </div>
  );
};

export default GroupPage;
