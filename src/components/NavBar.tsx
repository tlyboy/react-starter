import { FC } from 'react'
import classNames from 'classnames'
import { toggleDark } from '@/utils/dark'

const NavBar: FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={classNames('flex justify-center gap-2 text-xl', className)}>
      <button
        className="icon-btn i-carbon-sun dark:i-carbon-moon"
        title="切换深色模式"
        onClick={toggleDark}
      />

      <a
        className="icon-btn i-carbon-logo-github"
        href="https://github.com/tlyboy/react-starter"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      />
    </nav>
  )
}

export default NavBar
