import React from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/LoadingSpinner'
import Calculator from '../../components/Calculator';

const HomeScreen = ({ navigation }) => {
  const loading = useSelector(state => state.loading);

  return (
    loading ? <LoadingSpinner/>  : <Calculator navigation={navigation}/>
  )
}

export default HomeScreen;
