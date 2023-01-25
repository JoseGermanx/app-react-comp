import React from 'react';
import Cardwine from './Card';
import Navigation from './Navbar';
import {data} from '../data/data.js'
import styles from './styles/Home.module.css';

export default function Home() {
   return (    
    <div >
      <Navigation/>
      <div >
      <div className={styles.container}>
      {data.length > 0 ? data.map((e) => {    
        return (          
          <div key={e.id}>
          <div className={styles.containerCard}>
          <Cardwine
          nombre={e.wine}
          vineria={e.winery}
          imagen={e.image}
          location={e.location}
          />
          </div>
        </div>
        
        )
       }):<div style={{display:'flex', alignItems:'center'}}><h1>No hay datos</h1></div>}
       </div>
    </div>
    </div>
)
}
