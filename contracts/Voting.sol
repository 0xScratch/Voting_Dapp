// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.0 < 0.9.0;

import '@openzeppelin/contracts/access/Counters.sol';

contract Voting {
    using Counters for Counters.Counter;
    Counters.Counter private totalPolls;
    Counters.Counter private totalContestants;

    struct PollStruct {
        uint id;
        string image;
        string title;
        string description;
        uint votes;
        uint contestants;
        bool deleted;
        address director;
        uint startsAt;
        uint endsAt;
        uint timestamp;
        address[] voters;
        string[] avatars;
    }

    struct ContestantStruct {
        uint id;
        string image;
        string name;
        address voter;
        uint votes;
        address[] voters;
    }

    mapping(uint => bool) pollExist;
    mapping(uint => PollStruct) polls;
    mapping(uint => mapping(address => bool)) voted;
    mapping(uint => mapping(address => bool)) contested;
    mapping(uint => mapping(uint => ContestantStruct)) contestants;

    
}