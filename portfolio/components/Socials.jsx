'use client'
import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://www.linkedin.com/in/charles-yao-567ab4271/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/charly2005?tab=repositories',
    name: <RiGithubFill />,
  },
]


const Socials = ({containerStyles, iconsStyles}) => {
  return <div className = {`${containerStyles}`}>
    {icons.map((icon,index) => {
      return <Link href = {icon.path} key = {index} target = '_blank'>
        <div className = {`${iconsStyles}`}>
          {icon.name}
        </div>
      </Link>
    })}

  </div>
}

export default Socials