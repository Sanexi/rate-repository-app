import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = ({repository}) =>{
    console.log(repository);
    return(
        <Text>
            Full name: {repository.fullName}{"\n"}
            Description: {repository.description}{"\n"}
            Language: {repository.language}{"\n"}
            Stars: {repository.stargazersCount}{"\n"}
            Forks: {repository.forksCount}{"\n"}
            Reviews: {repository.reviewCount}{"\n"}
            Rating: {repository.ratingAverage}{"\n"}
        </Text>
    );
};

export default RepositoryItem;