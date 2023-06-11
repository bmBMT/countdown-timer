import React from 'react'
import SocialLink from './UI/SocialLink/SocialLink'

const Social = () => {
  return (
    <div style={{
      display: 'flex',
      gap: 28,
      transform: 'translateY(40px)'
    }}>
      <SocialLink name={'logo-vk'} href={'https://vk.com/bmbmt'} />
      <SocialLink name={'logo-github'} href={'https://github.com/bmBMT'} />
    </div>
  )
}

export default Social
