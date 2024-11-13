import Button from '../Button/Button'
import style from './PostCard.module.css'
export default function PostCard({ data }) {

    return (
        <div className={style.card}>
            <img src={data.image} alt="Foto" />
            <div className={style.textSection}>
                <div className="title">
                    <strong>{data.title}</strong>
                </div>
                <div className="description">
                    {data.content}
                </div>
                <div className="tags">
                    {data.tags}
                </div>
                <Button />


                {data.published && < PostCard />}
            </div>
        </div>

    )

}