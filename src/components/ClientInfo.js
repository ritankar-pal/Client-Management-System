import React from 'react'
import ClientInfoHeader from './ClientInfoHeader'
import ClientDetails from './ClientDetails'
import { Outlet } from 'react-router-dom'

const ClientInfo = () => {
  return (
    <div>
        <ClientInfoHeader/>
        <Outlet/>
    </div>
  )
}

export default ClientInfo