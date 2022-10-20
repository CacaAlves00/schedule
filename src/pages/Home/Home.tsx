import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import { Link } from 'react-router-dom'
import './Home.scss'
import useGetData from './useGetData'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'


function Home() {
  const data = useGetData()

  useHandleNotLoggedIn()

  return (
    <article id="home">

      <main>
        {data.map((item) => (
          <Link to={`/${item.title}`} style={{ textDecoration: 'none' }}
            key={`home-card-link-${item.title}`}>
            <HomeCard title={item.title}>
              {item.children}
            </HomeCard>
          </Link>
        ))}
      </main>
    </article>
  )
}

export default Home