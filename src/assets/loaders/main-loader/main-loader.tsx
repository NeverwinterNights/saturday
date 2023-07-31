import s from './main-loader.module.scss'

export const MainLoader = () => {
  return (
    <div className={s.pps}>
      <div className={s.loader}></div>
    </div>
  )
}
