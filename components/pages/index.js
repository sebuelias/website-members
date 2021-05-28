import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MemberList from 'components/members-list';
import classNames from './home-page.module.scss';

const HomePage = ({ membersArr }) => {
  const [searchKey, setSearchKey] = useState('');
  const [filteredMembersArray, setFilteredMembersArray] = useState([...membersArr]);

  const handleSearch = (event) => {
    setSearchKey(event.target.value.toLowerCase());
  };

  useEffect(() => {
    let filteredMembers = membersArr.filter((member) => {
      return member.username.toLowerCase().includes(searchKey);
    });

    setFilteredMembersArray([...filteredMembers]);
  }, [searchKey]);

  return (
    <div className={classNames.container}>
      <img className={classNames.img} src="/images/Real-Dev-Squad@1x.png" alt="real-dev squad" />
      <h1 className={classNames.heading}>Real Dev Squad Members</h1>
      <input
        className={classNames.input}
        type="search"
        placeholder="Search"
        value={searchKey}
        onChange={handleSearch}
      />
      <MemberList membersArr={filteredMembersArray} />
    </div>
  );
};

HomePage.propTypes = {
  membersArr: PropTypes.array
};

HomePage.defaultProps = {
  membersArr: []
};

export default HomePage;
