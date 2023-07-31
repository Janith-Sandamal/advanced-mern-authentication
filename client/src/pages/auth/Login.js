import React from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'

const Login = () => {

  return <div className={`container ${styles.auth}`}>
      <Card>
        <div className='--flex-center'></div>
      </Card>
    </div>;
  
};

export default Login;